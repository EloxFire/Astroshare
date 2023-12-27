import React, { useContext, useState, useEffect, ReactNode, createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { routes } from '../routes';

const AuthContext = createContext<any>({});

export function useAuth() {
  return useContext(AuthContext);
}

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {

  const [user, setUser] = useState<any>();
  const [authLoading, setAuthLoading] = useState<boolean>(true);


  useEffect(() => {
    async function fetchStats() {
    }

    fetchStats().catch((err) => {
      console.log(err);
    })
  }, []);

  const signIn = async (email: string, password: string) => {
    const auth = getAuth();
    try {
      const userCredentials = await signInWithEmailAndPassword(auth, email, password)
      setUser(userCredentials.user);
      window.location.href = routes.home.path
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  const signUp = async (email: string, password: string) => {
    const auth = getAuth();
    try {
      const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
      setUser(userCredentials.user);
      window.location.href = routes.home.path
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  const signOut = async () => {

  }


  const value = {
    authLoading,
    user,
    signIn,
    signUp,
    signOut
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}