import React, { useContext, useState, useEffect, ReactNode, createContext } from 'react';
import { getRessourcesCount } from '../scripts/helpers/api/ressources/getRessourcesCount';
import { getGalleryCount } from '../scripts/helpers/api/gallery/getGalleryCount';
import { getDownloadsCount } from '../scripts/helpers/api/downloads/getDownloadsCount';
import { getVisitsCount } from '../scripts/helpers/api/visits/getVisitsCount';
import { getCategoriesCount } from '../scripts/helpers/api/categories/getCategoriesCount';
import { getUsersCount } from '../scripts/helpers/api/users/getUsersCount';
import { getMostDownloadedRessources } from '../scripts/helpers/api/ressources/getMostDownloadedRessources';
import { Ressource } from '../scripts/types/Ressource';

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
  const [usersCount, setUsersCount] = useState<number>(0);
  const [topRessources, setTopRessources] = useState<Ressource[]>([]);

  const [statsLoading, setStatsLoading] = useState<boolean>(true);


  useEffect(() => {
    // async function in useEffect
    async function fetchStats() {
      const ressourcesCount = await getRessourcesCount();
      const imagesCount = await getGalleryCount();
      const downloadsCount = await getDownloadsCount()
      const visitsCount = await getVisitsCount();
      const categoriesCount = await getCategoriesCount();
      const usersCount = await getUsersCount()
      const mostDownloadedRessources = await getMostDownloadedRessources();
      setRessourcesCount(ressourcesCount);
      setImagesCount(imagesCount);
      setDownloadsCount(downloadsCount);
      setVisitsCount(visitsCount);
      setCategoriesCount(categoriesCount);
      setUsersCount(usersCount);
      setTopRessources(mostDownloadedRessources);

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
    usersCount,
    topRessources,
  }

  return (
    <StatsContext.Provider value={value}>
      {children}
    </StatsContext.Provider>
  )
}