import React, { useRef, useState } from 'react'
import { routes } from '../routes'
import { mailRegex } from '../scripts/helpers/helpers'
import emailjs from '@emailjs/browser';
import '../styles/components/downloadModal.scss'
import { incrementRessourceDownloadCount } from '../scripts/helpers/api/ressources/incrementRessourceDownloadCount';
import { useAuth } from '../contexts/AuthContext';
import { sendRessourceToUser } from '../scripts/helpers/api/ressources/sendRessourceToUser';
import { incrementUserDownloadCount } from '../scripts/helpers/api/users/incrementUserDownloadCount';

interface DownloadModalProps {
  downloadUrl: string
  downloadName: string | undefined
  ressourceSlug: string
  onClose: () => void
}

export default function DownloadModal({ downloadUrl, downloadName, onClose, ressourceSlug }: DownloadModalProps) {

  const { user } = useAuth()
  const [loading, setLoading] = useState<boolean>(false)
  const [response, setResponse] = useState<boolean | undefined>(undefined)

  const handleSend = async () => {

    if (!user) return;

    setLoading(true)
    try {
      await sendRessourceToUser(user.email, downloadName!, downloadUrl)
      setLoading(false)
      setResponse(true)
      setTimeout(() => {
        setResponse(undefined)
        onClose()
      }, 2000)
    } catch (error) {
      setLoading(false)
      setResponse(false)
      setTimeout(() => {
        setResponse(undefined)
      }, 3000)
    }

    const statsRes = await incrementRessourceDownloadCount(ressourceSlug)
    const userStatsRes = await incrementUserDownloadCount(user.uid, downloadName!, downloadUrl)
    console.log("Stats res :", statsRes)
    console.log("User stats res :", userStatsRes)
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      onClose()
    }
  })

  return (
    <div className="download-modal">
      <div className="download-modal__container">
        <div className="download-modal__container__body">
          <p className="download-modal__container__body__title">Télecharger "{downloadName}"</p>
          <p className="download-modal__container__body__description">Ce document va vous être envoyé par mail sur l'adresse liée à votre compte : {user.email}</p>
          <p className="download-modal__container__body__description--disclaimer">
            En téléchargeant ce document, vous reconnaissez avoir pris connaissance de notre <a href={routes.privacy.path} target='_blank' rel='noreferrer'>politique de confidentialité</a>.
          </p>
        </div>
        <div className="download-modal__container__footer">
          <button onClick={onClose} className="download-modal__container__footer__close">Annuler</button>
          {loading && <p style={{ padding: 0, margin: 0 }}>Envoi en cours...</p>}
          {response === true && <p style={{ color: 'green', padding: 0, margin: 0 }}>Document envoyé, regardez vos mails !</p>}
          {response === false && <p style={{ color: 'red', padding: 0, margin: 0 }}>Une erreur est survenue, veuillez réessayer.</p>}
          <button onClick={handleSend} className="download-modal__container__footer__close">Télécharger le document</button>
        </div>
      </div>
    </div>
  )
}
