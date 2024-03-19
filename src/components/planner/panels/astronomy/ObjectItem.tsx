import React, { useEffect } from 'react'
import { DeepSkyObject } from '../../../../scripts/types/DeepSkyObject'
import { useAstro } from '../../../../contexts/AstroAppContext';
import { getObjectName } from '../../../../scripts/helpers/astronomy/getObjectName';
import { AstroObjectTypes } from '../../../../scripts/enums/AstroObjectTypes';
import ObjectProperty from './ObjectProperty';
import '../../../../styles/components/planner/panels/astronomy/objectItem.scss'
import { convertEquatorialToHorizontal } from '@observerly/astrometry';
import { useWeather } from '../../../../contexts/WeatherAppContext';
import dayjs from 'dayjs';
import { timeRaToRadians } from '../../../../scripts/helpers/astronomy/timeRaToRadians';

interface ObjectItemProps {
  object: DeepSkyObject
  currentlyVisible: boolean
}

export default function ObjectItem({ object, currentlyVisible }: ObjectItemProps) {
  
  const { changeSelectedObject, selectedObject, currentCatalog } = useAstro();
  const { city } = useWeather()

  useEffect(() => {
    
    // const objectCoords = { ra: timeRaToRadians(object.ra), dec: object.dec }
    
    // if (city) {
    //   const {alt, az} = convertEquatorialToHorizontal(new Date(), {city.lat, city.lng}, {ra: timeRaToRadians(object.ra), dec: object.dec})
    // }
    
    // const observer = { city, city }
  }, [])

  return (
    <button className={`astro-object-item ${currentlyVisible && 'well-visible'} ${selectedObject === object && 'active-object'}`} style={{gap: selectedObject ? '50px' : '100px'}} key={`object-${getObjectName(object, currentCatalog, false)}`} onClick={() => changeSelectedObject(object)}>
      {
          Object.keys(AstroObjectTypes).includes(object.type.toUpperCase() as AstroObjectTypes) ?
            <img className="object-image" src={`/images/planner/astro/${object.type.toUpperCase()}.png`} alt={object.name} />
            :
            <img className="object-image" src={`/images/planner/astro/OTHER.png`} alt={object.name} />
        }
      <ObjectProperty mode='compact' property='Objet' value={getObjectName(object, currentCatalog, false).split(/,| /)[0]} />
      <ObjectProperty mode='compact' property='Nom commun' value={
          !selectedObject ?
            object.common_names === "" ? "..." : object.common_names.split(',')[0]
          :
            object.common_names === "" ? "..." : object.common_names.split(',')[0].length <= 10 ? object.common_names.split(',')[0] : object.common_names.split(',')[0].slice(0, 8) + '...' 
          } />
      <ObjectProperty mode='compact' property='Magnitude' value={object.v_mag !== "" ? object.v_mag : "..."} />
      <ObjectProperty mode='compact' property='Type' value={object.type.toUpperCase()} />
    </button>
  )
}
