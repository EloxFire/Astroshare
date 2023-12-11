import React, { useEffect, useState } from 'react'
import { Ressource } from '../../scripts/types'
import { ressourceProperties } from '../../scripts/helpers/helpers'
import { uploadNewRessource } from '../../scripts/helpers/api/ressources'
import Chip from '../../components/Chip'
import '../../styles/pages/dashboard/addRessource.scss'
import { Link } from 'react-router-dom'
import { routes } from '../../routes'
import { FiChevronLeft } from 'react-icons/fi'

export default function AddRessource() {

  useEffect(() => {
    document.title = 'Astroshare | Ajouter une ressource'
  }, [])

  const [ressourceName, setRessourceName] = useState<string>("")
  const [ressourceSlug, setRessourceSlug] = useState<string>("")
  const [ressourceCategory, setRessourceCategory] = useState<string>("")
  const [ressourceDownloadNames, setRessourceDownloadNames] = useState<string>("")
  const [ressourceDescription, setRessourceDescription] = useState<string>("")
  const [ressourceLevel, setRessourceLevel] = useState<string>("")
  const [ressourceFiles, setRessourceFiles] = useState<any[]>([])

  const [selectedAdditionalProperty, setSelectedAdditionalProperty] = useState<string>("")
  const [additionnalPropertyValue, setAdditionnalPropertyValue] = useState<string>("")
  const [ressourceOptionnalProperties, setRessourceOptionnalProperties] = useState<any>({})
  const [uploading, setUploading] = useState<boolean>(false)

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

  const handleFiles = (files: any) => {
    const temp = [...ressourceFiles]
    for (let i = 0; i < files.length; i++) {
      temp.push(files[i])
    }
    setRessourceFiles(temp)
  }

  const deleteFile = (index: number) => {
    const temp = [...ressourceFiles]
    temp.splice(index, 1)
    setRessourceFiles(temp)
  }

  const addNewRessource = async () => {
    if (ressourceName === "" || ressourceSlug === "" || ressourceCategory === "" || ressourceDownloadNames === "" || ressourceDescription === "" || ressourceLevel === "") {
      console.log("Missing required fields");
      return;
    }

    const ressourceToAdd: Ressource = {
      name: ressourceName,
      slug: ressourceSlug,
      category: ressourceCategory,
      downloadNames: ressourceDownloadNames,
      description: ressourceDescription,
      level: ressourceLevel,
      files: ressourceFiles,
      createdAd: new Date(),
      updatedAt: new Date(),
      ...ressourceOptionnalProperties
    }

    try {
      setUploading(true)
      await uploadNewRessource(ressourceToAdd)
      setUploading(false)
      setRessourceName("")
      setRessourceSlug("")
      setRessourceCategory("")
      setRessourceDownloadNames("")
      setRessourceDescription("")
      setRessourceLevel("")
      setRessourceFiles([])
      setRessourceOptionnalProperties({})
    } catch (error) {

    }
  }

  return (
    <div className="dashboard-add-ressource">
      {/* <Alert type='error' message='Test alert plutot longue pour voir le comportement avec un lmessage tres long ' /> */}
      <p className="h3 title"><Link to={routes.dashboard.path}><FiChevronLeft style={{ verticalAlign: 'middle' }} /></Link>Ajouter une ressource</p>
      <div className="dashboard-add-ressource__content">
        <div className="left">
          <input type='text' className="custom-input" style={{ marginBottom: '20px' }} placeholder="Nom de la ressource" value={ressourceName} onChange={(e) => { setRessourceName(e.target.value) }} />
          <input type='text' className="custom-input" style={{ marginBottom: '20px' }} placeholder="Slug de la ressource" value={ressourceSlug} onChange={(e) => { setRessourceSlug(e.target.value.replaceAll(' ', '-').trim()) }} />
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
          <button disabled={uploading} className="submit-button" onClick={() => addNewRessource()}>{!uploading ? "Ajouter la ressource" : <div className="loader"></div>}</button>
        </div>
        <div className="right">
          <div className="drop-container">
            <span className="drop-title">Sélectionnez un ou plusieurs fichiers</span>
            <input type="file" accept="*.pdf, *.md, *.mdx" multiple onChange={(e) => { handleFiles(e.target.files); if (ressourceName === "") { setRessourceName(e.target.files![0].name) } }} required />
            <div className="files-preview">
              {
                ressourceFiles &&
                ressourceFiles.map((file, fileIndex) => {
                  return (
                    <div className="file">
                      <embed height="820px" width="350px" key={fileIndex} className="image" src={URL.createObjectURL(file)} title={file.name} />
                      <small className="file-name">{file.name.substr(0, 30)}</small>
                      <button onClick={() => deleteFile(fileIndex)}>X</button>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
