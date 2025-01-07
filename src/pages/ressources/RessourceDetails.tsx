import { useState } from 'react'
import { FiChevronLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { Ressource } from '../../scripts/types/Ressource';
import DownloadModal from '../../components/DownloadModal';
import RessourceInfosBox from "../../components/RessourceInfosBox";
import '../../styles/pages/ressources/ressourceDetails.scss'

interface RessourceDetailsProps {
  ressource: Ressource
}

export default function RessourceDetails({ ressource }: RessourceDetailsProps) {

  const [selectedPackage, setSelectedPackage] = useState<string>(ressource.files![0])
  const [downloadModal, setDownloadModal] = useState<boolean>(false)

  console.log(ressource)

  return (
    <div className="ressource-details">
      <h1 className="h2 title ressource-details__left__title"><Link to={`/ressources/${ressource.category}`}><FiChevronLeft style={{ verticalAlign: 'middle' }} /></Link>{ressource.name}</h1>
      <RessourceInfosBox onlyLive={!ressource.files} onlyDownload ressource={ressource} onFileSelect={(e) => setSelectedPackage(e)} onClickDownload={(e) => setDownloadModal(e)} />
      {
        downloadModal && ressource.files && ressource.downloadNames &&
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
