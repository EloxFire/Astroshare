import React from 'react'
import '../../styles/components/app/airItem.scss'

interface AirItemProps {
  name: string
  value: number | string
  size: 'small' | 'large'
  noUnit?: boolean
  color: string
}

export default function AirItem({ name, value, size, noUnit, color }: AirItemProps) {
  return (
    <div className={`air-item ${size}`}>
      <p className={`name ${size}`}>{name}</p>
      <p className={`value ${size}`} style={{ color: color }}>{value} {!noUnit && <span style={{ fontSize: ".8rem", color: color }}>µg/m³</span>}</p>
    </div>
  )
}
