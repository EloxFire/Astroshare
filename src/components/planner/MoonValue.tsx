import React from 'react'
import '../../styles/components/planner/moonValue.scss'

interface MoonValueProps {
  title: string
  value: string | number
  size: "small" | "large"
}

export default function MoonValue({ title, value, size }: MoonValueProps) {
  return (
    <div className="moon-main-value">
      <p className={`moon-main-value__title ${size}`}>{title}</p>
      <p className={`moon-main-value__value ${size}`}>{value}</p>
    </div>
  )
}
