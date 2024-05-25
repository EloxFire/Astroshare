import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../../routes'
import { FiChevronLeft } from 'react-icons/fi'
import dayjs from 'dayjs'
import WeatherStep from '../../components/planner/steps/WeatherStep'
import '../../styles/pages/app/app.scss'
import { useWeather } from '../../contexts/WeatherAppContext'

export default function WeatherApp() {

  const { appLoading, planNight } = useWeather()
  const [cityName, setCityName] = useState<string>('')

  return (
    <div className="weather-app">
      <h1 className="h3 title"><Link to={routes.home.path} ><FiChevronLeft style={{ verticalAlign: 'middle' }} /></Link>Météo Astroshare</h1>
      {
        appLoading ?
          <div className="app-loading">
            <div className="loader"></div>
            <p>Chargement de l'application...</p>
          </div>
          :
          <div className="app">
            <div className="header">
              <div className="left">
                <p className="h3 title" style={{ marginRight: '20px' }}>Ville</p>
                <input className="datetime_input" type="text" value={cityName} onChange={(e) => setCityName(e.target.value)} placeholder='Ex : Aix en provence' />
                <button className="custom-button small" type='button' onClick={() => planNight(cityName, dayjs())}>Valider</button>
              </div>
            </div>
            <WeatherStep />
          </div>
      }
    </div>
  )
}
