import React from 'react'
import { useAuth } from '../../contexts/AuthContext'

export default function Login() {

  const { signIn } = useAuth()

  return (
    <div>
      <button onClick={() => signIn('eavagliano6@gmail.com', 'YYN57S@YSsCfYsKx')}>Login</button>
    </div>
  )
}
