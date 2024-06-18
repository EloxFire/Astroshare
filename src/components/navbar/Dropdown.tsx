import React from 'react'
import { Link } from 'react-router-dom'
import { Route } from '../../scripts/types/Route'
import '../../styles/components/navbar/dropdown.scss'

interface DropdownProps {
  mainRoute: Route
  routes: Route[]
}

export default function Dropdown({ mainRoute, routes }: DropdownProps) {
  return (
    <div className="dropdown">
    <Link className="link dropdown-button" to={mainRoute.path}>{mainRoute.label}</Link>
    <div className="dropdown-content">
      {
        routes.map((route: Route, index: number) => {
          return (
            <Link className="link dropdown-link" key={index} to={route.path}>{route.label}</Link>
          )
        })
      }
    </div>
  </div>
  )
}
