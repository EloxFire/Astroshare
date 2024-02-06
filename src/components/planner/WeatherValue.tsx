import React from 'react'
import '../../styles/components/planner/moonValue.scss'

interface WeatherValueProps {
  title: string
  value: string | number
  size: "small" | "large"
}

export default function WeatherValue({ title, value, size }: WeatherValueProps) {
  return (
    <div className="moon-main-value">
      <p className={`moon-main-value__title ${size}`}>{title}</p>
      <p className={`moon-main-value__value ${size}`}>{value}</p>
    </div>
  )
}
