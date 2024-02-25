import React, { useContext, useState, useEffect, ReactNode, createContext } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { City } from '../scripts/types/City';
import { convertCityName } from '../scripts/helpers/api/planner/convertCityName';
import { getWeather } from '../scripts/helpers/api/planner/getWeather';
import { getMoonInfos } from '../scripts/helpers/api/planner/getMoonInfos';
import { getAirQuality } from '../scripts/helpers/api/planner/getAirQuality';

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
  const [moon, setMoon] = useState<any>(null);
  const [airQuality, setAirQuality] = useState<any>(null);
  const [currentStep, setCurrentStep] = useState<number>(1);

  useEffect(() => {
    setTimeout(() => {
      setAppLoading(false);
    }, 2000);
  }, [])

  // Setp 1 : WeatherStep on PlannerApp
  const fetchConditions = async (cityName: string, date: string) => {
    // Check if cityName and date are not empty
    if (!cityName || !date || cityName === "" || date === "") return new Error('Missing parameters');

    // Fetch city coordinates with geocoding API
    try {
      const cityCoords = await convertCityName(cityName);
      if (cityCoords.length <= 0) return new Error('City not found...');
      
      // Fetch weather data with OpenWeather API
      const weatherData = await getWeather(cityCoords[0].lat, cityCoords[0].lon);
      if (weatherData.length <= 0) return new Error('Weather not found for this city...');

      // Fetch moon data with Moon API
      const moonData = await getMoonInfos(cityCoords[0].lat, cityCoords[0].lon);
      if (moonData.length <= 0) return new Error('Moon data not found for this city...');

      // Fetch air quality data with Air Quality API
      const airQualityData = await getAirQuality(cityCoords[0].lat, cityCoords[0].lon);
      if (airQualityData.length <= 0) return new Error('Air quality data not found for this city...');

      // Set city, date, weather, moon and air quality data
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
      setMoon(moonData);
      setAirQuality(airQualityData);
    } catch (error) {
      console.log("Error while fetching city, weather or moon data :", error);
      return new Error('Error while fetching city, weather or moon data :');
    }
  }

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  }

  const previousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  }

  const value = {
    appLoading,
    fetchConditions,
    date,
    weather,
    city,
    moon,
    airQuality,
    currentStep,
    nextStep,
    previousStep,
  }

  return (
    <PlannerAppContext.Provider value={value}>
      {children}
    </PlannerAppContext.Provider>
  )
}