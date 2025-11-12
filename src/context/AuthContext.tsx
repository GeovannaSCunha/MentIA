import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type User = {
  nome: string;
  email: string;
  area: string;
};

type AuthContextType = {
  user: User | null;
  register: (user: User) => Promise<void>;
  login: (email: string) => Promise<void>;
  logout: () => Promise<void>;
  updateProfile: (user: User) => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const loadUser = async () => {
      const data = await AsyncStorage.getItem("mentia_user");
      if (data) setUser(JSON.parse(data));
    };
    loadUser();
  }, []);

  const register = async (newUser: User) => {
    await AsyncStorage.setItem("mentia_user", JSON.stringify(newUser));
    setUser(newUser);
  };

  const login = async (email: string) => {
    const data = await AsyncStorage.getItem("mentia_user");
    if (!data) throw new Error("Usuário não cadastrado.");
    const parsed: User = JSON.parse(data);
    if (parsed.email !== email) throw new Error("E-mail não corresponde ao usuário cadastrado.");
    setUser(parsed);
  };

  const logout = async () => {
    await AsyncStorage.removeItem("mentia_user");
    setUser(null);
  };

  const updateProfile = async (updated: User) => {
    await AsyncStorage.setItem("mentia_user", JSON.stringify(updated));
    setUser(updated);
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
