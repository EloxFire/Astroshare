import React from 'react'
import { DeepSkyObject } from '../../../../scripts/types/DeepSkyObject'
import { getObjectTypeFromEnum } from '../../../../scripts/helpers/utils/getObjectTypeFromEnum'
import { getObjectName } from '../../../../scripts/helpers/astronomy/getObjectName'
import '../../../../styles/components/planner/panels/astronomy/objectInfos.scss'
import { AstroObjectTypes } from '../../../../scripts/enums/AstroObjectTypes'
import { useAstro } from '../../../../contexts/AstroAppContext'


interface ObjectInfosProps {
  object: DeepSkyObject
}

export default function ObjectInfos({ object }: ObjectInfosProps) {

  const {currentCatalog} = useAstro()

  return (
    <div className="astro-object-infos">
      <p className="title">Informations détaillées</p>
      <div className="head">
        <div>
          <p className="name">{getObjectName(object, currentCatalog, true)}</p>
          <p className="type">{getObjectTypeFromEnum(object.type.toUpperCase())}</p>      
          {object.common_names !== "" && <p className="notes">Also known as : {object.common_names.replaceAll(',', ', ')}</p>}
        </div>
        {
          Object.keys(AstroObjectTypes).includes(object.type.toUpperCase() as AstroObjectTypes) ?
            <img className="object-image" src={`/images/planner/astro/${object.type.toUpperCase()}.png`} alt={object.name} />
            :
            <img className="object-image" src={`/images/planner/astro/OTHER.png`} alt={object.name} />
        }
      </div>
      <div className="infos">
        <table>
          <tbody>
            <tr>
              <td className="row-title">Constellation</td>
              <td>{object.const}</td>
            </tr>
            <tr>
              <td className="row-title">Ra</td>
              <td>{object.ra.replace(':', 'h ').replace(':', 'm ')}s</td>
            </tr>
            <tr>
              <td className="row-title">Dec</td>
              <td>{object.dec}</td>
            </tr>
            <tr>
              <td className="row-title">Magnitude <small>(visible)</small></td>
              <td>{object.v_mag}</td>
            </tr>
            <tr>
              <td className="row-title">Major Axis</td>
              <td>{object.maj_ax}</td>
            </tr>
            <tr>
              <td className="row-title">Angle</td>
              <td>{object.pos_ang}</td>
            </tr>
            <tr>
              <td className="row-title">Redshift</td>
              <td>{object.redshift}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="complementary-infos">
        <p className="notes">Complément :</p>
        {object.open_ngc_notes !== "" && <p className="notes">Open NGC notes : {object.open_ngc_notes}</p>}
        {object.ned_notes !== "" && <p className="notes">NED notes : {object.ned_notes}</p>}
      </div>
    </div>
  )
}
