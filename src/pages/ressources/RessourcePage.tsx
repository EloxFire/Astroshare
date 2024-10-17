import {Link} from 'react-router-dom'
import { FiChevronLeft } from 'react-icons/fi'
import { Ressource } from '../../scripts/types/Ressource'
import {useState} from "react";
import {markdownCustomConfig} from "../../scripts/helpers/utils/markdownComponentsConfig";
import Markdown from 'react-markdown'
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import DownloadModal from "../../components/DownloadModal";
import '../../styles/pages/ressources/ressource.scss'
import RessourceInfosBox from "../../components/RessourceInfosBox";

interface RessourcePageProps {
  ressource: Ressource
}

export default function RessourcePage({ ressource }: RessourcePageProps) {

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
      <RessourceInfosBox ressource={ressource} onFileSelect={(e) => setSelectedPackage(e)} onClickDownload={(e) => setDownloadModal(e)} />
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
