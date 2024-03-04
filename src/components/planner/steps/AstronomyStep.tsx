import React from 'react'
import MainInfos from '../panels/astronomy/MainInfos'
import AstroMenu from '../panels/astronomy/AstroMenu'
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
      <div className="middle">
        {
          selectedObject &&
          <ObjectInfos object={selectedObject} />
        }
        <ObjectsList/>
      </div>
      <div className="right">
        <AstroMenu/>
      </div>
    </div>
  )
}
