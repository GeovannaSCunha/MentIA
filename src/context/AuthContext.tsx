import React, { createContext, useContext, useState, useEffect } from "react";
import { auth, db } from "../firebase/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  User as FirebaseUser,
} from "firebase/auth";
import { ref, set, get } from "firebase/database";

export type UserProfile = {
  nome: string;
  email: string;
  area: string;
};

type AuthContextType = {
  user: UserProfile | null;
  loading: boolean;
  register: (data: UserProfile, senha: string) => Promise<void>;
  login: (email: string, senha: string) => Promise<void>;
  logout: () => Promise<void>;
  updateProfile: (data: UserProfile) => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  // Carrega perfil ao abrir app
  useEffect(() => {
    return onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        await loadUserProfile(firebaseUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
  }, []);

  // Lê o perfil no Realtime DB
  const loadUserProfile = async (firebaseUser: FirebaseUser) => {
    const userRef = ref(db, `users/${firebaseUser.uid}`);
    const snap = await get(userRef);
    if (snap.exists()) {
      setUser(snap.val());
    }
  };

  const register = async (data: UserProfile, senha: string) => {
    const cred = await createUserWithEmailAndPassword(auth, data.email, senha);
    await set(ref(db, `users/${cred.user.uid}`), data);
    setUser(data);
  };

  const login = async (email: string, senha: string) => {
    const cred = await signInWithEmailAndPassword(auth, email, senha);
    await loadUserProfile(cred.user);
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };

  const updateProfile = async (data: UserProfile) => {
    const firebaseUser = auth.currentUser;
    if (!firebaseUser) return;

    await set(ref(db, `users/${firebaseUser.uid}`), data);
    setUser(data);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        register,
        login,
        logout,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
