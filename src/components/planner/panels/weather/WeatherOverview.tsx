import React from 'react'
import { capitalize } from '../../../../scripts/helpers/utils/capitalize'
import getUnicodeFlagIcon from 'country-flag-icons/unicode'
import WeatherValue from '../../WeatherValue'
import '../../../../styles/components/planner/panels/weather/weatherOverview.scss'

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
  wind: number | string
  wind_dir: number
  humidity: number | string
  pressure: number | string
}

export default function WeatherOverview({ city, country, state, icon, temp, hightTemp, lowTemp, description, date, precipitations, wind, wind_dir, humidity, pressure }: WeatherOverviewProps) {
  return (
    <div className="weather-overview">
      <p className="title">En direct - {date}</p>
      <div className="content">
        <div className="wo-container">
          <div className="wo-container__left">
            {icon !== "--" ? <img className="icon" src={`/images/planner/weather/${icon}.png`} alt="Weather condition icon" /> : icon}
          </div>
          <div className="wo-container__right">
            <p className="wo-container__right__title">{city}</p>
            <p className="wo-container__right__subtitle">{getUnicodeFlagIcon(country)}, {state}</p>
            <div className="wo-container__right__infos">
              <div className="wo-container__right__infos__row">
                <WeatherValue size='large' title='Température' value={`${temp}°C`} />
                <WeatherValue size='large' title='Précipitations' value={`${precipitations}%`} />
              </div>
              <div className="wo-container__right__infos__row" style={{ marginTop: '10px' }}>
                <WeatherValue size='large' title='Conditions' value={capitalize(description)} />
              </div>
            </div>
          </div>
        </div>
        <div className="wo-additionnal">
          <WeatherValue size='small' title='Minimale' value={`${lowTemp}°C`} />
          <WeatherValue size='small' title='Maximale' value={`${hightTemp}°C`} />
          <WeatherValue size='small' title='Vent' value={`${wind}Km/h`} />
          <WeatherValue size='small' title='Direction' value={wind_dir} compass />
          <WeatherValue size='small' title='Humidité' value={`${humidity}%`} />
          <WeatherValue size='small' title='Humidité' value={`${pressure}hPa`} />
        </div>
      </div>
    </div>
  )
}
