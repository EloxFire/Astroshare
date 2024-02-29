import React, { useEffect, useState } from 'react'
import { DeepSkyObject } from '../../../../scripts/types/DeepSkyObject'
import { useAstro } from '../../../../contexts/AstroAppContext';
import { getObjectName } from '../../../../scripts/helpers/astronomy/getObjectName';
import '../../../../styles/components/planner/panels/astronomy/objectItem.scss'
import ObjectProperty from './ObjectProperty';
import { AstroObjectTypes } from '../../../../scripts/enums/AstroObjectTypes';
import { isObjectVisible } from '../../../../scripts/helpers/astronomy/isObjectVisible';
import { get } from 'http';

interface ObjectItemProps {
  object: DeepSkyObject
}

export default function ObjectItem({ object }: ObjectItemProps) {
  
  const { changeSelectedObject, selectedObject, currentCatalog, currentZenith } = useAstro();

  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    if (object.ra !== undefined && object.dec !== undefined) {
      console.log("OBJECT DEC :",parseInt(object.dec.split(':')[0].slice(1)), "OBJECT :", getObjectName(object, currentCatalog, false));
      
      // const objVisible = isObjectVisible(currentZenith.ra, currentZenith.dec, object.ra, parseInt(object.dec.split(':')[0].slice(1)))
      setIsVisible(true);
    }
  }, [object, currentZenith])

  return (
    <button className={`astro-object-item ${isVisible && 'well-visible'} ${selectedObject === object && 'active-object'}`} style={{gap: selectedObject ? '50px' : '100px'}} key={`object-${getObjectName(object, currentCatalog, false)}`} onClick={() => changeSelectedObject(object)}>
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
