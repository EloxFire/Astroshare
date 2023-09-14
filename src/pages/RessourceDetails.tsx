import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ressources } from '../scripts/helpers/helpers'
import { Ressource } from '../scripts/types'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import DownloadModal from '../components/DownloadModal';
import { FiChevronLeft } from 'react-icons/fi'
import '../styles/pages/ressource.scss'

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
    console.log(defaultLink);
    setSelectedPackage(defaultLink || '')
  }, [ressource_name])

  return (
    <div className="ressource">
      <div className="ressource__left">
        {/* <small className="ressource__left__breadcrum">Ressources &gt; {ressourceInfos?.level} &gt; {ressourceInfos?.name}</small> */}
        <h1 className="h2 title ressource__left__title"><Link to={"/"}><FiChevronLeft style={{ verticalAlign: 'middle' }} /></Link>{ressourceInfos?.name}</h1>
        {ressourceInfos?.subtitle && <p className="ressource__left__subtitle">{ressourceInfos?.subtitle}</p>}
        <p className="ressource__left__description">{ressourceInfos?.description}</p>
        {ressourceInfos?.notes && <small>{ressourceInfos?.notes}</small>}
        <div className="ressource__left__infos">
          <p className="ressource__left__infos__item">Format du docuent : {ressourceInfos?.format?.join(', ')}</p>
          <p className="ressource__left__infos__item">Niveau : {ressourceInfos?.level}</p>
          <p className="ressource__left__infos__item">Tags : {ressourceInfos?.tags?.join(', ')}</p>
        </div>
        <div className="ressource__left__download-container">
          <button className="ressource__left__download-container__download-button" onClick={() => setDownloadModal(true)}>Télécharger le document</button>
          {/* <a href={selectedPackage} download={ressourceInfos?.downloadNames[ressourceInfos?.links?.indexOf(selectedPackage) || 0]} className="ressource__left__download-container__download-button">Télécharger le document</a> */}
          {
            ressourceInfos?.links && ressourceInfos?.links?.length > 1 && (
              <select onChange={(e) => setSelectedPackage(e.target.value)}>
                {
                  ressourceInfos?.links?.map((package_link, package_index) => {
                    return (
                      <option key={`ressource_package_${package_index}`} value={package_link}>{ressourceInfos?.downloadNames[package_index]}</option>
                    )
                  })
                }
              </select>
            )
          }
        </div>
      </div>
      <div className="ressource__right">
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
