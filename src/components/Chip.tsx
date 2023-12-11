import React, { useState } from 'react'
import { FiPlus, FiMinus } from 'react-icons/fi'
import '../styles/components/chip.scss'

interface Props {
  label: string;
  onClick?: () => void;
}

export default function Chip({ label, onClick }: Props) {

  const [chipState, setChipState] = useState<boolean>(false)

  const handleChipClick = () => {
    setChipState(!chipState)
    if (onClick) onClick()
  }

  return (
    <div className={`chip ${chipState && "active"}`} onClick={handleChipClick}>
      {!chipState ? <FiPlus /> : <FiMinus />}
      <small>{label}</small>
    </div>
  )
}
