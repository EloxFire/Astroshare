import React, { useEffect, useRef, useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import '../../styles/pages/auth/auth.scss';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../routes';
import { mailRegex } from '../../scripts/helpers/helpers';
import { createNewUser } from '../../scripts/helpers/api/users/createNewUser';
import { UserRoles } from '../../scripts/enums/roles';
import { User } from '../../scripts/types/User';

export default function Register() {

  const { signUp, user } = useAuth()
  const navigate = useNavigate()
  const inputRef = useRef<HTMLInputElement>(null);

  const [leftDiv, setLeftDiv] = useState<any>(null)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [passwordRepeat, setPasswordRepeat] = useState<string>('')
  const [alert, setAlert] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLeftDiv(document.getElementById('left'))
  }, [])

  useEffect(() => {
    if (leftDiv) {
      const random = Math.floor(Math.random() * 5) + 1
      leftDiv.style.backgroundImage = `url('/images/wallpapers/${random}.jpg')`
    }
  }, [leftDiv])

  const handleMailCompletion = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setEmail(prev => e.target.value);
    inputRef.current!.style.color = mailRegex.test(email) ? 'white' : 'red';
    inputRef.current!.setAttribute('aria-invalid', mailRegex.test(email) ? 'false' : 'true');
    inputRef.current!.setAttribute('aria-describedby', mailRegex.test(email) ? '' : 'mail-helper');
  }

  const handleRegister = async () => {
    setLoading(true)
    if (password !== passwordRepeat) {
      setAlert('Les mots de passe ne correspondent pas')
      setTimeout(() => {
        setAlert('')
      }, 3000)
      return
    }

    if (email === '' || password === '' || passwordRepeat === '') {
      setAlert('Veuillez remplir tous les champs')
      setTimeout(() => {
        setAlert('')
      }, 3000)
      return
    }

    let userCredentials;
    try {
      userCredentials = await signUp(email, password)
    } catch (error: any) {
      error.message.includes('auth/weak-password') && setAlert('Le mot de passe doit contenir au moins 6 caractères')
      error.message.includes('auth/email-already-in-use') && setAlert('Cette adresse email est déjà utilisée')
      error.message.includes('auth/invalid-email') && setAlert('L\'adresse email est invalide')
      error.message.includes('auth/too-many-requests') && setAlert('Trop de tentatives, veuillez réessayer plus tard')
      error.message.includes('auth/network-request-failed') && setAlert('Impossible de se connecter à internet')
      console.error(error.message)

      setTimeout(() => {
        setAlert('')
      }, 3000)
    }

    try {
      const userToAdd: User = {
        email: userCredentials.user.email,
        uid: userCredentials.user.uid,
        role: UserRoles.MEMBER,
        downloadsCount: 0,
        downloadHistory: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      await createNewUser(userToAdd)
      navigate(routes.home.path)
    } catch (error) {
      console.error(error)
      setAlert('Une erreur est survenue, veuillez réessayer plus tard')
    }
  }

  return (
    <div className="register">
      <div className="left" id='left' />
      <div className="right">
        <img src="/images/logos/logo_white.svg" alt="Logo d'Astroshare" />
        <div className="form">
          <h1>Inscription</h1>
          <input type="email" ref={inputRef} name="email" placeholder="Email" onChange={handleMailCompletion} value={email} />
          <input type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          <input type="password" name="password" placeholder="Répétez le mot de passe" onChange={(e) => setPasswordRepeat(e.target.value)} />
          <button onClick={handleRegister}>S'inscrire</button>
        </div>
        {
          alert !== '' && <p className="auth-alert">{alert}</p>
        }
      </div>
    </div>
  )
}
