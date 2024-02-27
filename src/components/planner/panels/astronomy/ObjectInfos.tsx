import React from 'react'
import { DeepSkyObject } from '../../../../scripts/types/DeepSkyObject'
import { getObjectTypeFromEnum } from '../../../../scripts/helpers/utils/getObjectTypeFromEnum'
import { getObjectName } from '../../../../scripts/helpers/astronomy/getObjectName'
import ObjectProperty from './ObjectProperty'
import '../../../../styles/components/planner/panels/astronomy/objectInfos.scss'


interface ObjectInfosProps {
  object: DeepSkyObject
}

export default function ObjectInfos({object}: ObjectInfosProps) {
  return (
    <div className="astro-object-infos">
      <p className="title">Informations détaillées</p>
      <div className="head">
        <div>
          <p className="name">{getObjectName(object)}</p>
          <p className="type">{getObjectTypeFromEnum(object.type.toUpperCase())}</p>
        </div>
        <img className="object-image" src={`/images/planner/astro/${getObjectTypeFromEnum(object.type.toUpperCase())}.png`} alt={object.name} />
      </div>
      <div className="infos">
        <ObjectProperty mode='normal' property="RA" value={object.ra} />
        <ObjectProperty mode='normal' property="DEC" value={object.dec} />
        <ObjectProperty mode='normal' property="Magnitude" value={object.v_mag} />
        <ObjectProperty mode='normal' property="Constellation" value={object.const} />
      </div>
    </div>
  )
}
