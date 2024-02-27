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
  const [currentCatalog, setCurrentCatalog] = useState<'messier' | 'ngc' | 'ic' | 'all'>('messier');
  const [currentList, setCurrentList] = useState<DeepSkyObject[]>([]);

  useEffect(() => {
    // Fetch deep sky objects
    const fetchDeepSkyObjects = async () => {
      try {
        const messierCatalog = await axios.get('http://api.astroshare.fr/messier');
        const ngcCatalog = await axios.get('http://api.astroshare.fr/ngc');
        const icCatalog = await axios.get('http://api.astroshare.fr/ic');
       
        const temp = [];
        temp.push(...messierCatalog.data.data);
        temp.push(...ngcCatalog.data.data);
        temp.push(...icCatalog.data.data);
        
        setDeepSkyObjects(temp);
        setCurrentList(temp)
        setCurrentCatalog('all');
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

  const updateObjectsCatalog = (catalog: 'messier' | 'ngc' | 'ic' | 'all') => {
    console.log('Updating catalog to :', catalog);
    
    setCurrentCatalog(catalog);
    if (catalog === 'all') setCurrentList(deepSkyObjects);
    if (catalog === 'messier') setCurrentList(deepSkyObjects.filter(object => object.m !== ""));
    if (catalog === 'ngc') setCurrentList(deepSkyObjects.filter(object => (object.ngc !== "" || object.name.includes('NGC')) && !object.name.includes('IC')));
    if (catalog === 'ic') setCurrentList(deepSkyObjects.filter(object => (object.ic !== "" || object.name.includes('IC')) && !object.name.includes('NGC')));
  }

  const value = {
    currentProperty,
    changeCurrentProperty,
    currentObject,
    currentList,
    selectedObject,
    changeSelectedObject,
    updateObjectsCatalog,
    currentCatalog,
  }

  return (
    <AstroAppContext.Provider value={value}>
      {children}
    </AstroAppContext.Provider>
  )
}