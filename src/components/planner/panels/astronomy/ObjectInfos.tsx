import React from 'react'
import '../../../../styles/components/planner/panels/astronomy/objectInfos.scss'
import { DeepSkyObject } from '../../../../scripts/types/DeepSkyObject'
import { getObjectTypeFromEnum } from '../../../../scripts/helpers/utils/getObjectTypeFromEnum'
import ObjectProperty from './ObjectProperty'


interface ObjectInfosProps {
  object: DeepSkyObject
}

export default function ObjectInfos({object}: ObjectInfosProps) {
  return (
    <div className="astro-object-infos">
      <p className="title">Informations détaillées</p>
      <div className="head">
        <div>
          <p className="name">{object.name !== "" ? object.name : `${object.cat1}${object.id1}`}</p>
          <p className="type">{getObjectTypeFromEnum(object.type)}</p>
          <p>A.K.A : {
            object.name !== "" ?
              `${object.cat1}${object.id1} - ${object.cat2}${object.id2}`
              :
              `${object.cat2}${object.id2}`
          }</p>
        </div>
        {
          object.image_url !== "" ?
            <img className="object-image" src={object.image_url} alt={object.name} />
            :
            <img className="object-image" src={`/images/planner/astro/${object.type}.png`} alt={object.name} />
        }
      </div>
      <div className="infos">
        <ObjectProperty mode='normal' property="RA" value={object.ra} />
        <ObjectProperty mode='normal' property="DEC" value={object.dec} />
        <ObjectProperty mode='normal' property="Magnitude" value={object.magnitude} />
        <ObjectProperty mode='normal' property="Constellation" value={object.constellation} />
      </div>
    </div>
  )
}
