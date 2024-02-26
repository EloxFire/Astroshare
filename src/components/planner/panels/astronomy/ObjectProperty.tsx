import React from 'react'
import '../../../../styles/components/planner/panels/astronomy/objectProperty.scss'

interface ObjectPropertyProps {
  property: string;
  value: string | number;
  mode: 'compact' | 'normal'
}

export default function ObjectProperty({property, value, mode}: ObjectPropertyProps) {
  return (
    <div className={`astro-object-property ${mode}`}>
      <small>{property}</small>
      <p>{value}</p>
    </div>
  )
}
