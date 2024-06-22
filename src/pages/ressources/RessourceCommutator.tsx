import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getRessourceBySlug } from '../../scripts/helpers/api/ressources/getRessourceBySlug'
import { routes } from '../../routes'
import RessourceDetails from './RessourceDetails'
import RessourcePage from './RessourcePage'
import { Ressource } from '../../scripts/types/Ressource'

export default function RessourceCommutator() {

  const { ressource_slug } = useParams()
  const [currentRessource, setCurrentRessource] = useState<Ressource | null>(null)
  const [notFound, setNotFound] = useState<boolean>(false)

  useEffect(() => {
    document.title = `Astroshare | ${ressource_slug}`
  }, [ressource_slug])

  useEffect(() => {
    const fetchData = async () => {
      if (ressource_slug !== undefined) {
        const r = await getRessourceBySlug(ressource_slug)

        if (r.docs.length === 0) {
          console.error('No ressource found with this slug:', ressource_slug)
          setNotFound(true)
          return
        }
        setCurrentRessource(r.docs[0].data() as Ressource)
      }
    }

    fetchData()
  }, [ressource_slug])

  return (
    <>
      {
        currentRessource ?
          <div>
            {currentRessource.type === 'pdf' && <RessourceDetails ressource={currentRessource} />}
            {currentRessource.type === 'online' && <RessourcePage ressource={currentRessource} />}
          </div>
          :
          <div className="ressource">
            <h1 className="h2 title">{notFound ? "Ressource non trouvée." : "Chargement de la ressource..."}</h1>
            {notFound && <Link to={routes.ressources.path}>Retourner à la liste des ressources</Link>}
          </div>
      }
    </>
  )
}
