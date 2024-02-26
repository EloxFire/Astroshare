import React from 'react'
import { DeepSkyObject } from '../../../../scripts/types/DeepSkyObject'
import { useAstro } from '../../../../contexts/AstroAppContext';
import '../../../../styles/components/planner/panels/astronomy/objectItem.scss'
import ObjectProperty from './ObjectProperty';

interface ObjectItemProps {
  object: DeepSkyObject
}

export default function ObjectItem({ object }: ObjectItemProps) {
  
  const {changeSelectedObject, selectedObject} = useAstro();

  return (
    <button className={`astro-object-item ${selectedObject === object && 'active-object'}`} style={{gap: selectedObject ? '50px' : '100px'}} key={object.id} onClick={() => changeSelectedObject(object)}>
      <ObjectProperty mode='compact' property='Objet' value={`${object.cat1}${object.id1}`} />
      <ObjectProperty mode='compact' property='Nom commun' value={
          selectedObject ?
            object.name === "" ? "..." : object.name.length > 10 ? `${object.name.slice(0, 7)}...` : object.name
            :
            object.name === "" ? "..." : object.name
        } />
      <ObjectProperty mode='compact' property='Magnitude' value={object.magnitude} />
      <ObjectProperty mode='compact' property='Type' value={object.type} />
    </button>
  )
}
