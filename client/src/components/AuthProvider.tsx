import {
  createContext, use, useEffect, useMemo, useState,
  type PropsWithChildren,
} from 'react';
import { doesSessionExist, getUserId } from 'supertokens-web-js/recipe/session';

type AuthProviderContextValue = {
  isAuthenticated: boolean;
  userId: string | null;
  handleSignIn: (userId: string) => void;
  handleSignOut: () => void;
};

const AuthProviderContext = createContext<AuthProviderContextValue | undefined>(
  undefined,
);

const AuthProvider = ({
  children,
}: PropsWithChildren) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);

  const handleAuthState = async () => {
    const sessionExists = await doesSessionExist();

    if (sessionExists) {
      const id = await getUserId();
      setIsAuthenticated(true);
      setUserId(id);
    } else {
      setUserId(null);
      setIsAuthenticated(false);
    }
  };

  const handleSignIn = (__userId: string) => {
    setIsAuthenticated(true);
    setUserId(__userId);
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
    setUserId(null);
  };

  useEffect(() => {
    handleAuthState();
  }, []);

  const contextValue = useMemo(
    () => ({
      isAuthenticated,
      userId,
      handleSignIn,
      handleSignOut,
    }),
    [isAuthenticated, userId],
  );

  return (
    <AuthProviderContext value={contextValue}>
      {children}
    </AuthProviderContext>
  );
};

const useAuth = () => {
  const context = use(AuthProviderContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export {
  AuthProvider, useAuth,
};
