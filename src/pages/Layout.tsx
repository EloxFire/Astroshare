import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/pages/layout.scss'
import Footer from '../components/Footer'
import {useLocation} from "react-router-dom";
import NewsBanner from "../components/home/NewsBanner";

interface LayoutProps {
  component: React.ReactNode
  withAuthGuard?: boolean
  asCopyright?: boolean
}

export default function Layout({ component, withAuthGuard, asCopyright }: LayoutProps) {

  const location = useLocation()

  return (
    <div id="layout">
      <Navbar />
      {location.pathname === '/' && <NewsBanner/>}
      {component}
      <Footer />
    </div>
  )
}
