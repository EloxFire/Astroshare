import { useState } from 'react'
import { FiChevronLeft } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext';
import { Ressource } from '../../scripts/types/Ressource';
import DownloadModal from '../../components/DownloadModal';
import '../../styles/pages/ressources/ressourceDetails.scss'
import RessourceInfosBox from "../../components/RessourceInfosBox";

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
      <h1 className="h2 title ressource-details__left__title"><Link to={`/ressources/${ressource.category}`}><FiChevronLeft style={{ verticalAlign: 'middle' }} /></Link>{ressource.name}</h1>
      <RessourceInfosBox onlyDownload ressource={ressource} onFileSelect={(e) => setSelectedPackage(e)} onClickDownload={(e) => setDownloadModal(e)} />
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
