import React, { ReactNode } from 'react'
import '../../../../styles/components/planner/panels/astronomy/astroMenu.scss'

interface AstroMenuButtonProps {
  icon: ReactNode,
  label: string,
  onClick: () => void
}

export default function AstroMenuButton({ icon, label, onClick}: AstroMenuButtonProps) {
  return (
    <button title={label} className="astro-menu-button" onClick={onClick}>
      {icon}
    </button>
  )
}
