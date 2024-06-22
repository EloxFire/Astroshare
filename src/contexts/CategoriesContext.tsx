import React, { useContext, useState, useEffect, ReactNode, createContext } from 'react';
import { getCategories } from '../scripts/helpers/api/categories/getCategories';
import { RessourceCategory } from '../scripts/types';
import { getVisibleCategories } from '../scripts/helpers/api/categories/getVisibleCategories';
import { getHiddenCategories } from '../pages/dashboard/categories/getHiddenCategories';

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
  const [visibleCategories, setVisibleCategories] = useState<RessourceCategory[]>([]);
  const [hiddenCategories, setHiddenCategories] = useState<RessourceCategory[]>([]);


  useEffect(() => {
    async function fetchStats() {
      const data = await getCategories();
      const visibleData = await getVisibleCategories()
      const hiddenData = await getHiddenCategories()

      data.docs.forEach((doc: any) => {
        setCategories((categories: any) => [...categories, doc.data()]);
      })

      visibleData.docs.forEach((doc: any) => {
        setVisibleCategories((categories: any) => [...categories, doc.data()]);
      })

      hiddenData.docs.forEach((doc: any) => {
        setHiddenCategories((categories: any) => [...categories, doc.data()]);
      })

      setCategoriesLoading(false);
    }

    fetchStats().catch((err) => {
      console.log(err);
    })
  }, []);

  const updateCategories = async () => {
    const data = await getCategories();
    const visibleData = await getVisibleCategories()
    const hiddenData = await getHiddenCategories()

    setCategoriesLoading(true);
    let tempCategories: RessourceCategory[] = [];
    let tempVisibleCategories: RessourceCategory[] = [];
    let tempHiddenCategories: RessourceCategory[] = [];
    data.docs.forEach((doc: any) => {
      tempCategories.push(doc.data());
    })
    visibleData.docs.forEach((doc: any) => {
      tempVisibleCategories.push(doc.data());
    })
    hiddenData.docs.forEach((doc: any) => {
      tempHiddenCategories.push(doc.data());
    })
    setCategories(tempCategories);
    setVisibleCategories(tempVisibleCategories);
    setHiddenCategories(tempHiddenCategories);
    setCategoriesLoading(false);
  }


  const value = {
    categoriesLoading,
    categories,
    updateCategories,
    visibleCategories,
    hiddenCategories,
  }

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  )
}