import React from 'react'
import '../../styles/components/planner/weatherOverview.scss'

interface WeatherOverviewProps {
  city: string
  temp: number
  hightTemp: number
  lowTemp: number
  description: string
  date: string
}

export default function WeatherOverview() {
  return (
    <div className="weather-overview">
      <div className="infos">
        <p className="title">Vauvenargues</p>
        <p className="current-temp">9°C</p>
        <p className="text">Couvert</p>
        <div className="row">
          <p className="text">&#8613; : 12°C</p>
          <p className="text">&#8615; : 4°C</p>
        </div>
        <p className="text">29 jan. 2024 19h12</p>
      </div>
      <div className="precipitations">
        <p className="value">58%</p>
        <p className="text">précipitations</p>
      </div>
    </div>
  )
}
