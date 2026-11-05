import { createAuthClient } from 'better-auth/react';

const getBaseUrl = () => {
  if (import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL;
  }
  if (typeof window !== 'undefined') {
    return window.location.origin;
  }
  return 'http://localhost:5000';
};

export const authClient = createAuthClient({
  baseURL: getBaseUrl(),
});

export const { signIn, signOut, signUp, useSession } = authClient;

