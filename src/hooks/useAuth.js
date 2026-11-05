import { useSession, signIn, signOut, signUp, authClient } from '../lib/auth-client';

/**
 * Hook kustom untuk kemudahan akses sesi Better Auth & operasi otentikasi di UI
 */
export function useAuth() {
  let session = { data: null, isPending: false, error: null };
  try {
    const hookResult = useSession();
    if (hookResult) {
      session = hookResult;
    }
  } catch (err) {
    console.warn('Better Auth session notice:', err);
  }

  const handleSignIn = async ({ email, password }) => {
    try {
      return await signIn.email({ email, password });
    } catch (err) {
      return { error: err };
    }
  };

  const handleSignOut = async () => {
    try {
      return await signOut();
    } catch (_) {}
  };

  const handleSignUp = async ({ email, password, name, institution }) => {
    try {
      return await signUp.email({ email, password, name, institution });
    } catch (err) {
      return { error: err };
    }
  };

  return {
    user: session?.data?.user || null,
    session: session?.data?.session || null,
    isLoading: session?.isPending || false,
    isAuthenticated: Boolean(session?.data?.user),
    role: session?.data?.user?.role || 'Writer',
    signIn: handleSignIn,
    signOut: handleSignOut,
    signUp: handleSignUp,
    authClient,
  };
}
