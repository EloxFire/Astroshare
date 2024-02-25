import React, { useEffect } from 'react'
import { usePlanner } from '../../../../contexts/PlannerAppContext'
import { calculateZenith } from '../../../../scripts/helpers/astronomy/calculateZenith'
import dayjs from 'dayjs'
import '../../../../styles/components/planner/panels/astronomy/mainInfos.scss'
import CityInfosItem from './CityInfosItem'
import SunOverview from '../weather/SunOverview'
import { calculateDayPercentage } from '../../../../scripts/helpers/data/calculateDayPercentage'

export default function MainInfos() {

  const { date, city, weather } = usePlanner()
  
  useEffect(() => {
    const zenith = calculateZenith(city.lat, city.lng, dayjs(date).format('YYYY-MM-DD'), dayjs(date).format('HH:mm:ss'));
    console.log('Zenith :', zenith);
    
  }, [city, date])

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
      </div>
    </div>
  )
}
