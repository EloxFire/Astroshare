import React, { useContext, useState, useEffect, ReactNode, createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { routes } from '../routes';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { dbCollections } from '../scripts/helpers/constants';

const AuthContext = createContext<any>({});

export function useAuth() {
  return useContext(AuthContext);
}

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {

  const [user, setUser] = useState<any>();
  const [authUser, setAuthUser] = useState<any>(null);
  const [authLoading, setAuthLoading] = useState<boolean>(true);
  const navigate = useNavigate()


  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, user => {
      setAuthUser(user)
    });

    const fetchCurrentUserData = async () => {
      // console.log("fetching user data");

      if (authUser) {
        // console.log(authUser.uid);

        const db = getFirestore();
        const usersRef = collection(db, dbCollections.users);
        const userQuery = query(usersRef, where("uid", "==", authUser.uid));
        const loggedUser = await getDocs(userQuery)
        // console.log(loggedUser.docs[0].data());

        setUser(loggedUser.docs[0].data())
        setAuthLoading(false)
      }
    }

    fetchCurrentUserData().catch((err) => {
      console.error(err)
    })

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [authUser]);

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
    setUser(null)
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