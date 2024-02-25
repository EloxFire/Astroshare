import React from 'react'
import '../../../../styles/components/planner/panels/astronomy/mainInfosItem.scss'

interface MainInfosItemProps {
  label: string,
  value: string
}

export default function MainInfosItem({ label, value }: MainInfosItemProps) {
  return (
    <div className="astro-main-infos-item">
      <p className="label">{label}</p>
      <p className="value">{value}</p>
    </div>
  )
}
