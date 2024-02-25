import React from 'react'
import '../../../../styles/components/planner/panels/weather/sunOverview.scss'

interface SunOverviewProps {
  sunrise?: string
  sunset: string
  currentTime: string
  dayPercentage?: string | number
  format: 'compact' | 'normal'
  mode: 'day' | 'night'
  nextSunrise?: string
  nightPercentage?: string | number
}

export default function SunOverview({ sunrise, sunset, currentTime, dayPercentage, format, mode, nextSunrise, nightPercentage }: SunOverviewProps) {

  console.log(dayPercentage);


  return (
    <>
      {
        mode === 'day' ?
          <div className={`sun-overview ${format}`}>
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
          :
          <div className={`sun-overview ${format}`}>
          <p className="title">Nuit</p>
          <div className="container">
            {/* <div></div> */}
            <div className="box">
              <img className="sun" src="/images/planner/weather/01n.png" alt="Moon" />
              <p className="text">&#8615; {sunset}</p>
            </div>
            <div className="bars">
              <div className="bar" />
              <div className="progress" style={{ width: `${nightPercentage}%` }} data-time={currentTime} />
            </div>

            <div className="box">
              <img className="moon" src="/images/planner/weather/01d.png" alt="Sun" />
              <p className="text">&#8613; {nextSunrise}</p>
            </div>
          </div>
        </div>
      }
    </>
  )
}
