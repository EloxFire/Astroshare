import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../../routes'
import { FiChevronLeft } from 'react-icons/fi'
import { useWeather } from '../../contexts/WeatherAppContext'
import dayjs from 'dayjs'
import WeatherStep from '../../components/planner/steps/WeatherStep'
import '../../styles/pages/planner/app.scss'
import AstronomyStep from '../../components/planner/steps/AstronomyStep'

export default function PlannerApp() {

  const { appLoading, fetchConditions, currentStep, previousStep } = useWeather()
  const [cityName, setCityName] = useState<string>('')
  // const [nightDate, setNightDate] = useState<string>(dayjs().format('YYYY-MM-DD'))

  return (
    <div className="planner-app">
      <h1 className="h3 title"><Link to={routes.planner.path} ><FiChevronLeft style={{ verticalAlign: 'middle' }} /></Link>{routes.planner.label}</h1>
      {
        appLoading ?
          <div className="app-loading">
            <div className="loader"></div>
            <p>Chargement de l'application...</p>
          </div>
          :
          <div className="app">
            <div className="header">
              {
                currentStep === 1 &&
                <div className="left">
                  <p className="h3 title" style={{ marginRight: '20px' }}>Ville</p>
                  <input className="datetime_input" type="text" value={cityName} onChange={(e) => setCityName(e.target.value)} placeholder='Ex : Aix en provence' />
                  {/* <p className="h3 title" style={{ marginRight: '20px' }}>Date</p>
                  <input className="datetime_input" type="date" value={nightDate} onChange={(e) => setNightDate(dayjs(e.target.value).format('YYYY-MM-DD'))} /> */}
                  <button className="custom-button small" type='button' onClick={() => fetchConditions(cityName, dayjs())}>Valider</button>
                </div>
              }
              {
                currentStep !== 1 &&
                <div className="left">
                  <button className="custom-button small" type='button' onClick={() => previousStep()}>Étape précédante</button>
                </div>
              }
              <div className="right">
                <p className="h2 title">Étape {currentStep}</p>
              </div>
            </div>
            {/* {currentStep === 1 && <WeatherStep />}
            {currentStep === 2 && <AstronomyStep />} */}
            <AstronomyStep />
          </div>
      }
    </div>
  )
}
