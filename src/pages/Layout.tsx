import React from 'react'
import Navbar from '../components/Navbar'
import CopyrightBadge from '../components/CopyrightBadge'
import '../styles/pages/layout.scss'

interface LayoutProps {
  component: React.ReactNode
  withAuthGuard?: boolean
  asCopyright?: boolean
}

export default function Layout({ component, withAuthGuard, asCopyright }: LayoutProps) {
  return (
    <div id="layout">
      <Navbar />
      {asCopyright && <CopyrightBadge />}
      {component}
    </div>
  )
}
