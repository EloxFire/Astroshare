import React from 'react'
import '../../styles/components/planner/moonOverview.scss'

interface MoonOverviewProps {
  icon: string
  moonrise: string
  moonset: string
  phase_name: string
}

export default function MoonOverview({ icon, moonrise, moonset, phase_name }: MoonOverviewProps) {
  return (
    <div className="moon-overview">
      <p className="title">Lune cette nuit</p>
      <div className="top">
        <p className="moon-icon">{icon}</p>
        <div className="basic-infos">
          <p className="b-info-title">&#8613; {moonrise}</p>
          <p className="b-info-title">&#8615; {moonset}</p>
          <p className="b-info-title">&#9790; {phase_name}</p>
        </div>
      </div>
    </div>
  )
}
