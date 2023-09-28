import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../routes'
import '../styles/components/navbar.scss'

export default function Navbar() {

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
        <Link className="link" to={routes.gallery.path}>{routes.gallery.label}</Link>
      </div>
      <div className="navbar__cta">
        <Link className="button-link" to={routes.contact.path}>{routes.contact.label}</Link>
      </div>
      <div className="navbar__burger">
        <p className="h3" onClick={() => setMobileClick(true)}>&#9776;</p>
      </div>
      <div className={`navbar__mobile ${mobileClick && 'navbar__mobile__active'}`}>
        <p className="h2" style={{ marginBottom: '10vh' }}>Astroshare</p>
        <Link className="link" to={routes.home.path} onClick={() => setMobileClick(false)}>{routes.home.label}</Link>
        <Link className="link" to={routes.about.path} onClick={() => setMobileClick(false)}>{routes.about.label}</Link>
        <Link className="link" to={routes.hub.path} onClick={() => setMobileClick(false)}>{routes.hub.label}</Link>
        <Link className="link" to={routes.gallery.path} onClick={() => setMobileClick(false)}>{routes.gallery.label}</Link>
        <p className="link" onClick={() => setMobileClick(false)}>Fermer</p>
      </div>
    </div>
  )
}
