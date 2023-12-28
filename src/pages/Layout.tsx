import React, { useEffect } from 'react'
import '../styles/pages/layout.scss'
import Navbar from '../components/Navbar'
import CopyrightBadge from '../components/CopyrightBadge'

interface LayoutProps {
  component: React.ReactNode
  withAuthGuard?: boolean
}

export default function Layout({ component, withAuthGuard }: LayoutProps) {

  useEffect(() => {
    if (withAuthGuard) {

    }
  }, [])

  return (
    <div id="layout">
      <Navbar />
      <CopyrightBadge />
      {component}
    </div>
  )
}
