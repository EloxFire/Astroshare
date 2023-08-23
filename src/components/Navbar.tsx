import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../routes'
import '../styles/components/navbar.scss'

export default function Navbar() {



  return (
    <div className="navbar">
      <div className="navbar__logo">
        <h1 className="title">Astroshare</h1>
      </div>
      <div className="navbar__links">
        <Link className="link" to={routes.home.path}>{routes.home.label}</Link>
        <Link className="link" to={routes.about.path}>{routes.about.label}</Link>
        <Link className="link" to={routes.gallery.path}>{routes.gallery.label}</Link>
      </div>
      <div className="navbar__cta">
        <Link className="button-link" to={routes.contact.path}>{routes.contact.label}</Link>
        <div className="dropdown">
          <button className="dropbtn">Dropdown</button>
          <div className="dropdown-content">
            <Link className="link" to={routes.home.path}>{routes.home.label}</Link>
            <Link className="link" to={routes.about.path}>{routes.about.label}</Link>
            <Link className="link" to={routes.gallery.path}>{routes.gallery.label}</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
