import React, { createContext, useContext, useState } from "react";

interface User {
  name: string;
  email: string;
  profession: string;
}

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  setUser: (user: User) => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children}: { children: React.ReactNode } ) => {
  const [user, _setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    _setUser({
      email: email,
      name: 'Alfian',
      profession: 'Ngoding',
    });
  };

  const logout = () => {
    _setUser(null);
    localStorage.removeItem('token');
  };

  const setUser = (user: User) => {
    _setUser(user);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
        setUser,
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