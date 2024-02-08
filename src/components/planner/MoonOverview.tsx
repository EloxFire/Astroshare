import React from 'react'
import '../../styles/components/planner/moonOverview.scss'
import { moon_phases_translations } from '../../scripts/helpers/helpers'
import MoonValue from './MoonValue'
import dayjs from 'dayjs'

interface MoonOverviewProps {
  illumination: string
  phase_name: string
  moonrise: string
  moonset: string
  distance: number
  age: number
  newMoon: { timestamp: number, days: number }
  fullMoon: { timestamp: number, days: number }

}

export default function MoonOverview({ moonrise, moonset, phase_name, illumination, age, distance, newMoon, fullMoon }: MoonOverviewProps) {

  return (
    <div className="moon-overview">
      <p className="title">Lune cette nuit</p>
      <div className="top">
        {phase_name === "--" ? <p>--</p> : <img className="moon-icon" src={`/images/planner/moon/${phase_name}.svg`} alt="Current moon phase" />}
        <div className="basic-infos">
          <p className="title"><span style={{ marginRight: '5px' }}>&#9790;</span> {moon_phases_translations[phase_name.toLocaleLowerCase().replace(' ', "_") as keyof typeof moon_phases_translations]}</p>
          <div className="row">
            <div className="column">
              <MoonValue title="Lever" value={moonrise} size="small" />
              <MoonValue title="Coucher" value={moonset} size="small" />
            </div>
            <div className="column">
              <MoonValue title="Distance" value={`${distance.toString()}Km`} size="small" />
              <MoonValue title="Âge" value={`${age.toString()} jours`} size="small" />
            </div>
            <div className="column">
              <MoonValue title="Illumination" value={illumination} size="small" />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <MoonValue title="Nouvelle lune" value={dayjs.unix(newMoon.timestamp).format('DD MMMM YYYY')} size="large" />
        <MoonValue title="Pleine lune" value={dayjs.unix(fullMoon.timestamp).format('DD MMMM YYYY')} size="large" />
      </div>
    </div>
  )
}
