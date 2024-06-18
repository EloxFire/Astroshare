import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../routes'
import dayjs from 'dayjs'
import '../styles/components/footer.scss'

export default function Footer() {
  return (
    <div className="footer">
      <div className="brand">
        <p className="title">Astroshare</p>
        <p className="copy">© {dayjs().year()} Astroshare / Enzo Avagliano</p>
      </div>
      <div className="block website">
        <p className="subtitle">Site internet</p>
        <Link className="link" to={routes.about.path}>{routes.about.label}</Link>
        <Link className="link" to={routes.contact.path}>{routes.contact.label}</Link>
        <Link className="link" to={routes.privacy.path}>{routes.privacy.label}</Link>
      </div>
      <div className="block app">
        <p className="subtitle">Application mobile</p>
        <Link className="link" to={routes.mobile_app.about.path}>À propos</Link>
        {/* <Link className="link" to={routes.mobile_app.download.path}>{routes.mobile_app.download.label}</Link> */}
        <Link className="link" to={routes.mobile_app.privacy.path}>{routes.mobile_app.privacy.label}</Link>
      </div>
    </div>
  )
}

