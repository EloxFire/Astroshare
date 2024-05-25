import React from 'react'
import MainInfos from '../panels/astronomy/MainInfos'
import ObjectInfos from '../panels/astronomy/ObjectInfos'
import ObjectsList from '../panels/astronomy/ObjectsList'
import { useAstro } from '../../../contexts/AstroAppContext'

export default function AstronomyStep() {
  const {selectedObject} = useAstro();

  return (
    <div className="body astro">
      <div className="left">
        <MainInfos/>
      </div>
      <div className="right">
        {
          selectedObject &&
          <ObjectInfos object={selectedObject} />
        }
        <ObjectsList/>
      </div>
    </div>
  )
}
