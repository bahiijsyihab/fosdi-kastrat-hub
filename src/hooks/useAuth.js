import { useSession, signIn, signOut, signUp, authClient } from '../lib/auth-client';

/**
 * Hook kustom untuk kemudahan akses sesi Better Auth & operasi otentikasi di UI
 */
export function useAuth() {
  const session = useSession();

  const handleSignIn = async ({ email, password }) => {
    return signIn.email({
      email,
      password,
    });
  };

  const handleSignOut = async () => {
    return signOut();
  };

  const handleSignUp = async ({ email, password, name, institution }) => {
    return signUp.email({
      email,
      password,
      name,
      institution,
    });
  };

  return {
    user: session.data?.user || null,
    session: session.data?.session || null,
    isLoading: session.isPending,
    isAuthenticated: Boolean(session.data?.user),
    role: session.data?.user?.role || 'Writer',
    signIn: handleSignIn,
    signOut: handleSignOut,
    signUp: handleSignUp,
    authClient,
  };
}
