import React from 'react'
import getUnicodeFlagIcon from 'country-flag-icons/unicode'
import '../../styles/components/planner/weatherOverview.scss'

interface WeatherOverviewProps {
  city: string
  country: string
  state: string
  icon: string
  temp: number | string
  hightTemp: number | string
  lowTemp: number | string
  description: string
  date: string
  precipitations: number | string
}

export default function WeatherOverview({ city, country, state, icon, temp, hightTemp, lowTemp, description, date, precipitations }: WeatherOverviewProps) {
  return (
    <div className="weather-overview">
      <p className="title">En direct</p>
      <div className="column"></div>
      <div className="column"></div>
    </div>
  )
}

// <img className="icon" src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="Weather condition icon" />