import React from 'react'
import { Link } from 'react-router-dom'
import { FiChevronLeft } from 'react-icons/fi'
import '../styles/pages/hub.scss'

export default function Hub() {
  return (
    <div className="hub">
      <h1 className="h1 title ressource__left__title"><Link to={"/"}><FiChevronLeft style={{ verticalAlign: 'middle' }} /></Link>Hub de ressources</h1>
    </div>
  )
}
