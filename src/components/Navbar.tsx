import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../routes'
import '../styles/components/navbar.scss'
import { useAuth } from '../contexts/AuthContext'
import Dropdown from './navbar/Dropdown'

export default function Navbar() {

  const { user, logout } = useAuth()

  const [mobileClick, setMobileClick] = useState(false)

  // Add event listener when mobileClick is true
  useEffect(() => {
    if (mobileClick) {
      window.addEventListener('scroll', preventDefault);
    } else {
      window.removeEventListener('scroll', preventDefault);
    }

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', preventDefault);
    };
  }, [mobileClick]);

  // Prevent the default scroll behavior
  function preventDefault(e: Event) {
    e.preventDefault();
  }

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <Link className="home-link" to={routes.home.path}>
          <h1 className="title">Astroshare</h1>
        </Link>
      </div>
      <div className="navbar__links">
        <Link className="link" to={routes.home.path}>{routes.home.label}</Link>
        <Link className="link" to={routes.about.path}>{routes.about.label}</Link>
        <Link className="link" to={routes.hub.path}>{routes.hub.label}</Link>
        {/* <Dropdown mainRoute={routes.hub} routes={[
          routes.ressources,
          routes.mobile_app.about,
          routes.planner,
          routes.gallery,
        ]} /> */}
        <Link className="link" to={routes.weather.path}>{routes.weather.label}</Link>
      </div>
      <div className="navbar__links" style={{ width: '20%', justifyContent: 'flex-end' }}>
        <Link className="link" to={routes.contact.path}>{routes.contact.label}</Link>
        {user && <Link className="link" to={routes.profile.path}>{routes.profile.label}</Link>}
        {!user && <Link className="link" to={routes.login.path}>{routes.login.label}</Link>}
      </div>
      <div className="navbar__burger">
        <p className="h3" onClick={() => setMobileClick(true)}>&#9776;</p>
      </div>
      <div className={`navbar__mobile ${mobileClick && 'navbar__mobile__active'}`}>
        <p className="h2" style={{ marginBottom: '10vh' }}>Astroshare</p>
        <Link className="link" to={routes.home.path} onClick={() => setMobileClick(false)}>{routes.home.label}</Link>
        <Link className="link" to={routes.about.path} onClick={() => setMobileClick(false)}>{routes.about.label}</Link>
        <Link className="link" to={routes.hub.path} onClick={() => setMobileClick(false)}>{routes.hub.label}</Link>
        <Link className="link" to={routes.weather.path} onClick={() => setMobileClick(false)}>{routes.weather.label}</Link>
        <Link className="link" to={routes.gallery.path} onClick={() => setMobileClick(false)}>{routes.gallery.label}</Link>
        <Link className="link" to={routes.contact.path} onClick={() => setMobileClick(false)}>{routes.contact.label}</Link>
        {user && <Link className="link" to={routes.profile.path} onClick={() => setMobileClick(false)}>{routes.profile.label}</Link>}
        {!user && <Link className="link" to={routes.login.path} onClick={() => setMobileClick(false)}>{routes.login.label}</Link>}
        <p className="link" onClick={() => setMobileClick(false)}>Fermer</p>
      </div>
    </div>
  )
}
