import React from 'react'
import { DeepSkyObject } from '../../../../scripts/types/DeepSkyObject'
import { useAstro } from '../../../../contexts/AstroAppContext';
import '../../../../styles/components/planner/panels/astronomy/objectItem.scss'

interface ObjectItemProps {
  object: DeepSkyObject
}

export default function ObjectItem({ object }: ObjectItemProps) {
  
  const {changeSelectedObject, selectedObject} = useAstro();

  return (
    <button className={`astro-object-item ${selectedObject === object && 'active-object'}`} style={{gap: selectedObject ? '50px' : '100px'}} key={object.id} onClick={() => changeSelectedObject(object)}>
      <div className="property">
        <small>Objet</small>
        <p>{object.cat1}{object.id1}</p>
      </div>
      <div className="property">
        <small>Nom commun</small>
        {
          selectedObject ?
            <p>{object.name === "" ? "..." : object.name.length > 10 ? `${object.name.slice(0, 7)}...` : object.name}</p>
            :
            <p>{object.name === "" ? "..." : object.name}</p>
        }
      </div>
      <div className="property">
        <small>Magnitude</small>
        <p>{object.magnitude}</p>
      </div>
      <div className="property">
        <small>Type</small>
        <p>{object.type}</p>
      </div>
    </button>
  )
}
