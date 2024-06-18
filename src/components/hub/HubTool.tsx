import React from 'react'
import '../../styles/components/hub/hubTool.scss'
import { Route } from '../../scripts/types/Route'
import { Link } from 'react-router-dom'

interface HubToolProps {
  title: string
  subtitle: string
  route: Route
  image: string
}

export default function HubTool({ title, subtitle, route, image }: HubToolProps) {
  return (
    <Link className="hub-tool-link" to={route.path}>
      <div className="hub-tool" style={{backgroundImage: `url(${image})`}}>
        <p className="title">{title}</p>
        <p className="subtitle">{subtitle}</p>
      </div>
    </Link>
  )
}
