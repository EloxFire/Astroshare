import React from 'react'
import dayjs from 'dayjs'
import '../../../../styles/components/planner/panels/weather/dailyForecast.scss'

interface DailyForecastProps {
  days: any[]
}

export default function DailyForecast({ days }: DailyForecastProps) {
  return (
    <div className="daily-forecast">
      <p className="title">Prévisions à 8 jours</p>
      <div className="forecast">
        {
          days.length > 0 ?
            days.map((day: any, index: number) => {
              return (
                <div className="day" key={index}>
                  <p className="text day_number">{dayjs.unix(day.dt).format("DD")}<br />{dayjs.unix(day.dt).format("MMMM")}</p>
                  <img src={`/images/planner/weather/${day.weather[0].icon}.png`} alt="Weather Icon" />
                  <p className="text">{Math.floor(day.temp.day)}°C</p>
                  <div>
                    <small>Nébulosité</small>
                    <p className="text">{Math.floor(day.clouds)}%</p>
                  </div>
                  <div>
                    <small>Précipitations</small>
                    <p className="text">{Math.floor(day.pop * 100)}%</p>
                  </div>
                  <div className="wind">
                    <div className="wind-dir">
                      <div className="north"></div>
                      <p className="text" style={{ transform: `rotate(${day.wind_deg}deg)`, transformOrigin: 'center' }}>&#10148;</p>
                    </div>
                    <p className="text">{Math.floor(day.wind_speed * 3600 / 1000)}Km/h</p>
                  </div>
                </div>
              )
            })
            :
            <p>--</p>
        }
      </div>
    </div>
  )
}
