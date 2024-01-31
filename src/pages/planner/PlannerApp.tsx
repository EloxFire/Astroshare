import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../../routes'
import { FiChevronLeft } from 'react-icons/fi'
import { usePlanner } from '../../contexts/PlannerAppContext'
import dayjs from 'dayjs'
import WeatherOverview from '../../components/planner/WeatherOverview'
import HourlyForecast from '../../components/planner/HourlyForecast'
import MoonOverview from '../../components/planner/MoonOverview'
import NextStep from '../../components/planner/NextStep'
import SunOverview from '../../components/planner/SunOverview'
import DailyForecast from '../../components/planner/DailyForecast'
import '../../styles/pages/planner/app.scss'
import { calculateDayPercentage } from '../../scripts/helpers/data/calculateDayPercentage'

export default function PlannerApp() {

  const { appLoading, planNight, weather, city, moon } = usePlanner()
  const [cityName, setCityName] = useState<string>('')
  const [nightDate, setNightDate] = useState<string>(dayjs().format('YYYY-MM-DD'))

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
              <div className="left">
                <p className="h3 title" style={{ marginRight: '20px' }}>Ville</p>
                <input className="datetime_input" type="text" value={cityName} onChange={(e) => setCityName(e.target.value)} placeholder='Ex : Vauvenargues' />
                {/* <p className="h3 title" style={{ marginRight: '20px' }}>Date</p>
                <input className="datetime_input" type="date" value={nightDate} onChange={(e) => setNightDate(dayjs(e.target.value).format('YYYY-MM-DD'))} /> */}
                <button className="custom-button small" type='button' onClick={() => planNight(cityName, nightDate)}>Valider</button>
              </div>
              <div className="right">
                <p className="h2 title">Étape 1</p>
              </div>
            </div>
            <div className="body">
              <div className="left">
                <WeatherOverview
                  city={city ? city.name : "--"}
                  country={city ? city.country : "--"}
                  state={city ? city.state : "--"}
                  icon={weather ? weather.current.weather[0].icon : "--"}
                  date={weather ? dayjs.unix(weather.current.dt).format("DD MMMM YYYY HH:mm") : "--"}
                  description={weather ? weather.current.weather[0].description : "--"}
                  hightTemp={weather ? Math.floor(weather.daily[0].temp.max) : "--"}
                  lowTemp={weather ? Math.floor(weather.daily[0].temp.min) : "--"}
                  temp={weather ? Math.floor(weather.current.temp) : "--"}
                  precipitations={weather ? weather.daily[0].pop * 100 : "--"}
                />
                <HourlyForecast hours={weather ? weather.hourly : []} />
              </div>
              <div className="middle">
                <MoonOverview
                  icon={moon ? moon.moon.emoji : '--'}
                  moonrise={moon ? moon.moon.moonrise ? moon.moon.moonrise : "∅" : "--"}
                  moonset={moon ? moon.moon.moonset ? moon.moon.moonset : "∅" : "--"}
                  phase_name={moon ? moon.moon.phase_name : "--"}
                />
              </div>
              <div className="right">
                <SunOverview
                  sunrise={weather ? dayjs.unix(weather.current.sunrise).format("HH:mm") : "--"}
                  sunset={weather ? dayjs.unix(weather.current.sunset).format("HH:mm") : "--"}
                  currentTime={weather ? dayjs.unix(weather.current.dt).format("HH:mm") : "--"}
                  // Day percentage : sunrise = 0% / sunset = 100% / currentTime = ?
                  dayPercentage={
                    weather ?
                      Math.floor(calculateDayPercentage(dayjs.unix(weather.current.sunrise), dayjs.unix(weather.current.sunset)))
                      :
                      "--"
                  }
                />
                <DailyForecast days={weather ? weather.daily : []} />
                <NextStep />
              </div>
            </div>
          </div>
      }
    </div>
  )
}
