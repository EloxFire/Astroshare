import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/pages/layout.scss'
import Footer from '../components/Footer'

interface LayoutProps {
  component: React.ReactNode
  withAuthGuard?: boolean
  asCopyright?: boolean
}

export default function Layout({ component, withAuthGuard, asCopyright }: LayoutProps) {
  return (
    <div id="layout">
      <Navbar />
      {component}
      <Footer />
    </div>
  )
}
