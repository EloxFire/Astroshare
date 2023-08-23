import React from 'react'
import '../styles/pages/layout.scss'
import Navbar from '../components/Navbar'
import CopyrightBadge from '../components/CopyrightBadge'

interface LayoutProps {
  component: React.ReactNode
}

export default function Layout({ component }: LayoutProps) {
  return (
    <div id="layout">
      <Navbar />
      <CopyrightBadge />
      {component}
    </div>
  )
}
