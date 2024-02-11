import React, { useEffect, useRef, useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { routes } from '../../routes';
import { mailRegex } from '../../scripts/helpers/helpers';
import '../../styles/pages/auth/auth.scss';

export default function Login() {

  const { signIn } = useAuth()
  const { state } = useLocation();
  const navigate = useNavigate()
  const inputRef = useRef<HTMLInputElement>(null);

  const [leftDiv, setLeftDiv] = useState<any>(null)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [alert, setAlert] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLeftDiv(document.getElementById('left'))
  }, [])

  useEffect(() => {
    if (leftDiv) {
      const random = Math.floor(Math.random() * 3) + 1
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

  const handleLogin = async () => {
    setLoading(true)
    if (email === '' || password === '') {
      setAlert('Veuillez remplir tous les champs')
      setTimeout(() => {
        setAlert('')
      }, 3000)
      return
    }

    try {
      await signIn(email, password)
      setLoading(false)
      if (state && state.fromPage) {
        navigate(state.fromPath)
      } else {
        navigate(routes.home.path)
      }
    } catch (error: any) {
      error.message.includes('auth/user-not-found') && setAlert('Aucun utilisateur trouvé avec cet email')
      error.message.includes('auth/wrong-password') && setAlert('Mot de passe incorrect')
      error.message.includes('auth/invalid-email') && setAlert('Email invalide')
      error.message.includes('auth/invalid-login-credentials') && setAlert('Email ou mot de passe invalide')
      error.message.includes('auth/too-many-requests') && setAlert('Trop de tentatives, veuillez réessayer plus tard')
      error.message.includes('auth/network-request-failed') && setAlert('Impossible de se connecter à internet')
      console.error(error.message)
      setLoading(false)

      setTimeout(() => {
        setAlert('')
      }, 3000)
    }

  }

  return (
    <div className="auth">
      <div className="left" id='left' />
      <div className="right">
        <img src="/images/logos/logo_white.svg" alt="Logo d'Astroshare" />
        <div className="form">
          <h1>Connexion</h1>
          <input disabled={loading} type="email" ref={inputRef} name="email" placeholder="Email" onChange={handleMailCompletion} value={email} />
          <input disabled={loading} type="password" name="password" placeholder="Mot de passe" onChange={(e) => setPassword(e.target.value)} />
          <button disabled={loading} onClick={handleLogin}>{loading ? <div className="loader"></div> : "Se connecter"}</button>
          <div style={{ display: 'flex', flexDirection: 'row', marginTop: '10px', justifyContent: 'space-between' }}>
            <small>Pas encore de compte ? <Link to={routes.register.path} >Inscrivez-vous</Link></small>
            <small>Vous rencontrez un problème ? <Link to={routes.contact.path} >Contactez moi !</Link></small>
          </div>
        </div>
        {
          alert !== '' && <p className="auth-alert">{alert}</p>
        }
      </div>
    </div>
  )
}
