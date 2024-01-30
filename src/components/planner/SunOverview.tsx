import React from 'react'
import '../../styles/components/planner/sunOverview.scss'

interface SunOverviewProps {
  sunrise: string
  sunset: string
  currentTime: string
  dayDuration: string
}

export default function SunOverview() {
  return (
    <div className="sun-overview">
      <p className="title">Journée</p>
      <div className="container">
        <div className="box">
          <img className="sun" src="https://openweathermap.org/img/wn/01d@2x.png" alt="Sun" />
          <p className="text">&#8613; --</p>
        </div>
        <div className="bars">
          <div className="bar" />
          <div className="progress" />
        </div>
        <div className="box">
          <img className="moon" src="https://openweathermap.org/img/wn/01n@2x.png" alt="Moon" />
          <p className="text">&#8615; --</p>
        </div>
      </div>
    </div>
  )
}
