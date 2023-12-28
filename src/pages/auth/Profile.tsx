import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { Link } from 'react-router-dom'
import { routes } from '../../routes'
import { FiChevronLeft } from 'react-icons/fi'
import '../../styles/pages/auth/profile.scss'
import dayjs from 'dayjs'

export default function Profile() {

  const { user } = useAuth()

  return (
    <div className="profile-page">
      <h1 className="h2 title ressource-details__left__title"><Link to={routes.home.path}><FiChevronLeft style={{ verticalAlign: 'middle' }} /></Link>Profil</h1>
      <div className="profile-page__infos">
        <h3 className="h3">Vos informations</h3>
        <p className="profile-page__infos__item">Nom : {user?.lastname ? user?.lastname : "Non renseigné"}</p>
        <p className="profile-page__infos__item">Prénom : {user?.firstname ? user?.firstname : "Non renseigné"}</p>
        <p className="profile-page__infos__item">Pseudo : {user?.username ? user?.username : "Non renseigné"}</p>
        <p className="profile-page__infos__item">Email : {user?.email}</p>
        <p className="profile-page__infos__item">Ressources téléchargées : {user?.downloadsCount}</p>
        <p className="profile-page__infos__item">Historique des téléchargements :</p>
        <ul style={{ marginBottom: '25px' }}>
          {
            user?.downloadsHistory.length === 0 ?
              <li>Aucun téléchargement</li>
              :
              user?.downloadsHistory.map((download: string, download_index: number) => {
                return (
                  <li key={`profile-page__download__${download_index}`}>{download}</li>
                )
              })
          }
        </ul>
        <p className="profile-page__infos__item">Date d'inscription : {dayjs(user?.createdAt.toDate()).format("DD MMMM YYYY à HH:mm").replace(':', 'h')}</p>
        <p className="profile-page__infos__item">Dernière mise à jour profil : {dayjs(user?.updatedAt.toDate()).format("DD MMMM YYYY à HH:mm").replace(':', 'h')}</p>
        <small>Pour demander la suppression ou la modification de vos informations, merci de m'envoyer un message via la page de <Link to={routes.contact.path}>{routes.contact.label}</Link></small>
      </div>

      <div>
        <Link className="logout-button" to={routes.logout.path}>Déconnexion</Link>
      </div>
    </div>
  )
}
