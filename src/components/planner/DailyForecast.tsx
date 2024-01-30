import React from 'react'
import '../../styles/components/planner/dailyForecast.scss'
import dayjs from 'dayjs'

interface DailyForecastProps {
  days: any[]
}

// For each day create a vertical container with basic infos

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
                  <p className="text">{dayjs.unix(day.dt).format("DD MMMM")}</p>
                  <img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`} alt="Weather Icon" />
                  <p className="text">{Math.floor(day.temp.day)}°C</p>
                  <small>Nébulosité</small>
                  <p className="text">{day.clouds}%</p>
                  <small>Précipitations</small>
                  <p className="text">{day.pop * 100}%</p>
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
