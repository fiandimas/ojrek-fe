import React, { createContext, useContext, useEffect, useState } from "react";
import { useGetMe } from "../api/profile/useAuthProfile";

interface User {
  name: string;
  email: string;
  profession: string;
}

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  logout: () => void;
  setUser: (user: User) => void;
  loading: boolean;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children}: { children: React.ReactNode } ) => {
  const [user, _setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const { data, isSuccess, isError } = useGetMe();

  useEffect(() => {
    if (isSuccess) {
      const { name, email, profession } = data.data.data!;
      _setUser({ email, name, profession });
      setLoading(false);
    }

    if (isError) {
      _setUser(null);
      setLoading(false);
    }
  }, [isSuccess, isError, data]);

  const logout = () => {
    _setUser(null);
  };

  const setUser = (user: User) => {
    _setUser(user);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        logout,
        setUser,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be inside AuthProvider');
  return ctx;
}