import React from 'react'
import dayjs from 'dayjs'
import '../../../../styles/components/app/panels/weather/hourlyForecast.scss'

interface HourlyForecastProps {
  hours?: any[]
}

export default function HourlyForecast({ hours }: HourlyForecastProps) {

  return (
    <div className="hourly-forecast">
      <p className="title">Heure par heure (48H)</p>
      <div className="forecast">
        {
          hours ?
            hours.map((hour: any, index: number) => {
              return (
                <div className="hour" key={index}>
                  <p className="text">{dayjs.unix(hour.dt).format("HH")}h</p>
                  <img src={`/images/planner/weather/${hour.weather[0].icon}.png`} alt="Weather Icon" />
                  <div>
                    <small>Nébulosité</small>
                    <p className="text">{hour.clouds}%</p>
                  </div>
                  <div>
                    <small>Précipitations</small>
                    <p className="text">{Math.floor(hour.pop * 100)}%</p>
                  </div>
                  <p className="text">{Math.floor(hour.temp)}°C</p>
                  <div className="wind">
                    <div className="wind-dir">
                      <div className="north"></div>
                      <p className="text" style={{ transform: `rotate(${hour.wind_deg}deg)` }}>&#10148;</p>
                    </div>
                    <p className="text">{Math.floor(hour.wind_speed * 3600 / 1000)}Km/h</p>
                  </div>
                </div>
              )
            })
            :
            <div className="loader"></div>
        }
      </div>
    </div>
  )
}
