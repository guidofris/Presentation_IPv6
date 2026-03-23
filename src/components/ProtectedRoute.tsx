import React, { ReactNode } from 'react';
import { useAuth } from '../context/AuthContext';
import { Login } from './login';

interface ProtectedRouteProps {
  children: ReactNode;
  passwordHash: string;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  passwordHash
}) => {
  const { isAuthenticated, login } = useAuth();

  // Login receives raw password to derive session signing key
  const handleLogin = (password: string) => login(password);

  if (!isAuthenticated) {
    return <Login onSuccess={handleLogin} passwordHash={passwordHash} />;
  }

  return <>{children}</>;
};
