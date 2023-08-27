import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ressources } from '../scripts/helpers'
import { Ressource } from '../scripts/types'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import '../styles/pages/ressource.scss'

export default function RessourceDetails() {

  const { ressource_name } = useParams()
  const [ressourceInfos, setRessourceInfos] = useState<Ressource | undefined>(undefined)
  const [selectedPackage, setSelectedPackage] = useState<string>('')

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
        <h1 className="h2 title ressource__left__title">{ressourceInfos?.name}</h1>
        {ressourceInfos?.subtitle && <p className="ressource__left__subtitle">{ressourceInfos?.subtitle}</p>}
        <p className="ressource__left__description">{ressourceInfos?.description}</p>
        {ressourceInfos?.notes && <small>{ressourceInfos?.notes}</small>}
        <div className="ressource__left__infos">
          <p className="ressource__left__infos__item">Format du docuent : {ressourceInfos?.format?.join(', ')}</p>
          <p className="ressource__left__infos__item">Niveau : {ressourceInfos?.level}</p>
          <p className="ressource__left__infos__item">Tags : {ressourceInfos?.tags?.join(', ')}</p>
        </div>
        <div className="ressource__left__download-container">
          <a href={selectedPackage} download={ressourceInfos?.downloadNames[ressourceInfos?.links?.indexOf(selectedPackage) || 0]} className="ressource__left__download-container__download-button">Télécharger le document</a>
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
    </div>
  )
}
