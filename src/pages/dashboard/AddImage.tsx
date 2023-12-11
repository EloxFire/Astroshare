import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../../routes'
import { FiChevronLeft } from 'react-icons/fi'
import dayjs from 'dayjs'
import '../../styles/pages/dashboard/addImage.scss'
import { imageProperties } from '../../scripts/helpers/helpers'
import Alert from '../../components/Alert'
import { uploadNewImage } from '../../scripts/helpers/api/gallery'

export default function AddImage() {

  useEffect(() => {
    document.title = 'Astroshare | Ajouter une image'
  }, [])

  const [imageTitle, setImageTitle] = useState<string>("")
  const [imageDate, setImageDate] = useState<string>(dayjs().format("MM-DD-YYYY"))
  const [imageFile, setImageFile] = useState<any>(null);
  const [additionnalProperty, setAdditionnalProperty] = useState<string>("")
  const [additionnalPropertyValue, setAdditionnalPropertyValue] = useState<string>("")
  const [optionnalProperties, setOptionnalProperties] = useState<any>({})
  const [uploading, setUploading] = useState<boolean>(false)

  const addNewImage = async () => {
    if (imageFile === null || imageTitle === '') {
      console.log("Missing required fields");
      return;
    }

    const imageToAdd = {
      file: imageFile,
      alt: imageTitle,
      date: imageDate,
      uploadedAt: new Date(),
      ...optionnalProperties
    }

    try {
      setUploading(true)
      await uploadNewImage(imageToAdd)
      setUploading(false)
      setImageDate(dayjs().format("DD-MM-YYYY"))
      setImageFile(null)
      setImageTitle("")
      setAdditionnalPropertyValue("")
      setAdditionnalProperty("")
      setOptionnalProperties({})
    } catch (error) {
      console.log(error)
    }
  }

  const appendNewProperty = (key: string, value: string | number) => {
    if (optionnalProperties[key] !== undefined && value === "") {
      const temp = { ...optionnalProperties }
      delete temp[key]
      setOptionnalProperties(temp)
    }

    key.includes('.') ? setOptionnalProperties({ ...optionnalProperties, [key.split('.')[0]]: { ...optionnalProperties[key.split('.')[0]], [key.split('.')[1]]: value } }) : setOptionnalProperties({ ...optionnalProperties, [key]: value })
    setAdditionnalProperty("")
    setAdditionnalPropertyValue("")
  }

  return (
    <div className="dashboard-add-image">
      {/* <Alert type='error' message='Test alert plutot longue pour voir le comportement avec un lmessage tres long ' /> */}
      <p className="h3 title"><Link to={routes.dashboard.path}><FiChevronLeft style={{ verticalAlign: 'middle' }} /></Link>Ajouter une image</p>
      <div className="dashboard-add-image__content">
        <div className="left">
          <input type='text' className="custom-input" style={{ marginBottom: '20px' }} placeholder="Titre de l'image" value={imageTitle} onChange={(e) => { setImageTitle(e.target.value) }} />
          <input type='text' className="custom-input" style={{ marginBottom: '20px' }} placeholder="Date de l'image" value={imageDate} onChange={(e) => { setImageDate(e.target.value) }} />
          <div className="additionnal-property">
            <p className="title">Ajouter une propriété optionnelle</p>
            <select disabled={uploading} className="custom-select" value={additionnalProperty} onChange={(e) => setAdditionnalProperty(e.target.value)}>
              <option value="">Selectionner une option</option>
              {
                Object.keys(imageProperties).map((key, index) => {
                  return (key !== "cameraSettings" && key !== "scopeSettings" && key !== "processingSettings" && key !== 'file' && key !== 'alt' && key !== 'date') &&
                    <option key={index} value={key}>{key}</option>
                })
              }
              {
                Object.keys(imageProperties).map((key, subIndex) => {
                  return (key === "cameraSettings" || key === "scopeSettings" || key === "processingSettings") &&
                    Object.keys(imageProperties[key]).map((subKey, subIndex) => {
                      return <option key={subIndex} value={`${key}.${subKey}`}>{key} - {subKey}</option>
                    })
                })
              }
            </select>
            <div className="property-input-container">
              <input type='text' className="custom-input" style={{ marginBottom: '0px' }} placeholder="Valeur" value={additionnalPropertyValue} onChange={(e) => { setAdditionnalPropertyValue(e.target.value) }} />
              <button disabled={uploading} onClick={() => appendNewProperty(additionnalProperty, additionnalPropertyValue)}>{!uploading ? "Ajouter la propriété" : <div className="loader"></div>}</button>
            </div>
            <div className="added-properties">
              <small>Propriétés supplémentaires : <br /></small>
              <small>
                {
                  JSON.stringify(optionnalProperties)
                }
              </small>
            </div>
          </div>
          <button disabled={uploading} className="submit-button" onClick={() => addNewImage()}>{!uploading ? "Ajouter l'image" : <div className="loader"></div>}</button>
        </div>
        <div className="right">
          <label htmlFor="image-file" className="drop-container" id="dropcontainer">
            <span className="drop-title">Sélectionnez un fichier</span>
            <input type="file" id="image-file" accept="image/*" onChange={(e) => { setImageFile(e.target.files![0]); if (imageTitle === "") { setImageTitle(e.target.files![0].name) } }} required />
            {imageFile && <img className="image" src={URL.createObjectURL(imageFile)} alt='' />}
          </label>
        </div>
      </div>
    </div>
  )
}
