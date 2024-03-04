import React, { useContext, ReactNode, createContext, useState, useEffect } from 'react';
import { AstroProperty } from '../scripts/enums/AstroProperty';
import { DeepSkyObject } from '../scripts/types/DeepSkyObject';
import axios from 'axios';
import { ZenithObject } from '../scripts/types/ZenithObject';
import { useWeather } from './WeatherAppContext';
import dayjs from 'dayjs';
import { getObjectTypeFromEnum } from '../scripts/helpers/utils/getObjectTypeFromEnum';

const AstroAppContext = createContext<any>({});

export function useAstro() {
  return useContext(AstroAppContext);
}

interface AstroAppProviderProps {
  children: ReactNode
}

export function AstroAppProvider({ children }: AstroAppProviderProps) {

  const {city} = useWeather()

  const [currentProperty, setCurrentProperty] = useState<AstroProperty>('magnitude' as AstroProperty);
  const [currentObject, setCurrentObject] = useState<DeepSkyObject | null>(null);
  const [deepSkyObjects, setDeepSkyObjects] = useState<DeepSkyObject[]>([]);
  const [selectedObject, setSelectedObject] = useState<DeepSkyObject | null>(null);
  const [currentCatalog, setCurrentCatalog] = useState<'messier' | 'ngc' | 'ic' | 'all'>('messier');
  const [currentList, setCurrentList] = useState<DeepSkyObject[]>([]);
  const [currentZenith, setCurrentZenith] = useState<ZenithObject>({ra: "0h 0m 0s", dec: "0h 0m 0s"});

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
        console.log('Deep sky objects fetched :', temp.length, 'objects');
        
      } catch (error) {
        console.error(error);
      }
    }
    fetchDeepSkyObjects();
  }, [])

  useEffect(() => {
    if(!city) return;
    // const zenith = calculateZenith(city.lat, city.lng, dayjs().format('YYYY-MM-DD'), dayjs().format('HH:mm:ss'));
    // console.log("Calculated zenith", zenith);
    
    // setCurrentZenith(zenith);
  }, [city])

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
    if (catalog === 'ngc') setCurrentList(deepSkyObjects.filter(object => (object.ngc !== "" || object.name.includes('NGC'))));
    if (catalog === 'ic') setCurrentList(deepSkyObjects.filter(object => (object.ic !== "" || object.name.includes('IC'))));
  }

  const searchObject = (search: string) => {
    console.log('Searching for :', search);
    
    if(search === '') {
      setCurrentList(deepSkyObjects);
      setCurrentCatalog('all');
      return;
    } else {
      const filter = search.toLowerCase()
      console.log('Filter :', filter);
      
      const filteredList = deepSkyObjects.filter((object: DeepSkyObject) => 
        object.name.toLowerCase().includes(filter) ||
        object.const.toLowerCase().includes(filter) ||
        object.common_names.toLowerCase().split(',').includes(filter)
      );


      setCurrentList(filteredList);
      setCurrentCatalog('all');
    }
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
    currentZenith,
    searchObject,
  }

  return (
    <AstroAppContext.Provider value={value}>
      {children}
    </AstroAppContext.Provider>
  )
}