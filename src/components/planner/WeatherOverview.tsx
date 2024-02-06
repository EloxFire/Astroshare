import React from 'react'
import getUnicodeFlagIcon from 'country-flag-icons/unicode'
import '../../styles/components/planner/weatherOverview.scss'
import WeatherValue from './WeatherValue'

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
      <p className="title">En direct - {date}</p>
      <div className="wo-container">
        <div className="wo-container__left">
          {icon !== "--" ? <img className="icon" src={`/images/planner/weather/${icon}.svg`} alt="Weather condition icon" /> : icon}
        </div>
        <div className="wo-container__right">
          <p className="wo-container__right__title">{city}</p>
          <p className="wo-container__right__subtitle">{getUnicodeFlagIcon(country)}, {state}</p>
          <div className="wo-container__right__infos">
            <div>
              <WeatherValue size='large' title='Température' value={`${temp}°C`} />
              <p className="wo-container__right__infos__description">{description}</p>
            </div>
            <div>
              <p className="wo-container__right__infos__precipitations">Précipitations: {precipitations}%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
