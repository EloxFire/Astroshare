import React, { useContext, useState, useEffect, ReactNode, createContext } from 'react';

const StatsContext = createContext<any>({});

export function useStats() {
  return useContext(StatsContext);
}

interface StatsProviderProps {
  children: ReactNode
}

export function StatsProvider({ children }: StatsProviderProps) {
  // The current user will be stored in the state
  const [ressourcesCount, setRessourcesCount] = useState<number>(0);
  const [imagesCount, setImagesCount] = useState<number>(0);
  const [downloadsCount, setDownloadsCount] = useState<number>(0);
  const [visitsCount, setVisitsCount] = useState<number>(0);


  useEffect(() => {
    // Gets current documents count in Firebase Firestore Ressources collection
  }, []);


  const value = {
    ressourcesCount,
    imagesCount,
    downloadsCount,
    visitsCount,
  }

  return (
    <StatsContext.Provider value={value}>
      {children}
    </StatsContext.Provider>
  )
}