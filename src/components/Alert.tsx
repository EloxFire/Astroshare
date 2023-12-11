import React from 'react'
import '../styles/components/alert.scss'

interface AlertProps {
  message: string
  type: 'success' | 'warning' | 'error'
}

export default function Alert({ message, type }: AlertProps) {
  return (
    <div className="alert">{message}</div>
  )
}
