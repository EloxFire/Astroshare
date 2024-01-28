import React, { useContext, useState, useEffect, ReactNode, createContext } from 'react';
import { geocodingApi, weatherApi } from '../scripts/helpers/api/weather';

const PlannerAppContext = createContext<any>({});

export function usePlanner() {
  return useContext(PlannerAppContext);
}

interface PlannerAppProviderProps {
  children: ReactNode
}

export function PlannerAppProvider({ children }: PlannerAppProviderProps) {

  const [appLoading, setAppLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setAppLoading(false);
    }, 2000);
  }, [])

  const getWeather = async () => {
    try {
      const response = await weatherApi.get('/current')
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const convertCityName = async (cityName: string) => {
    try {
      const response = await geocodingApi.get(``, { params: { q: cityName, appid: process.env.REACT_APP_WEATHER_API_KEY } })
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const value = {
    appLoading,
    getWeather,
    convertCityName
  }

  return (
    <PlannerAppContext.Provider value={value}>
      {children}
    </PlannerAppContext.Provider>
  )
}