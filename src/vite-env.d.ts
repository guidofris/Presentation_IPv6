/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WORKSHOP_PASSWORD_HASH: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
