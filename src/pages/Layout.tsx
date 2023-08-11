import React from 'react'
import '../styles/pages/layout.scss'
import Navbar from '../components/Navbar'

interface LayoutProps {
  component: React.ReactNode
}

export default function Layout({ component }: LayoutProps) {
  return (
    <div id="layout">
      <Navbar />
      {component}
    </div>
  )
}
