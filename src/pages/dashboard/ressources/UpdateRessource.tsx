import { useEffect, useState } from 'react'
import { ressourceProperties } from '../../../scripts/helpers/helpers'
import { Link, useParams } from 'react-router-dom'
import { routes } from '../../../routes'
import { FiChevronLeft } from 'react-icons/fi'
import { useCategories } from '../../../contexts/CategoriesContext'
import { getRessourceBySlug } from '../../../scripts/helpers/api/ressources/getRessourceBySlug'
import { updateExistingRessource } from '../../../scripts/helpers/api/ressources/updateExistingRessource'
import { Ressource } from '../../../scripts/types/Ressource'
import { RessourceCategory } from '../../../scripts/types/RessourceCategory'
import Alert from '../../../components/Alert'
import '../../../styles/pages/dashboard/addRessource.scss'

export default function UpdateRessource() {

  const { categories } = useCategories();
  const { ressource_slug } = useParams();

  const [ressourceLoading, setRessourceLoading] = useState<boolean>(true)
  const [currentRessource, setCurrentRessource] = useState<Ressource>()

  const [initialRessourceSlug, setInitialRessourceSlug] = useState<string>("")
  const [ressourceName, setRessourceName] = useState<string>("")
  const [ressourceSlug, setRessourceSlug] = useState<string>("")
  const [ressourceCategory, setRessourceCategory] = useState<string>("")
  const [ressourceDownloadNames, setRessourceDownloadNames] = useState<string>("")
  const [ressourceDescription, setRessourceDescription] = useState<string>("")
  const [ressourceLevel, setRessourceLevel] = useState<string>("")
  const [ressourceType, setRessourceType] = useState<string>("")
  const [ressourceFiles, setRessourceFiles] = useState<any[]>([])
  const [ressourceFilePreview, setRessourceFilePreview] = useState<any>(null)

  const [selectedAdditionalProperty, setSelectedAdditionalProperty] = useState<string>("")
  const [additionnalPropertyValue, setAdditionnalPropertyValue] = useState<string>("")
  const [ressourceOptionnalProperties, setRessourceOptionnalProperties] = useState<any>({})
  const [uploading, setUploading] = useState<boolean>(false)
  const [error, setError] = useState<string>("")

  useEffect(() => {
    document.title = 'Astroshare | Mettre a jour une ressource'
  }, [])

  useEffect(() => {
    const fetchRessource = async () => {
      if (ressource_slug !== undefined) {
        const r = await getRessourceBySlug(ressource_slug)

        if (r.docs.length === 0) {
          console.log("Ressource not found")
          window.location.href = routes.dashboard.ressources.list.path
        }

        setCurrentRessource(r.docs[0].data() as Ressource)
        setRessourceName(r.docs[0].data().name)
        setRessourceSlug(r.docs[0].data().slug)
        setRessourceCategory(r.docs[0].data().category)
        setRessourceDownloadNames(r.docs[0].data().downloadNames.join(','))
        setRessourceDescription(r.docs[0].data().description)
        setRessourceLevel(r.docs[0].data().level)
        setRessourceType(r.docs[0].data().type)
        setRessourceOptionnalProperties(r.docs[0].data())
        setRessourceLoading(false)
        setInitialRessourceSlug(r.docs[0].data().slug)
      }
    }

    fetchRessource()
  }, [ressource_slug])

  const appendNewProperty = (key: string, value: string | number) => {
    if (ressourceOptionnalProperties[key] !== undefined && value === "") {
      const temp = { ...ressourceOptionnalProperties }
      delete temp[key]
      setRessourceOptionnalProperties(temp)
    }

    if (key !== "" && value !== "") {
      setRessourceOptionnalProperties({ ...ressourceOptionnalProperties, [key]: value })
      setSelectedAdditionalProperty("")
      setAdditionnalPropertyValue("")
    }
  }

  const handleFiles = (files: any, type: 'ressourceFile' | 'ressourcePreview') => {
    if (type === 'ressourceFile') {
      const temp = [...ressourceFiles]
      for (let i = 0; i < files.length; i++) {
        temp.push(files[i])
      }
      setRessourceFiles(temp)
    } else {

      setRessourceFilePreview(files[0])
    }
  }

  const deleteFile = (index: number, type: 'ressourceFile' | 'ressourcePreview') => {
    if (type === 'ressourceFile') {
      const temp = [...ressourceFiles]
      temp.splice(index, 1)
      setRessourceFiles(temp)
    } else {
      const temp = [...ressourceFilePreview]
      temp.splice(index, 1)
      setRessourceFilePreview(temp)
    }
  }

  const updateRessource = async () => {
    if (ressourceName === "" || ressourceSlug === "" || ressourceCategory === "" || ressourceDownloadNames === "" || ressourceDescription === "" || ressourceLevel === "" || ressourceType === "") {
      console.log("Missing required fields");
      setError("Veuillez remplir tous les champs obligatoires")
      setTimeout(() => {
        setError("")
      }, 3000)
      return;
    }

    if (ressourceFiles.length > 0 && (ressourceDownloadNames.split(',').length !== ressourceFiles.length)) {
      console.log("Le nombre de fichiers ne correspond pas au nombre de noms de téléchargement");
      setError("Le nombre de fichiers ne correspond pas au nombre de noms de téléchargement")
      setTimeout(() => {
        setError("")
      }, 3000)
      return;
    }

    let ressourceToUpdate: Ressource = {
      name: ressourceName,
      slug: ressourceSlug,
      category: ressourceCategory,
      downloadNames: ressourceDownloadNames.split(','),
      description: ressourceDescription,
      level: ressourceLevel,
      type: ressourceType,
      totalDownloads: currentRessource?.totalDownloads,
      visibility: currentRessource?.visibility!,
      updatedAt: new Date(),
    }

    try {
      setUploading(true)
      await updateExistingRessource(initialRessourceSlug, ressourceToUpdate)
      setUploading(false)
    } catch (error) {

    }
  }

  return (
    <div className="dashboard-add-ressource">
      {
        error !== "" &&
        <Alert type='error' message={error} />
      }
      <p className="h3 title"><Link to={routes.dashboard.ressources.list.path}><FiChevronLeft style={{ verticalAlign: 'middle' }} /></Link>Modifier une ressource</p>
      <div className="dashboard-add-ressource__content">
        <div className="left">
          <div className="types-container">
            <p className="types-title">Type de ressource</p>
            <button className={`type-selector ${ressourceType === "pdf" && 'active'}`} onClick={() => setRessourceType('pdf')}>PDF</button>
            <button className={`type-selector ${ressourceType === "online" && 'active'}`} onClick={() => setRessourceType('online')}>Online</button>
          </div>
          <input type='text' className="custom-input" style={{ marginBottom: '20px' }} placeholder="Nom de la ressource" value={ressourceName} onChange={(e) => { setRessourceName(e.target.value) }} />
          <input type='text' className="custom-input" style={{ marginBottom: '20px' }} placeholder="Slug de la ressource" value={ressourceSlug} onChange={(e) => { setRessourceSlug(e.target.value.replaceAll(' ', '-').trim()) }} />
          <select disabled={uploading} className="custom-select" value={ressourceCategory} onChange={(e) => setRessourceCategory(e.target.value)}>
            <option value="">Catégorie de la ressource</option>
            {
              categories.map((category: RessourceCategory, index: number) => {
                return (
                  <option key={index} value={category.slug}>{category.name}</option>
                )
              })
            }
          </select>
          {/* <input type="text" className="custom-input" style={{ marginBottom: '20px' }} placeholder='Catégorie de la ressource' value={ressourceCategory} onChange={(e) => { setRessourceCategory(e.target.value) }} /> */}
          <input type="text" className="custom-input" style={{ marginBottom: '20px' }} placeholder='Nom des fichiers de téléchargement' value={ressourceDownloadNames} onChange={(e) => { setRessourceDownloadNames(e.target.value) }} />
          <input type="text" className="custom-input" style={{ marginBottom: '20px' }} placeholder='Niveau de la ressource' value={ressourceLevel} onChange={(e) => { setRessourceLevel(e.target.value) }} />
          <textarea className="custom-input" style={{ marginBottom: '20px' }} placeholder='Description de la ressource' cols={30} rows={5} value={ressourceDescription} onChange={(e) => { setRessourceDescription(e.target.value) }} />

          <div className="additionnal-property">
            <p className="title">Ajouter une propriété optionnelle</p>
            <select disabled={uploading} className="custom-select" value={selectedAdditionalProperty} onChange={(e) => setSelectedAdditionalProperty(e.target.value)}>
              <option value="">Selectionner une option</option>
              {
                Object.keys(ressourceProperties).map((key, index) => {
                  return (key !== "cameraSettings" && key !== "scopeSettings" && key !== "processingSettings" && key !== 'file' && key !== 'alt' && key !== 'date') &&
                    <option key={index} value={key}>{key}</option>
                })
              }
            </select>
            <div className="property-input-container">
              <input type='text' className="custom-input" style={{ marginBottom: '0px' }} placeholder="Valeur" value={additionnalPropertyValue} onChange={(e) => { setAdditionnalPropertyValue(e.target.value) }} />
              <button disabled={uploading} onClick={() => appendNewProperty(selectedAdditionalProperty, additionnalPropertyValue)}>{!uploading ? "Ajouter la propriété" : <div className="loader"></div>}</button>
            </div>
            <div className="added-properties">
              <small>Propriétés supplémentaires : <br /></small>
              <small>
                {
                  JSON.stringify(ressourceOptionnalProperties)
                }
              </small>
            </div>
          </div>
          <button disabled={uploading} className="submit-button" onClick={() => updateRessource()}>{!uploading ? "Mettre à jour la ressource" : <div className="loader"></div>}</button>
        </div>
        <div className="right">
          <div className="drop-container">
            <span className="drop-title">Sélectionnez un ou plusieurs fichiers</span>
            <input type="file" accept="*.pdf, *.md, *.mdx" multiple onChange={(e) => { handleFiles(e.target.files, 'ressourceFile'); if (ressourceName === "") { setRessourceName(e.target.files![0].name) } }} required />
            <div className="files-preview">
              {
                ressourceFiles &&
                ressourceFiles.map((file, fileIndex) => {
                  return (
                    <div className="file">
                      <embed height="820px" width="350px" key={fileIndex} className="image" src={URL.createObjectURL(file)} title={file.name} />
                      <small className="file-name">{file.name.substr(0, 30)}</small>
                      <button onClick={() => deleteFile(fileIndex, 'ressourceFile')}>X</button>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className="drop-container" style={{ marginTop: '20px' }}>
            <span className="drop-title">Sélectionnez une image d'illustration</span>
            <input type="file" accept="*.png, *.jpg, *.jpeg" onChange={(e) => { handleFiles(e.target.files, 'ressourcePreview'); if (ressourceName === "") { setRessourceName(e.target.files![0].name) } }} required />
            <div className="files-preview">
              {
                ressourceFilePreview &&
                <div className="file">
                  <embed height="820px" width="350px" className="image" src={URL.createObjectURL(ressourceFilePreview)} title={ressourceFilePreview.name} />
                  <small className="file-name">{ressourceFilePreview.name.substr(0, 30)}</small>
                  <button onClick={() => deleteFile(0, 'ressourcePreview')}>X</button>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
