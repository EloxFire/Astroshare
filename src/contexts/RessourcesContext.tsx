import React, { useContext, useState, useEffect, ReactNode, createContext } from 'react';
import { Ressource } from '../scripts/types';
import { getRessources } from '../scripts/helpers/api/ressources/getRessources';
import { getVisibleRessources } from '../scripts/helpers/api/ressources/getVisibleRessources';
import { getHiddenRessources } from '../scripts/helpers/api/ressources/getHiddenRessources';

const RessourcesContext = createContext<any>({});

export function useRessources() {
  return useContext(RessourcesContext);
}

interface RessourcesProviderProps {
  children: ReactNode
}

export function RessourcesProvider({ children }: RessourcesProviderProps) {

  const [ressources, setRessources] = useState<Ressource[]>([]);
  const [visibleRessources, setVisibleRessources] = useState<Ressource[]>([]);
  const [hiddenRessources, setHiddenRessources] = useState<Ressource[]>([]);
  const [ressourcesLoading, setRessourcesLoading] = useState<boolean>(true);


  useEffect(() => {
    async function fetchRessources() {
      const data = await getRessources();
      const visibleData = await getVisibleRessources()
      const hiddenData = await getHiddenRessources()

      data.docs.forEach((doc: any) => {
        setRessources((ressources: any) => [...ressources, doc.data()]);
      })

      visibleData.docs.forEach((doc: any) => {
        setVisibleRessources((ressources: any) => [...ressources, doc.data()]);
      })

      hiddenData.docs.forEach((doc: any) => {
        setHiddenRessources((ressources: any) => [...ressources, doc.data()]);
      })
      setRessourcesLoading(false);
    }

    fetchRessources().catch((err) => {
      console.log(err);
    })
  }, []);

  const updateRessources = async () => {
    const data = await getRessources();
    const visibleData = await getVisibleRessources()
    const hiddenData = await getHiddenRessources()

    setRessourcesLoading(true);
    let tempRessources: Ressource[] = [];
    let tempVisibleRessources: Ressource[] = [];
    let tempHiddenRessources: Ressource[] = [];
    data.docs.forEach((doc: any) => {
      tempRessources.push(doc.data());
    })
    visibleData.docs.forEach((doc: any) => {
      tempVisibleRessources.push(doc.data());
    })
    hiddenData.docs.forEach((doc: any) => {
      tempHiddenRessources.push(doc.data());
    })
    setRessources(tempRessources);
    setVisibleRessources(tempVisibleRessources);
    setHiddenRessources(tempHiddenRessources);
    setRessourcesLoading(false);
  }


  const value = {
    ressourcesLoading,
    ressources,
    visibleRessources,
    hiddenRessources,
    updateRessources,
  }

  return (
    <RessourcesContext.Provider value={value}>
      {children}
    </RessourcesContext.Provider>
  )
}