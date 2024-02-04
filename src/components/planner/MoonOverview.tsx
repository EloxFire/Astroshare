import React from 'react'
import '../../styles/components/planner/moonOverview.scss'
import { moon_phases_translations } from '../../scripts/helpers/helpers'

interface MoonOverviewProps {
  moonrise: string
  moonset: string
  phase_name: string

}

export default function MoonOverview({ moonrise, moonset, phase_name }: MoonOverviewProps) {

  return (
    <div className="moon-overview">
      <p className="title">Lune cette nuit</p>
      <div className="top">
        {phase_name === "--" ? <p>--</p> : <img className="moon-icon" src={`/images/planner/moon/${phase_name}.svg`} alt="Current moon phase" />}
        <div className="basic-infos">
          <p className="title"><span style={{ marginRight: '5px' }}>&#9790;</span> {moon_phases_translations[phase_name.toLocaleLowerCase().replace(' ', "_") as keyof typeof moon_phases_translations]}</p>
          <p className="text"><span style={{ marginRight: '5px' }}>&#8613;</span> {moonrise}</p>
          <p className="text"><span style={{ marginRight: '5px' }}>&#8615;</span> {moonset}</p>
        </div>
      </div>
    </div>
  )
}
