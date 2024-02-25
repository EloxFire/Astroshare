import React from 'react'
import { usePlanner } from '../../../../contexts/PlannerAppContext'
import { calculateDayPercentage } from '../../../../scripts/helpers/data/calculateDayPercentage'
import dayjs from 'dayjs'
import CityInfosItem from './CityInfosItem'
import SunOverview from '../weather/SunOverview'
import MoonOverview from '../weather/MoonOverview'
import '../../../../styles/components/planner/panels/astronomy/mainInfos.scss'

export default function MainInfos() {

  const { date, city, weather, moon } = usePlanner()
  
  return (
    <div className="mainInfosAstro">
      <p className="title">Soirée du {dayjs(date).format('DD-MM-YYYY')}</p>
      <div className="content">
        <CityInfosItem city={city} />
        <SunOverview
          mode='night'
          format='compact'
          sunset={weather ? dayjs.unix(weather.current.sunset).format("HH:mm") : "--"}
          currentTime={weather ? dayjs.unix(weather.current.dt).format("HH:mm") : "--"}
          nightPercentage={
            weather ?
              Math.floor(calculateDayPercentage(dayjs.unix(weather.current.sunset), dayjs.unix(weather.daily[1].sunrise)))
              :
              "--"
          }
          nextSunrise={weather ? dayjs.unix(weather.daily[1].sunrise).format("HH:mm") : "--"}
        />
        <MoonOverview
          mode='compact'
          moonrise={moon ? moon.moon.moonrise_timestamp ? dayjs.unix(moon.moon.moonrise_timestamp).format('HH:mm') : "∅" : "--"}
          moonset={moon ? moon.moon.moonset_timestamp ? dayjs.unix(moon.moon.moonset_timestamp).format('HH:mm') : "∅" : "--"}
          phase_name={moon ? moon.moon.phase_name : "--"}
          age={moon ? moon.moon.age_days : 0}
          distance={moon ? Math.floor(moon.moon.moon_distance) : 0}
          illumination={moon ? moon.moon.illumination : "0"}
          fullMoon={moon ? { timestamp: moon.moon_phases.full_moon.next.timestamp, days: moon.moon_phases.full_moon.days_ahead } : { timestamp: '--', days: "--" }}
          newMoon={moon ? { timestamp: moon.moon_phases.new_moon.next.timestamp, days: moon.moon_phases.new_moon.days_ahead } : { timestamp: '--', days: "--" }}
        />
      </div>
    </div>
  )
}
