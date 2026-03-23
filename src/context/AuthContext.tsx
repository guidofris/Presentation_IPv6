import React, { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const SESSION_TOKEN_KEY = 'workshop_session';
const SESSION_SECRET_KEY = 'workshop_secret';
const SESSION_EXPIRY_HOURS = 8;

interface SessionData {
  timestamp: number;
  nonce: string;
  signature: string;
}

// Generate a signing key from password using SHA-512 (different from validation hash)
// This key is NOT stored in the bundle - only derivable with the actual password
const deriveSigningKey = async (password: string): Promise<string> => {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-512', data);
  return Array.from(new Uint8Array(hashBuffer))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
};

// Generate HMAC signature
const generateSignature = async (data: string, key: string): Promise<string> => {
  const encoder = new TextEncoder();
  const keyData = await crypto.subtle.importKey(
    'raw',
    encoder.encode(key),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const signature = await crypto.subtle.sign('HMAC', keyData, encoder.encode(data));
  return Array.from(new Uint8Array(signature))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
};

// Create a signed session token using derived key
const createSessionToken = async (signingKey: string): Promise<string> => {
  const timestamp = Date.now();
  const nonce = crypto.getRandomValues(new Uint8Array(16))
    .reduce((acc, b) => acc + b.toString(16).padStart(2, '0'), '');

  const dataToSign = `${timestamp}:${nonce}`;
  const signature = await generateSignature(dataToSign, signingKey);

  const sessionData: SessionData = { timestamp, nonce, signature };
  return btoa(JSON.stringify(sessionData));
};

// Validate session token with the stored signing key
const validateSessionToken = async (token: string | null, signingKey: string | null): Promise<boolean> => {
  if (!token || !signingKey) return false;

  try {
    const sessionData: SessionData = JSON.parse(atob(token));
    const { timestamp, nonce, signature } = sessionData;

    // Check expiry
    const expiryMs = SESSION_EXPIRY_HOURS * 60 * 60 * 1000;
    if (Date.now() - timestamp > expiryMs) {
      return false;
    }

    // Verify signature
    const dataToSign = `${timestamp}:${nonce}`;
    const expectedSignature = await generateSignature(dataToSign, signingKey);

    return signature === expectedSignature;
  } catch {
    return false;
  }
};

interface AuthProviderProps {
  children: ReactNode;
  passwordHash: string; // Only used for reference, not for signing
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Validate existing session on mount
  useEffect(() => {
    const validateSession = async () => {
      const token = sessionStorage.getItem(SESSION_TOKEN_KEY);
      const signingKey = sessionStorage.getItem(SESSION_SECRET_KEY);
      const isValid = await validateSessionToken(token, signingKey);
      setIsAuthenticated(isValid);
      if (!isValid) {
        sessionStorage.removeItem(SESSION_TOKEN_KEY);
        sessionStorage.removeItem(SESSION_SECRET_KEY);
      }
      setIsLoading(false);
    };
    validateSession();
  }, []);

  // Login receives the RAW PASSWORD (not hash) to derive signing key
  const login = useCallback(async (password: string) => {
    // Derive signing key from raw password using SHA-512
    // This is different from the SHA-256 hash stored in the bundle!
    const signingKey = await deriveSigningKey(password);
    const token = await createSessionToken(signingKey);

    sessionStorage.setItem(SESSION_TOKEN_KEY, token);
    sessionStorage.setItem(SESSION_SECRET_KEY, signingKey);
    setIsAuthenticated(true);
  }, []);

  const logout = useCallback(() => {
    sessionStorage.removeItem(SESSION_TOKEN_KEY);
    sessionStorage.removeItem(SESSION_SECRET_KEY);
    setIsAuthenticated(false);
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
