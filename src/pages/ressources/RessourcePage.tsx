import {Link, useNavigate} from 'react-router-dom'
import { FiChevronLeft } from 'react-icons/fi'
import { Ressource } from '../../scripts/types/Ressource'
import Markdown from 'react-markdown'
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import '../../styles/pages/ressources/ressource.scss'
import dayjs from "dayjs";
import {ReactNode, useState} from "react";
import DownloadModal from "../../components/DownloadModal";
import {useAuth} from "../../contexts/AuthContext";
import {routes} from "../../routes";
import {markdownCustomConfig} from "../../scripts/helpers/utils/markdownComponentsConfig";

interface RessourcePageProps {
  ressource: Ressource
}

export default function RessourcePage({ ressource }: RessourcePageProps) {

  const { user } = useAuth()
  const navigate = useNavigate()

  const [selectedPackage, setSelectedPackage] = useState<string>(ressource.files![0])
  const [downloadModal, setDownloadModal] = useState<boolean>(false)

  return (
    <div className="ressource">
      <h1 className="h2 title">
        <Link to={`/ressources/${ressource.category}`}>
          <FiChevronLeft style={{ verticalAlign: 'middle' }} />
        </Link>
        {ressource.name}
      </h1>
      <div className={"ressource-infos"}>
        <div className={"part left"} style={{flex: 1}}>
          <p className={"ressource-infos__title"}>Informations sur la ressource :</p>
          <div className={"ressource-info-container"}>
            <p>Format :</p>
            {
              ressource.format?.split(',').map((format: string, index: number): ReactNode => (
                <span key={index}>{format}</span>
              ))
            }
          </div>
          <div className={"ressource-info-container"}>
            <p>Niveau :</p>
            {
              ressource.level.split(',').map((level: string, index: number): ReactNode => (
                <span key={index}>{level}</span>
              ))
            }
          </div>
          <div className={"ressource-info-container"}>
            <p>Tags :</p>
            {
              ressource.tags?.split(',').map((level: string, index: number): ReactNode => (
                <span key={index}>{level}</span>
              ))
            }
          </div>
          <div className={"ressource-info-container"}>
            <p>Dernière mise à jour :</p>
            <span>{dayjs(ressource.updatedAt.toDate()).format('DD MMM YYYY')}</span>
          </div>
          <div className={"ressource-info-container"}>
            <p>Description :</p>
            <span style={{backgroundColor: 'transparent', border: 'none'}}>{ressource.description}</span>
          </div>

          <div className={"separator"}/>
          <p className={"ressource-infos__title"}>Cette ressource est aussi disponible en téléchargement !</p>
          <div>
            {
              !user &&
                <button className="ressource-details__left__download-container__download-button" onClick={() => navigate(routes.login.path, {state: {fromPage: window.location.href}})} style={{ marginTop: '20px' }}>Connectez-vous pour télécharger</button>
            }
            {
              user &&
              <>
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
              </>
            }
          </div>
        </div>
        <div className={"part right"}>
          <img src={ressource.filePreview}/>
        </div>
      </div>
      <div className="ressource__content">
        <Markdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={markdownCustomConfig}
        >
          {ressource.mardownContent}
        </Markdown>
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
