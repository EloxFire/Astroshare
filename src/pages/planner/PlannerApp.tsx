import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../../routes'
import { FiChevronLeft } from 'react-icons/fi'
import '../../styles/pages/planner/app.scss'
import { usePlanner } from '../../contexts/PlannerAppContext'
import DateTimeRangePicker from '@wojtekmaj/react-datetimerange-picker'

export default function PlannerApp() {

  const { appLoading, getWeather, convertCityName } = usePlanner()
  const [cityName, setCityName] = useState<string>('')

  return (
    <div className="planner-app">
      <h1 className="h3 title"><Link to={routes.planner.path} ><FiChevronLeft style={{ verticalAlign: 'middle' }} /></Link>Planificateur de soirées</h1>
      {
        appLoading ?
          <div className="app-loading">
            <div className="loader"></div>
            <p>Chargement de l'application...</p>
          </div>
          :
          <div className="app">
            <div className="header">
              <div className="section">
                <p className="h3 title" style={{ marginRight: '20px' }}>Ville</p>
                <form onSubmit={(e) => { e.preventDefault(); convertCityName(cityName) }}>
                  <input className="datetime_input" type="text" onChange={(e) => setCityName(e.target.value)} />
                </form>
              </div>
              <div className="section">
                <p className="h3 title" style={{ marginRight: '20px' }}>Date</p>
                <form onSubmit={(e) => { e.preventDefault(); convertCityName(cityName) }}>
                  <input className="datetime_input" type="date" onChange={(e) => setCityName(e.target.value)} />
                </form>
              </div>
            </div>
            <div className="body">
              <div className="section">
                <p className="title">Météo</p>
                <button onClick={() => getWeather()}>Get WEATHER</button>
              </div>
              <div className="section">
                <p className="title">Observations</p>
              </div>
              <div className="section">
                <p className="title">Ajustements</p>
              </div>
            </div>
          </div>
      }
    </div>
  )
}
