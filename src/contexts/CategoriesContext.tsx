import React, { useContext, useState, useEffect, ReactNode, createContext } from 'react';
import { getCategories } from '../scripts/helpers/api/categories/getCategories';
import { RessourceCategory } from '../scripts/types';

const CategoriesContext = createContext<any>({});

export function useCategories() {
  return useContext(CategoriesContext);
}

interface CategoriesProviderProps {
  children: ReactNode
}

export function CategoriesProvider({ children }: CategoriesProviderProps) {

  const [categories, setCategories] = useState<RessourceCategory[]>([]);
  const [categoriesLoading, setCategoriesLoading] = useState<boolean>(true);


  useEffect(() => {
    async function fetchStats() {
      const data = await getCategories();

      data.docs.forEach((doc: any) => {
        setCategories((categories: any) => [...categories, doc.data()]);
      })
      setCategoriesLoading(false);
    }

    fetchStats().catch((err) => {
      console.log(err);
    })
  }, []);


  const value = {
    categoriesLoading,
    categories,
  }

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  )
}