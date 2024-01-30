import React, { useContext, useState, useEffect, ReactNode, createContext } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { City } from '../scripts/types/City';
import { convertCityName } from '../scripts/helpers/api/planner/convertCityName';
import { getWeather } from '../scripts/helpers/api/planner/getWeather';
import { getMoonPhase } from '../scripts/helpers/api/planner/getMoonPhase';
import { POSTObserver } from '../scripts/types/Observer';

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

      if (cityCoords.length <= 0) {
        console.log('City not found...');
        return;
      }

      const weatherData = await getWeather(cityCoords[0].lat, cityCoords[0].lon);


      if (weatherData.length <= 0) {
        console.log('Weather not found...');
        return;
      }

      setCity({
        flag: cityCoords[0].country,
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
      setWeather(weatherData);

      try {
        const observer: POSTObserver = {
          latitude: cityCoords[0].lat,
          longitude: cityCoords[0].lon,
          fromDate: date,
          toDate: dayjs(date).add(1, 'day').format('YYYY-MM-DD'),
          elevation: 50,
          time: weatherData.daily[0].sunset,
        }
        console.log("Getting moon data...");

        const moonData = await getMoonPhase(observer);
        console.log(moonData);

      } catch (error) {
        console.log("Error fetching moon data");

      }
    } catch (error) {
      console.log("Error fetching weather and coordinates data");
    }

  }

  const value = {
    appLoading,
    planNight,
    weather,
    city
  }

  return (
    <PlannerAppContext.Provider value={value}>
      {children}
    </PlannerAppContext.Provider>
  )
}