/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_META_PIXEL_ID?: string;
  readonly VITE_META_PIXEL_TEST_CODE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
  }
}

export {};
