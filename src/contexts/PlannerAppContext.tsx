import React, { useContext, useState, useEffect, ReactNode, createContext } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { City } from '../scripts/types/City';
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
      console.log("Converting city name to coordinates...");

      const cityCoords = await convertCityName(cityName);
      console.log(cityCoords);

      if (cityCoords.length > 0) {
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
          if (cityCoords.length <= 0) return console.log('City not found...');
          console.log(cityCoords);

          console.log("Getting weather...");

          const weather = await getWeather(cityCoords[0].lat, cityCoords[0].lon);
          setWeather(weather);
          console.log("Weather retrieved !");
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
    planNight,
    weather
  }

  return (
    <PlannerAppContext.Provider value={value}>
      {children}
    </PlannerAppContext.Provider>
  )
}