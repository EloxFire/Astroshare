import { useEffect, useState } from 'react'
import { FiChevronLeft } from 'react-icons/fi'
import { Ressource } from '../scripts/types'
import { ressources } from '../scripts/helpers/ressources';
import { Link, useParams } from 'react-router-dom'
import DownloadModal from '../components/DownloadModal';
import dayjs from 'dayjs';
import '../styles/pages/ressourceDetails.scss'

export default function RessourceDetails() {

  const { ressource_name } = useParams()
  const [ressourceInfos, setRessourceInfos] = useState<Ressource | undefined>(undefined)
  const [selectedPackage, setSelectedPackage] = useState<string>('')
  const [downloadModal, setDownloadModal] = useState<boolean>(false)

  useEffect(() => {
    // Find the ressource in the ressources array
    const ressource = ressources.find(ressource => ressource.slug === ressource_name)
    setRessourceInfos(ressource)
    let defaultLink = ressource?.links?.[0];
    setSelectedPackage(defaultLink || '')
  }, [ressource_name])

  return (
    <div className="ressource-details">
      <div className="ressource-details__left">
        {/* <small className="ressource__left__breadcrum">Ressources &gt; {ressourceInfos?.level} &gt; {ressourceInfos?.name}</small> */}
        <h1 className="h2 title ressource-details__left__title"><Link to={`/ressources/${ressourceInfos?.category}`}><FiChevronLeft style={{ verticalAlign: 'middle' }} /></Link>{ressourceInfos?.name}</h1>
        {ressourceInfos?.subtitle && <p className="ressource-details__left__subtitle">{ressourceInfos?.subtitle}</p>}
        <div className="ressource-details__left__description-container">
          <p className="ressource-details__left__description-container__description">{ressourceInfos?.description !== undefined && new DOMParser().parseFromString(ressourceInfos?.description, 'text/html').body.textContent}</p>
          {ressourceInfos?.notes && <small>{ressourceInfos?.notes}</small>}
        </div>
        <div className="ressource-details__left__infos">
          <p className="ressource-details__left__infos__item">Format du document : {ressourceInfos?.format?.join(', ')}</p>
          <p className="ressource-details__left__infos__item">Niveau : {ressourceInfos?.level}</p>
          <p className="ressource-details__left__infos__item__left__infos__item">Tags : {ressourceInfos?.tags?.join(', ')}</p>
          <p className="ressource-details__left__infos__item__left__infos__item">Dernière mise à jour : {dayjs(ressourceInfos?.updated).format('DD MMMM YYYY')}</p>
        </div>
        <div className="ressource-details__left__download-container">
          <button className="ressource-details__left__download-container__download-button" onClick={() => setDownloadModal(true)}>Télécharger le document</button>
          {/* <a href={selectedPackage} download={ressourceInfos?.downloadNames[ressourceInfos?.links?.indexOf(selectedPackage) || 0]} className="ressource__left__download-container__download-button">Télécharger le document</a> */}
          {
            ressourceInfos?.links && ressourceInfos?.links?.length > 1 && (
              <select onChange={(e) => setSelectedPackage(e.target.value)}>
                {
                  ressourceInfos?.links?.map((package_link, package_index) => {
                    return (
                      <option key={`ressource-details__package__${package_index}`} value={package_link}>{ressourceInfos?.downloadNames[package_index]}</option>
                    )
                  })
                }
              </select>
            )
          }
        </div>
      </div>
      <div className="ressource-details__right">
        <img src={ressourceInfos?.image} alt={ressourceInfos?.name} />
      </div>
      {
        downloadModal &&
        <DownloadModal
          downloadUrl={selectedPackage}
          onClose={() => setDownloadModal(false)}
          downloadName={ressourceInfos?.downloadNames[ressourceInfos?.links?.indexOf(selectedPackage) || 0]}
        />
      }
    </div>
  )
}
