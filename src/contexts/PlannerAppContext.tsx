import React, { useContext, useState, useEffect, ReactNode, createContext } from 'react';
import { geocodingApi, weatherApi } from '../scripts/helpers/api/planner';
import { City } from '../scripts/types/City';
import dayjs, { Dayjs } from 'dayjs';
import { convertCityName } from '../scripts/helpers/api/planner/convertCityName';
import { getWeather } from '../scripts/helpers/api/planner/getWeather';

const PlannerAppContext = createContext<any>({});

export function usePlanner() {
  return useContext(PlannerAppContext);
}

interface PlannerAppProviderProps {
  children: ReactNode
}

export function PlannerAppProvider({ children }: PlannerAppProviderProps) {

  const [appLoading, setAppLoading] = useState<boolean>(true);
  const [city, setCity] = useState<City | null>(null);
  const [date, setDate] = useState<Dayjs | null>(null);
  const [weather, setWeather] = useState<any>(null);

  useEffect(() => {
    setTimeout(() => {
      setAppLoading(false);
    }, 2000);
  }, [])

  const planNight = async (cityName: string, date: string) => {
    if (!cityName || !date || cityName === "" || date === "") return console.log('Missing parameters');

    try {
      const cityCoords = await convertCityName(cityName);

      if (cityCoords) {
        setCity({
          name: cityCoords[0].name,
          lat: cityCoords[0].lat,
          lng: cityCoords[0].lon,
          country: cityCoords[0].country,
          local_names: {
            en: cityCoords[0].local_names.en,
          },
          state: cityCoords[0].state,
        })
        setDate(dayjs(date));

        try {
          if (city) {
            console.log(city);

            const weather = await getWeather(city.lat, city.lng);
            if (weather) {
              setWeather(weather);
            }
          }
        } catch (error) {
          console.log(error);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  const value = {
    appLoading,
    planNight
  }

  return (
    <PlannerAppContext.Provider value={value}>
      {children}
    </PlannerAppContext.Provider>
  )
}