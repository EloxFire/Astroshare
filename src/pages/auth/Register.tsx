import React, { useEffect, useRef, useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import '../../styles/pages/auth/auth.scss';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../routes';
import { mailRegex } from '../../scripts/helpers/helpers';

export default function Register() {

  const { signUp } = useAuth()
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

    try {
      await signUp(email, password)
      navigate(routes.home.path)
    } catch (error: any) {
      console.error(error.message)
      setAlert('Une erreur est survenue : ' + error.message)
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
          <input type="password" name="password" placeholder="Password" />
          <input type="password" name="password" placeholder="Répétez le mot de passe" />
          <button onClick={handleRegister}>S'inscrire</button>
        </div>
        {
          alert !== '' && <p className="auth-alert">{alert}</p>
        }
      </div>
    </div>
  )
}
