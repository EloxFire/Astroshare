import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { UserRoles } from '../../scripts/enums/roles'
import { routes } from '../../routes'

interface Props {
  children: React.ReactNode
}

export default function Guard({ children }: Props) {

  // localStorage.getItem("astroshare_auth_token") === null && window.location.replace("/")
  const { user } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      user.role !== UserRoles.ADMIN && navigate(routes.home.path)
    } else {
      // navigate(routes.home.path)
    }
  }, [user])


  return (
    <>
      {children}
    </>
  )
}
