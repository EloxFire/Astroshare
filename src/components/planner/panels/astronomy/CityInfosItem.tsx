import React from 'react'
import { City } from '../../../../scripts/types/City'
import { FiMap } from 'react-icons/fi'
import '../../../../styles/components/planner/panels/astronomy/cityInfosItem.scss'
import getCountryFlag from 'country-flag-icons/unicode'


interface CityInfosItemProps {
  city: City
}

export default function CityInfosItem({ city }: CityInfosItemProps) {
  return (
    <div className="city-infos-item">
      <FiMap />
      <div className="infos">
        <p className="city">{city.name} {getCountryFlag(city.flag)}</p>
        <small>{city.lat} / {city.lng}</small>
      </div>
    </div>
  )
}
