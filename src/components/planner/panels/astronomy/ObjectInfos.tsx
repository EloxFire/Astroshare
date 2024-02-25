import React from 'react'
import '../../../../styles/components/planner/panels/astronomy/objectInfos.scss'
import { DeepSkyObject } from '../../../../scripts/types/DeepSkyObject'
import { getObjectTypeFromEnum } from '../../../../scripts/helpers/utils/getObjectTypeFromEnum'


interface ObjectInfosProps {
  object: DeepSkyObject
}

export default function ObjectInfos({object}: ObjectInfosProps) {
  return (
    <div className="astro-object-infos">
      <p className="title">Informations détaillées</p>
      <div className="head">
        <p className="name">{object.name !== "" ? object.name : `${object.cat1}${object.id1}`}</p>
        <p className="type">{getObjectTypeFromEnum(object.type)}</p>
      </div>
    </div>
  )
}
