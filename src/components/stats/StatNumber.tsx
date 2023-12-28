import React from 'react'
import '../../styles/components/stats/statsNumber.scss'

interface Props {
  value: number
  name: string
  loading: boolean
}

export default function StatNumber({ value, name, loading }: Props) {
  return (
    <div className="stat-number">
      {loading ? <div className="stat-number__loader"></div> : <p className="stat-number__number">{value}</p>}
      <p className="stat-number__name">{name}</p>
    </div>
  )
}
