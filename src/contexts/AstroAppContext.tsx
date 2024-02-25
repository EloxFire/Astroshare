import React, { useContext, ReactNode, createContext, useState, useEffect } from 'react';
import { AstroProperty } from '../scripts/enums/AstroProperty';
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

  const [currentProperty, setCurrentProperty] = useState<AstroProperty>('magnitude' as AstroProperty);
  const [currentObject, setCurrentObject] = useState<DeepSkyObject | null>(null);
  const [deepSkyObjects, setDeepSkyObjects] = useState<DeepSkyObject[]>([]);
  const [selectedObject, setSelectedObject] = useState<DeepSkyObject | null>(null);

  useEffect(() => {
    
    // Fetch deep sky objects
    const fetchDeepSkyObjects = async () => {
      console.log('AstroAppProvider');
      try {
        const response = await axios.get('http://api.astroshare.fr/messier');
        console.log(response.data);
        
        setDeepSkyObjects(response.data.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchDeepSkyObjects();
  }, [])

  const changeCurrentProperty = () => {
    const properties = Object.values(AstroProperty);
    const currentIndex = properties.indexOf(currentProperty);
    if (currentIndex === properties.length - 1) {
      setCurrentProperty(properties[0]);
    } else {
      setCurrentProperty(properties[currentIndex + 1]);
    }
  }

  const changeSelectedObject = (object: DeepSkyObject) => {
    if (selectedObject === object) {
      setSelectedObject(null);
      return;
    }
    setSelectedObject(object);
  }

  const value = {
    currentProperty,
    changeCurrentProperty,
    currentObject,
    deepSkyObjects,
    selectedObject,
    changeSelectedObject,
  }

  return (
    <AstroAppContext.Provider value={value}>
      {children}
    </AstroAppContext.Provider>
  )
}