import React, { useState } from 'react'
import '../../../../styles/components/planner/panels/astronomy/objectsList.scss'
import { useAstro } from '../../../../contexts/AstroAppContext';
import ObjectItem from './ObjectItem';
import { DeepSkyObject } from '../../../../scripts/types/DeepSkyObject';
import dayjs from 'dayjs';
import { useWeather } from '../../../../contexts/WeatherAppContext';
import { calculateCelestialPosition } from '../../../../scripts/helpers/astronomy/calculateCelestialPosition';
import { getObjectName } from '../../../../scripts/helpers/astronomy/getObjectName';

export default function ObjectsList() {

  const { currentList, currentCatalog, searchObject, currentZenith } = useAstro();
  const { city } = useWeather();

  const handleSearch = (value: string) => {
    searchObject(value);
    
  }

  return (
    <div className="astro-objects-list">
      <p className="title" style={{display: 'flex', justifyContent: 'space-between'}}>
        Objets : {currentCatalog === 'all' ? 'Tous' : currentCatalog === 'm' ? 'Messier' : currentCatalog === 'ngc' ? 'NGC' : 'IC'}
        <input className="search-dso" type="text" onChange={(e) => handleSearch(e.target.value)} placeholder="Rechercher un objet..." />
      </p>
      <div className="list">
        {
          currentList && currentList !== undefined ?
            currentList.length > 0 ?
              currentList.map((object: DeepSkyObject, index: number) => {
                const celestialPosition = calculateCelestialPosition({coords: {lat: city.lat, long: city.lng}, dateTime: dayjs(), celestialObject: {RA: object.ra, Dec: object.dec, name: getObjectName(object, currentCatalog, false)}});
                const IOV = celestialPosition.altitude > 0 && celestialPosition.altitude < 90;
                console.log(celestialPosition);
                
                // const IOV = isObjectVisible(currentZenith.ra, formatAstroCoordinates(object.ra), formatAstroCoordinates(object.dec));
                return <ObjectItem key={`${object.name}-${index}`} object={object} currentlyVisible={IOV} />
              })
              : <p>Aucun objet trouvé...</p>
            : <p>Erreur de chargement...</p>
        }
      </div>
    </div>
  )
}
