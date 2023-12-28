import React, { useContext, useState, useEffect, ReactNode, createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { routes } from '../routes';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate()


  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, user => {
      setUser(user)
      setAuthLoading(false);
      // console.log(`AuthContext - User found : ${user.uid}`);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signUp = async (email: string, password: string) => {
    const auth = getAuth();
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const logout = async () => {
    const auth = getAuth();
    await signOut(auth);
    navigate(routes.home.path)
  }


  const value = {
    authLoading,
    user,
    signIn,
    signUp,
    logout
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}