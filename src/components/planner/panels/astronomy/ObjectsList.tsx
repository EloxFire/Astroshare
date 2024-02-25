import React from 'react'
import '../../../../styles/components/planner/panels/astronomy/objectsList.scss'
import { useAstro } from '../../../../contexts/AstroAppContext';
import ObjectItem from './ObjectItem';

export default function ObjectsList() {

  const {deepSkyObjects} = useAstro();

  return (
    <div className="astro-objects-list">
      <p className="title">Objets</p>
      <div className="list">
        {deepSkyObjects.map((object: any) => (
          <ObjectItem key={object.id} object={object} />
        ))}
      </div>
    </div>
  )
}
