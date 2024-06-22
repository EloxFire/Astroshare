import { useState } from 'react'
import { FiChevronLeft } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'
import { Ressource } from '../../scripts/types';
import { useAuth } from '../../contexts/AuthContext';
import { routes } from '../../routes';
import dayjs from 'dayjs';
import DownloadModal from '../../components/DownloadModal';
import '../../styles/pages/ressources/ressourceDetails.scss'

interface RessourceDetailsProps {
  ressource: Ressource
}

export default function RessourceDetails({ ressource }: RessourceDetailsProps) {

  const { user } = useAuth()
  const navigate = useNavigate()

  const [selectedPackage, setSelectedPackage] = useState<string>(ressource.files![0])
  const [downloadModal, setDownloadModal] = useState<boolean>(false)

  return (
    <div className="ressource-details">
      <div className="ressource-details__left">
        <h1 className="h2 title ressource-details__left__title"><Link to={`/ressources/${ressource.category}`}><FiChevronLeft style={{ verticalAlign: 'middle' }} /></Link>{ressource.name}</h1>
        {ressource.subtitle && <p className="ressource-details__left__subtitle">{ressource.subtitle}</p>}
        <div className="ressource-details__left__description-container">
          <p className="ressource-details__left__description-container__description">{ressource.description !== undefined && new DOMParser().parseFromString(ressource.description, 'text/html').body.textContent}</p>
          {ressource.notes && <small>&#9888; {ressource.notes} &#9888;</small>}
        </div>
        <div className="ressource-details__left__infos">
          <p className="ressource-details__left__infos__item">Format du document : {ressource.format}</p>
          <p className="ressource-details__left__infos__item">Niveau : {ressource.level}</p>
          <p className="ressource-details__left__infos__item__left__infos__item">Tags : {ressource.tags?.split(', ').map((tag, index) => (<span className="tag" key={`ressource-tag-${index}`}>{tag}</span>))}</p>
          <p className="ressource-details__left__infos__item__left__infos__item">Dernière mise à jour : {dayjs(ressource.updatedAt!.toDate()).format('DD MMMM YYYY')}</p>
        </div>
        {
          !user &&
          <button className="ressource-details__left__download-container__download-button" onClick={() => navigate(routes.login.path)} style={{ marginTop: '20px' }}>Connectez-vous pour télécharger</button>
        }
        {
          user &&
          <div className="ressource-details__left__download-container">
            {/* <a href={selectedPackage} download={ressource.downloadNames[ressourceInfos?.links?.indexOf(selectedPackage) || 0]} className="ressource__left__download-container__download-button">Télécharger le document</a> */}
            {
              ressource.files && ressource.files?.length > 1 && (
                <select onChange={(e) => setSelectedPackage(e.target.value)}>
                  {
                    ressource.files?.map((package_link, package_index) => {
                      return (
                        <option key={`ressource-details__package__${package_index}`} value={package_link}>{ressource.downloadNames[package_index]}</option>
                      )
                    })
                  }
                </select>
              )
            }
            <button className="ressource-details__left__download-container__download-button" onClick={() => { setDownloadModal(true) }}>Télécharger le document</button>
          </div>
        }
      </div>
      <div className="ressource-details__right">
        <img src={ressource.filePreview} alt={ressource.name} />
      </div>
      {
        downloadModal &&
        <DownloadModal
          downloadUrl={selectedPackage}
          onClose={() => setDownloadModal(false)}
          ressourceSlug={ressource.slug}
          downloadName={ressource.downloadNames[ressource.files?.indexOf(selectedPackage) || 0]}
        />
      }
    </div>
  )
}
