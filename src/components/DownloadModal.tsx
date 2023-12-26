import React, { useRef, useState } from 'react'
import { routes } from '../routes'
import { mailRegex } from '../scripts/helpers/helpers'
import emailjs from '@emailjs/browser';
import '../styles/components/downloadModal.scss'
import { incrementRessourceDownloadCount } from '../scripts/helpers/api/ressources/incrementRessourceDownloadCount';

interface DownloadModalProps {
  downloadUrl: string
  downloadName: string | undefined
  ressourceSlug: string
  onClose: () => void
}

export default function DownloadModal({ downloadUrl, downloadName, onClose, ressourceSlug }: DownloadModalProps) {

  const [disabled, setDisabled] = useState<boolean>(true)
  const [mail, setMail] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [response, setResponse] = useState<boolean | undefined>(undefined)
  const inputRef = useRef<HTMLInputElement>(null);

  const handleMailCompletion = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setMail(prev => e.target.value);
    inputRef.current!.style.color = mailRegex.test(mail) ? 'white' : 'red';
    inputRef.current!.setAttribute('aria-invalid', mailRegex.test(mail) ? 'false' : 'true');
    // Add helper text to explain why the input is invalid
    inputRef.current!.setAttribute('aria-describedby', mailRegex.test(mail) ? '' : 'mail-helper');
    setDisabled(!mailRegex.test(mail));
  }

  const handleSend = async () => {
    if (!mailRegex.test(mail)) return;

    const email = {
      email: mail,
      document_name: downloadName,
      document_link: downloadUrl
    }

    setLoading(true)
    emailjs.send('Astroshare', 'astroshare_download', email, 'user_OimdLZV4uZQJjsxfr0Cgc')
      .then((result) => {
        setLoading(false)
        setResponse(true)
        setTimeout(() => {
          setResponse(undefined)
          onClose()
        }, 2000)
      }, (error) => {
        setLoading(false)
        setResponse(false)
        setTimeout(() => {
          setResponse(undefined)
        }, 3000)
      });

    const statsRes = await incrementRessourceDownloadCount(ressourceSlug)
    console.log("Stats res :", statsRes)
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
          <p className="download-modal__container__body__description">
            Afin de télécharger ce document, veuillez renseigner une adresse mail valide, vous recevrez un lien de téléchargement sur cette dernière.
          </p>
          <input onChange={handleMailCompletion} ref={inputRef} type="email" placeholder='Votre adresse mail' />
          <p className="download-modal__container__body__description--disclaimer">
            En téléchargeant ce document, vous reconnaissez avoir pris connaissance de notre <a href={routes.privacy.path} target='_blank' rel='noreferrer'>politique de confidentialité</a>.
          </p>
        </div>
        <div className="download-modal__container__footer">
          <button onClick={onClose} className="download-modal__container__footer__close">Annuler</button>
          {loading && <p style={{ padding: 0, margin: 0 }}>Envoi en cours...</p>}
          {response === true && <p style={{ color: 'green', padding: 0, margin: 0 }}>Document envoyé, regardez vos mails !</p>}
          {response === false && <p style={{ color: 'red', padding: 0, margin: 0 }}>Une erreur est survenue, veuillez réessayer.</p>}
          <button disabled={disabled} onClick={handleSend} className="download-modal__container__footer__close">Télécharger le document</button>
        </div>
      </div>
    </div>
  )
}
