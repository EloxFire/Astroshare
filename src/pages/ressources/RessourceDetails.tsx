import { useState } from 'react'
import { FiChevronLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { Ressource } from '../../scripts/types';
import dayjs from 'dayjs';
import DownloadModal from '../../components/DownloadModal';
import '../../styles/pages/ressources/ressourceDetails.scss'

interface RessourceDetailsProps {
  ressource: Ressource
}

export default function RessourceDetails({ ressource }: RessourceDetailsProps) {
  const [selectedPackage, setSelectedPackage] = useState<string>('')
  const [downloadModal, setDownloadModal] = useState<boolean>(false)

  return (
    <div className="ressource-details">
      <div className="ressource-details__left">
        <h1 className="h2 title ressource-details__left__title"><Link to={`/ressources/${ressource.category}`}><FiChevronLeft style={{ verticalAlign: 'middle' }} /></Link>{ressource.name}</h1>
        {ressource.subtitle && <p className="ressource-details__left__subtitle">{ressource.subtitle}</p>}
        <div className="ressource-details__left__description-container">
          <p className="ressource-details__left__description-container__description">{ressource.description !== undefined && new DOMParser().parseFromString(ressource.description, 'text/html').body.textContent}</p>
          {ressource.notes && <small>{ressource.notes}</small>}
        </div>
        <div className="ressource-details__left__infos">
          <p className="ressource-details__left__infos__item">Format du document : {ressource.format}</p>
          <p className="ressource-details__left__infos__item">Niveau : {ressource.level}</p>
          <p className="ressource-details__left__infos__item__left__infos__item">Tags : {ressource.tags}</p>
          <p className="ressource-details__left__infos__item__left__infos__item">Dernière mise à jour : {dayjs(ressource.updated).format('DD MMMM YYYY')}</p>
        </div>
        <div className="ressource-details__left__download-container">
          <button className="ressource-details__left__download-container__download-button" onClick={() => { setDownloadModal(true); setSelectedPackage(ressource.files![0]) }}>Télécharger le document</button>
          {/* <a href={selectedPackage} download={ressource.downloadNames[ressourceInfos?.links?.indexOf(selectedPackage) || 0]} className="ressource__left__download-container__download-button">Télécharger le document</a> */}
          {
            ressource.links && ressource.links?.length > 1 && (
              <select onChange={(e) => setSelectedPackage(e.target.value)}>
                {
                  ressource.links?.map((package_link, package_index) => {
                    return (
                      <option key={`ressource-details__package__${package_index}`} value={package_link}>{ressource.downloadNames[package_index]}</option>
                    )
                  })
                }
              </select>
            )
          }
        </div>
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
          downloadName={ressource.downloadNames[ressource.links?.indexOf(selectedPackage) || 0]}
        />
      }
    </div>
  )
}
