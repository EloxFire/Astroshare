import React from 'react'
import { usePlanner } from '../../../contexts/PlannerAppContext'
import { calculateDayPercentage } from '../../../scripts/helpers/data/calculateDayPercentage'
import dayjs from 'dayjs'
import AirQuality from '../panels/weather/AirQuality'
import DailyForecast from '../panels/weather/DailyForecast'
import HourlyForecast from '../panels/weather/HourlyForecast'
import MoonOverview from '../panels/weather/MoonOverview'
import NextStep from '../panels/NextStep'
import SunOverview from '../panels/weather/SunOverview'
import WeatherOverview from '../panels/weather/WeatherOverview'

export default function WeatherStep() {
  const { weather, city, moon, airQuality } = usePlanner()

  return (
    <div className="body">
      <div className="left">
        <WeatherOverview
          city={city ? city.name : "--"}
          country={city ? city.country : "--"}
          state={city ? city.state : "--"}
          icon={weather ? weather.current.weather[0].icon : "--"}
          date={weather ? dayjs.unix(weather.current.dt).format("DD MMMM YYYY HH:mm") : "--"}
          description={weather ? weather.current.weather[0].description : "--"}
          hightTemp={weather ? Math.floor(weather.daily[0].temp.max) : "--"}
          lowTemp={weather ? Math.floor(weather.daily[0].temp.min) : "--"}
          temp={weather ? Math.floor(weather.current.temp) : "--"}
          precipitations={weather ? Math.floor(weather.daily[0].pop * 100) : "--"}
          humidity={weather ? Math.floor(weather.current.humidity) : "--"}
          wind={weather ? Math.floor(weather.current.wind_speed * 3600 / 1000) : "--"}
          pressure={weather ? weather.current.pressure : "--"}
          wind_dir={weather ? weather.current.wind_deg : "--"}
        />
        <MoonOverview
          moonrise={moon ? moon.moon.moonrise_timestamp ? dayjs.unix(moon.moon.moonrise_timestamp).format('HH:mm') : "∅" : "--"}
          moonset={moon ? moon.moon.moonset_timestamp ? dayjs.unix(moon.moon.moonset_timestamp).format('HH:mm') : "∅" : "--"}
          phase_name={moon ? moon.moon.phase_name : "--"}
          age={moon ? moon.moon.age_days : 0}
          distance={moon ? Math.floor(moon.moon.moon_distance) : 0}
          illumination={moon ? moon.moon.illumination : "0"}
          fullMoon={moon ? { timestamp: moon.moon_phases.full_moon.next.timestamp, days: moon.moon_phases.full_moon.days_ahead } : { timestamp: '--', days: "--" }}
          newMoon={moon ? { timestamp: moon.moon_phases.new_moon.next.timestamp, days: moon.moon_phases.new_moon.days_ahead } : { timestamp: '--', days: "--" }}
        />
      </div>
      <div className="middle">
        <SunOverview
          mode='day'
          format='normal'
          sunrise={weather ? dayjs.unix(weather.current.sunrise).format("HH:mm") : "--"}
          sunset={weather ? dayjs.unix(weather.current.sunset).format("HH:mm") : "--"}
          currentTime={weather ? dayjs.unix(weather.current.dt).format("HH:mm") : "--"}
          // Day percentage : sunrise = 0% / sunset = 100% / currentTime = ?
          dayPercentage={
            weather ?
              Math.floor(calculateDayPercentage(dayjs.unix(weather.current.sunrise), dayjs.unix(weather.current.sunset)))
              :
              "--"
          }
        />
        <HourlyForecast hours={weather ? weather.hourly : []} />
      </div>
      <div className="right">
        <AirQuality
          aqi={airQuality ? airQuality.list[0].main.aqi : 0}
          co={airQuality ? airQuality.list[0].components.co : 0}
          no={airQuality ? airQuality.list[0].components.no : 0}
          no2={airQuality ? airQuality.list[0].components.no2 : 0}
          o3={airQuality ? airQuality.list[0].components.o3 : 0}
          so2={airQuality ? airQuality.list[0].components.so2 : 0}
          pm2_5={airQuality ? airQuality.list[0].components.pm2_5 : 0}
          pm10={airQuality ? airQuality.list[0].components.pm10 : 0}
          nh3={airQuality ? airQuality.list[0].components.nh3 : 0}
        />
        <DailyForecast days={weather ? weather.daily : []} />
        <NextStep disabled={!city || !weather || !moon || !airQuality} />
      </div>
    </div>
  )
}
