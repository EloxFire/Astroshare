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
          <p className="title">&#9790; {moon_phases_translations[phase_name.toLocaleLowerCase().replace(' ', "_") as keyof typeof moon_phases_translations]}</p>
          <p className="text">&#8613; {moonrise}</p>
          <p className="text">&#8615; {moonset}</p>
        </div>
      </div>
    </div>
  )
}
