import React from 'react'
import { DeepSkyObject } from '../../../../scripts/types/DeepSkyObject'
import { useAstro } from '../../../../contexts/AstroAppContext';
import { getObjectName } from '../../../../scripts/helpers/astronomy/getObjectName';
// import { calculateZenith } from '../../../../scripts/helpers/astronomy/calculateZenith';
import { useWeather } from '../../../../contexts/WeatherAppContext';
import ObjectProperty from './ObjectProperty';
// import dayjs from 'dayjs';
import '../../../../styles/components/planner/panels/astronomy/objectItem.scss'
import { AstroObjectTypes } from '../../../../scripts/enums/AstroObjectTypes';
// import { isObjectVisible } from '../../../../scripts/helpers/astronomy/isObjectVisible';
// import { ZenithObject } from '../../../../scripts/types/ZenithObject';

interface ObjectItemProps {
  object: DeepSkyObject
}

export default function ObjectItem({ object }: ObjectItemProps) {
  
  const { changeSelectedObject, selectedObject } = useAstro();
  // const {city} = useWeather()

  // const [isVisible, setIsVisible] = useState(false);
  // const [zenith, setZenith] = useState<ZenithObject>({ra: "0h 0m 0s", dec: 0, ra_rad: 0})
  
  // useEffect(() => {
  //   if (object.ra !== undefined && object.dec !== undefined && object.m === 1) {
  //     const z = calculateZenith(city.lat, city.lng, dayjs().format('YYYY-MM-DD'), dayjs().format('HH:mm:ss'));
  //     setZenith(z)
  //   }
  // }, [city, object])

  // isObjectVisible(zenith.ra, zenith.dec, object.ra, parseInt(object.dec.split(':')[0].slice(1)))

  return (
    <button className={`astro-object-item ${selectedObject === object && 'active-object'}`} style={{gap: selectedObject ? '50px' : '100px'}} key={`object-${getObjectName(object)}`} onClick={() => changeSelectedObject(object)}>
      {
          Object.keys(AstroObjectTypes).includes(object.type.toUpperCase() as AstroObjectTypes) ?
            <img className="object-image" src={`/images/planner/astro/${object.type.toUpperCase()}.png`} alt={object.name} />
            :
            <img className="object-image" src={`/images/planner/astro/OTHER.png`} alt={object.name} />
        }
      <ObjectProperty mode='compact' property='Objet' value={getObjectName(object).split(/,| /)[0]} />
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
