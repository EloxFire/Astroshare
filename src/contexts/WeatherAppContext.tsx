import React, { useContext, useState, useEffect, ReactNode, createContext } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { City } from '../scripts/types/City';
import { convertCityName } from '../scripts/helpers/api/planner/convertCityName';
import { getWeather } from '../scripts/helpers/api/planner/getWeather';
import { getMoonInfos } from '../scripts/helpers/api/planner/getMoonInfos';
import { getAirQuality } from '../scripts/helpers/api/planner/getAirQuality';

const WeatherAppContext = createContext<any>({});

export function useWeather() {
  return useContext(WeatherAppContext);
}

interface WeatherAppProviderProps {
  children: ReactNode
}

export function WeatherAppProvider({ children }: WeatherAppProviderProps) {

  const [appLoading, setAppLoading] = useState<boolean>(true);
  const [city, setCity] = useState<City | null>(null);
  const [date, setDate] = useState<Dayjs | null>(null);
  const [weather, setWeather] = useState<any>(null);
  const [moon, setMoon] = useState<any>(null);
  const [airQuality, setAirQuality] = useState<any>(null);

  useEffect(() => {
    setTimeout(() => {
      setAppLoading(false);
    }, 2000);
  }, [])

  const planNight = async (cityName: string, date: string) => {
    if (!cityName || !date || cityName === "" || date === "") return console.log('Missing parameters');

    try {
      const cityCoords = await convertCityName(cityName);
      console.log(cityCoords);


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
        console.log("Getting moon data...");
        const moonData = await getMoonInfos(cityCoords[0].lat, cityCoords[0].lon);
        console.log(moonData);
        setMoon(moonData)
      } catch (error) {
        console.log("Error fetching moon data");
      }

      try {
        console.log("Getting air quality data...");
        const airQualityData = await getAirQuality(cityCoords[0].lat, cityCoords[0].lon);
        setAirQuality(airQualityData);
      } catch (error) {

      }
    } catch (error) {
      console.log("Error fetching weather and coordinates data");
    }

  }

  const value = {
    appLoading,
    planNight,
    weather,
    city,
    moon,
    airQuality,
  }

  return (
    <WeatherAppContext.Provider value={value}>
      {children}
    </WeatherAppContext.Provider>
  )
}