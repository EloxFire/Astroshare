import React, { useEffect } from 'react'
import '../../../../styles/components/planner/panels/astronomy/mainInfos.scss'
import { usePlanner } from '../../../../contexts/PlannerAppContext'
import dayjs from 'dayjs'
import { calculateZenith } from '../../../../scripts/helpers/astronomy/calculateZenith'
import MainInfosItem from './MainInfosItem'
import getCountryFlag from 'country-flag-icons/unicode'

export default function MainInfos() {

  const { date, city } = usePlanner()
  
  useEffect(() => {
    const zenith = calculateZenith(city.lat, city.lng, dayjs(date).format('YYYY-MM-DD'), dayjs(date).format('HH:mm:ss'));
    console.log('Zenith :', zenith);
    
  }, [city, date])

  return (
    <div className="mainInfosAstro">
      <p className="title">Soirée du {dayjs(date).format('DD-MM-YYYY')}</p>
      <div className="content">
        <div className="location">
          <MainInfosItem label="Ville" value={`${city.name}, ${getCountryFlag(city.flag)}`} />
          <MainInfosItem label="Latitude" value={city.lat} />
          <MainInfosItem label="Longitude" value={city.lng} />
        </div>
        <div className="astro">
          <MainInfosItem label="Lever du Soleil" value="07:00" />
          <MainInfosItem label="Lever de la Lune" value="07:00" />
          <MainInfosItem label="Coucher de la Lune" value="20:00" />
        </div>
      </div>
    </div>
  )
}
