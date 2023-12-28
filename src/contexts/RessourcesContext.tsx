import React, { useContext, useState, useEffect, ReactNode, createContext } from 'react';
import { Ressource } from '../scripts/types';
import { getRessources } from '../scripts/helpers/api/ressources/getRessources';

const RessourcesContext = createContext<any>({});

export function useRessources() {
  return useContext(RessourcesContext);
}

interface RessourcesProviderProps {
  children: ReactNode
}

export function RessourcesProvider({ children }: RessourcesProviderProps) {

  const [ressources, setRessources] = useState<Ressource[]>([]);
  const [ressourcesLoading, setRessourcesLoading] = useState<boolean>(true);


  useEffect(() => {
    async function fetchStats() {
      const data = await getRessources();

      data.docs.forEach((doc: any) => {
        setRessources((ressources: any) => [...ressources, doc.data()]);
      })
      setRessourcesLoading(false);
    }

    fetchStats().catch((err) => {
      console.log(err);
    })
  }, []);


  const value = {
    ressourcesLoading,
    ressources,
  }

  return (
    <RessourcesContext.Provider value={value}>
      {children}
    </RessourcesContext.Provider>
  )
}