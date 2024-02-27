import React, { ReactNode } from 'react'
import '../../../../styles/components/planner/panels/astronomy/astroMenu.scss'

interface AstroMenuButtonProps {
  icon: ReactNode,
  label: string,
  onClick: () => void
  selected?: boolean
}

export default function AstroMenuButton({ icon, label, onClick, selected}: AstroMenuButtonProps) {
  return (
    <button title={label} className={`astro-menu-button ${selected && 'active'}`} onClick={onClick}>
      {icon}
    </button>
  )
}
