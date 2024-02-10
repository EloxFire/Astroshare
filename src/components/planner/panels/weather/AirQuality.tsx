import React from 'react'
import AirItem from '../../AirItem'
import { checkAirLevels } from '../../../../scripts/helpers/data/checkAirLevels'
import { checkIQALevel } from '../../../../scripts/helpers/data/checkIQALevel'
import '../../../../styles/components/planner/panels/weather/airQuality.scss'

interface AirQualityProps {
  aqi: number
  co: number
  no: number
  no2: number
  o3: number
  so2: number
  pm2_5: number
  pm10: number
  nh3: number
}

export default function AirQuality({ aqi, co, no, no2, o3, so2, pm2_5, pm10, nh3 }: AirQualityProps) {
  return (
    <div className="air-quality">
      <p className="title">Qualité de l'air</p>
      <div className="container">
        <div className="container__left">
          <AirItem size='large' name="IQA" value={aqi} color={checkIQALevel(aqi)} noUnit />
        </div>
        <div className="container__right">
          <div className="column">
            <AirItem size='small' name="CO" value={co} color={checkAirLevels('CO', co)} />
            <AirItem size='small' name="NO2" value={no2} color={checkAirLevels('NO2', no2)} />
            <AirItem size='small' name="O3" value={o3} color={checkAirLevels('O3', o3)} />
            <AirItem size='small' name="NO" value={no} color={"#FFF"} />
          </div>
          <div className="column">
            <AirItem size='small' name="SO2" value={so2} color={checkAirLevels('SO2', so2)} />
            <AirItem size='small' name="PM2.5" value={pm2_5} color={checkAirLevels('PM2_5', pm2_5)} />
            <AirItem size='small' name="PM10" value={pm10} color={checkAirLevels('PM10', pm10)} />
            <AirItem size='small' name="NH3" value={nh3} color={"#FFF"} />
          </div>
        </div>
      </div>
    </div>
  )

}
