import React, { useContext, ReactNode, createContext, useState } from 'react';
import { DeepSkyObject } from '../scripts/types/DeepSkyObject';
import axios from 'axios';

const AstroAppContext = createContext<any>({});

export function useAstro() {
  return useContext(AstroAppContext);
}

interface AstroAppProviderProps {
  children: ReactNode
}

export function AstroAppProvider({ children }: AstroAppProviderProps) {

  const [objectsList, setObjectsList] = useState<DeepSkyObject[]>([]);

  const searchObjects = async (value: string) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_ASTROSHARE_API_URL}/search?search=${value}`);
      if(response.data.data) setObjectsList(response.data.data);
    } catch (error) {
      console.log("Une erreur est survenue lors de la recherche d'objets : ", error);
    }
  }

  const value = {
    objectsList,
    searchObjects,
  }

  return (
    <AstroAppContext.Provider value={value}>
      {children}
    </AstroAppContext.Provider>
  )
}