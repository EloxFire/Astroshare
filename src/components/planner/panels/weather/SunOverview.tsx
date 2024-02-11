import React from 'react'
import '../../../../styles/components/planner/panels/weather/sunOverview.scss'

interface SunOverviewProps {
  sunrise: string
  sunset: string
  currentTime: string
  dayPercentage: string | number
}

export default function SunOverview({ sunrise, sunset, currentTime, dayPercentage }: SunOverviewProps) {

  console.log(dayPercentage);


  return (
    <div className="sun-overview">
      <p className="title">Journée</p>
      <div className="container">
        {/* <div></div> */}
        <div className="box">
          <img className="sun" src="/images/planner/weather/01d.png" alt="Sun" />
          <p className="text">&#8613; {sunrise}</p>
        </div>
        <div className="bars">
          <div className="bar" />
          <div className="progress" style={{ width: `${dayPercentage}%` }} data-time={currentTime} />
        </div>

        <div className="box">
          <img className="moon" src="/images/planner/weather/01n.png" alt="Moon" />
          <p className="text">&#8615; {sunset}</p>
        </div>
      </div>
    </div>
  )
}
