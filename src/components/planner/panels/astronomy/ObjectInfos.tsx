import React from 'react'
import '../../../../styles/components/planner/panels/astronomy/objectInfos.scss'
import { DeepSkyObject } from '../../../../scripts/types/DeepSkyObject'


interface ObjectInfosProps {
  object: DeepSkyObject
}

export default function ObjectInfos({object}: ObjectInfosProps) {
  return (
    <div className="astro-object-infos">
      <p className="title">Informations détaillées</p>
    </div>
  )
}
