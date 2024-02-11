import React from 'react'
import '../../styles/components/planner/moonValue.scss'
import { getWindCardinalDirectionFromDegrees } from '../../scripts/helpers/api/planner/getWindCardinalDirection'

interface WeatherValueProps {
  title: string
  value: string | number
  size: "small" | "large" | 'extra'
  compass?: boolean
  windDir?: number
}

export default function WeatherValue({ title, value, size, compass, windDir }: WeatherValueProps) {
  return (
    <>
      {
        compass ?
          <div>
            <div className="moon-main-value">
              <p className={`moon-main-value__title ${size}`}> {title}</p >
              <p className={`moon-main-value__value ${size}`}>{getWindCardinalDirectionFromDegrees(windDir!)}</p>
            </div >
          </div>
          :
          <div className="moon-main-value">
            <p className={`moon-main-value__title ${size}`}> {title}</p >
            <p className={`moon-main-value__value ${size}`}>{value}</p>
          </div >
      }
    </>
  )
}
