import { Ressource } from "../scripts/types";
import '../styles/components/ressourceDisplay.scss'

interface RessourceDisplayProps {
  ressource: Ressource;
  currentCategory: string;
  external?: boolean;
}

export default function RessourceDisplay({ ressource, currentCategory }: RessourceDisplayProps) {
  return (
    <div className="ressource-display">
      <div className="ressource-display__left">
        <img className="ressource-display__left__image" src={ressource.files![0]} alt="Aperçu de la ressource" />
        <div className="ressource-display__left__text-container">
          <p className="ressource-display__left__text-container__title">{ressource.name}</p>
          <p className="ressource-display__left__text-container__description">{ressource.subtitle}</p>
        </div>
      </div>
      <div className="ressource-display__right">
        <a href={`/ressources/${currentCategory}/${ressource.slug}`} className="ressource-display__right__button" >Détails et téléchargement</a>
        {/* <a href={`/ressource/${currentCategory}/${ressource.slug}`} className="ressource-display__right__button" >Ressource en ligne</a> */}
      </div>
    </div>
  )
}
