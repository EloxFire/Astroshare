import React from 'react'
import '../../styles/components/planner/hourlyForecast.scss'
import dayjs from 'dayjs'

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
                  <img src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`} alt="Weather Icon" />
                  <div>
                    <small>Nébulosité</small>
                    <p className="text">{hour.clouds}%</p>
                  </div>
                  <div>
                    <small>Précipitations</small>
                    <p className="text">{hour.pop * 100}%</p>
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
