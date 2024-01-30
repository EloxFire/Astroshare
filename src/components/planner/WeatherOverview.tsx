import React from 'react'
import getUnicodeFlagIcon from 'country-flag-icons/unicode'
import '../../styles/components/planner/weatherOverview.scss'

interface WeatherOverviewProps {
  city: string
  country: string
  state: string
  icon: string
  temp: number | string
  hightTemp: number
  lowTemp: number
  description: string
  date: string
  precipitations: number | string
}

export default function WeatherOverview({ city, country, state, icon, temp, hightTemp, lowTemp, description, date, precipitations }: WeatherOverviewProps) {
  return (
    <div className="weather-overview">
      <div className="infos">
        <p className="title">{city}</p>
        <small>{getUnicodeFlagIcon(country)}, {state}</small>
        <div className="row end" style={{ marginTop: '20px', marginBottom: '20px' }}>
          <p className="current-temp">{temp}°C</p>
          <div className="precipitations">
            <p className="value">{precipitations}%</p>
            <p className="text">précipitations</p>
          </div>
        </div>
        <div className="row">
          <p className="text">&#8613; : {hightTemp}°C</p>
          <p className="text">&#8615; : {lowTemp}°C</p>
        </div>
        <p className="text">{date}</p>
      </div>
      <div className="conditions">
        <img className="icon" src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="Weather condition icon" />
        <p className="text">{description}</p>
      </div>
    </div>
  )
}
