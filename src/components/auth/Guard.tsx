import React, { useEffect } from 'react'

interface Props {
  children: React.ReactNode
}

export default function Guard({ children }: Props) {

  localStorage.getItem("astroshare_auth_token") === null && window.location.replace("/")

  return (
    <>
      {children}
    </>
  )
}
