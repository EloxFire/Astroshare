import React from 'react'
import { DeepSkyObject } from '../../../../scripts/types/DeepSkyObject'
import { useAstro } from '../../../../contexts/AstroAppContext';
import '../../../../styles/components/planner/panels/astronomy/objectItem.scss'
import ObjectProperty from './ObjectProperty';
import { getObjectName } from '../../../../scripts/helpers/astronomy/getObjectName';

interface ObjectItemProps {
  object: DeepSkyObject
}

export default function ObjectItem({ object }: ObjectItemProps) {
  
  const {changeSelectedObject, selectedObject} = useAstro();

  return (
    <button className={`astro-object-item ${selectedObject === object && 'active-object'}`} style={{gap: selectedObject ? '50px' : '100px'}} key={`object-${getObjectName(object)}`} onClick={() => changeSelectedObject(object)}>
      <ObjectProperty mode='compact' property='Objet' value={getObjectName(object).split(/,| /)[0]} />
      <ObjectProperty mode='compact' property='Nom commun' value={
          selectedObject ?
            object.common_names === "" ? "..." : object.common_names.length > 10 ? `${object.name.slice(0, 7)}...` : object.common_names
            :
            object.common_names === "" ? "..." : object.common_names.length > 20 ? `${object.name.slice(0, 17)}...` : object.common_names
        } />
      <ObjectProperty mode='compact' property='Magnitude' value={object.v_mag} />
      <ObjectProperty mode='compact' property='Type' value={object.type.toUpperCase()} />
    </button>
  )
}
