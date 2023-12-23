import React, { useContext, useState, useEffect, ReactNode, createContext } from 'react';
import { getRessourcesCount } from '../scripts/helpers/api/ressources/getRessourcesCount';
import { getGalleryCount } from '../scripts/helpers/api/gallery/getGalleryCount';
import { getDownloadsCount } from '../scripts/helpers/api/downloads/getDownloadsCount';
import { getVisitsCount } from '../scripts/helpers/api/visits/getVisitsCount';
import { getCategoriesCount } from '../scripts/helpers/api/categories/getCategoriesCount';

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
  const [categoriesCount, setCategoriesCount] = useState<number>(0);
  const [statsLoading, setStatsLoading] = useState<boolean>(true);


  useEffect(() => {
    // async function in useEffect
    async function fetchStats() {
      const ressourcesCount = await getRessourcesCount();
      const imagesCount = await getGalleryCount();
      const downloadsCount = await getDownloadsCount()
      const visitsCount = await getVisitsCount();
      const categoriesCount = await getCategoriesCount();
      setRessourcesCount(ressourcesCount);
      setImagesCount(imagesCount);
      setDownloadsCount(downloadsCount);
      setVisitsCount(visitsCount);
      setCategoriesCount(categoriesCount);
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
    categoriesCount,
  }

  return (
    <StatsContext.Provider value={value}>
      {children}
    </StatsContext.Provider>
  )
}