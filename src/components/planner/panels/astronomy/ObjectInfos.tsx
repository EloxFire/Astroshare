import React from 'react'
import { DeepSkyObject } from '../../../../scripts/types/DeepSkyObject'
import { getObjectTypeFromEnum } from '../../../../scripts/helpers/utils/getObjectTypeFromEnum'
import { getObjectName } from '../../../../scripts/helpers/astronomy/getObjectName'
import '../../../../styles/components/planner/panels/astronomy/objectInfos.scss'
import { AstroObjectTypes } from '../../../../scripts/enums/AstroObjectTypes'


interface ObjectInfosProps {
  object: DeepSkyObject
}

export default function ObjectInfos({ object }: ObjectInfosProps) {
  return (
    <div className="astro-object-infos">
      <p className="title">Informations détaillées</p>
      <div className="head">
        <div>
          <p className="name">{getObjectName(object)}</p>
          <p className="type">{getObjectTypeFromEnum(object.type.toUpperCase())}</p>
        </div>
        {
          Object.keys(AstroObjectTypes).includes(object.type.toUpperCase() as AstroObjectTypes) ?
            <img className="object-image" src={`/images/planner/astro/${object.type.toUpperCase()}.png`} alt={object.name} />
            :
            <img className="object-image" src={`/images/planner/astro/OTHER.png`} alt={object.name} />
        }
      </div>
      <div className="infos">
        
      </div>
    </div>
  )
}
