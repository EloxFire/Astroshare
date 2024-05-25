import React from 'react'
import Navbar from '../components/Navbar'
import CopyrightBadge from '../components/CopyrightBadge'
import '../styles/pages/layout.scss'

interface LayoutProps {
  component: React.ReactNode
  withAuthGuard?: boolean
}

export default function Layout({ component, withAuthGuard }: LayoutProps) {
  return (
    <div id="layout">
      <Navbar />
      <CopyrightBadge />
      {component}
    </div>
  )
}
