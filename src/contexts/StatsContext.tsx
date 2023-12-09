import React, { useContext, useState, useEffect, ReactNode, createContext } from 'react';
import { getRessourcesCount } from '../scripts/helpers/api/ressources';
import { getGalleryCount } from '../scripts/helpers/api/gallery';
import { getDownloadsCount, getVisitsCount } from '../scripts/helpers/api/global';

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
  const [statsLoading, setStatsLoading] = useState<boolean>(true);


  useEffect(() => {
    // async function in useEffect
    async function fetchStats() {
      const ressourcesCount = await getRessourcesCount();
      const imagesCount = await getGalleryCount();
      const downloadsCount = await getDownloadsCount()
      const visitsCount = await getVisitsCount();
      setRessourcesCount(ressourcesCount);
      setImagesCount(imagesCount);
      setDownloadsCount(downloadsCount);
      setVisitsCount(visitsCount);
      setStatsLoading(false);
    }

    fetchStats().catch((err) => {
      console.log(err);
    })
  }, []);


  const value = {
    statsLoading,
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