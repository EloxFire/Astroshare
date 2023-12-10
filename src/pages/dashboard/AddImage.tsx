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
  const [imageDate, setImageDate] = useState<string>(dayjs().format("DD-MM-YYYY"))
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
      ...optionnalProperties
    }

    try {
      setUploading(true)
      await uploadNewImage(imageToAdd)
      setUploading(false)
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
              <button disabled={uploading} onClick={() => appendNewProperty(additionnalProperty, additionnalPropertyValue)}>Ajouter la propriété</button>
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
        {/* <div className="add-ressource-details__content__left">
          <input type='text' className="add-ressource-details__content__left__subtitle" style={{ marginBottom: '20px' }} placeholder="Titre de l'image" value={imageTitle} onChange={(e) => { setImageTitle(e.target.value) }} />
          <input type='text' className="add-ressource-details__content__left__subtitle" style={{ marginBottom: '20px' }} placeholder="Date de l'image (DD-MM-YYYY)" onChange={(e) => { setImageDate(e.target.value) }} />
          <input type='text' className="add-ressource-details__content__left__subtitle" style={{ marginBottom: '20px' }} placeholder="Resolution (1920x1080)" onChange={(e) => { setImageResolution(e.target.value) }} />
          <input type='text' className="add-ressource-details__content__left__subtitle" style={{ marginBottom: '20px' }} placeholder="Format (png, pdf, etc...)" onChange={(e) => { setImageFormat(e.target.value) }} />
          <input type='text' className="add-ressource-details__content__left__subtitle" style={{ marginBottom: '20px' }} placeholder="Tags (séparés d'une virgule sans espaces)" onChange={(e) => { setImageTags(e.target.value.split(',')) }} />
          <input type='text' className="add-ressource-details__content__left__subtitle" style={{ marginBottom: '20px' }} placeholder="Nom de la caméra" onChange={(e) => { setImageCameraName(e.target.value) }} />
          <input type='number' className="add-ressource-details__content__left__subtitle" style={{ marginBottom: '20px' }} placeholder="ISO" onChange={(e) => { setImageCameraIso(e.target.value.includes('.') ? parseFloat(e.target.value) : parseInt(e.target.value)) }} />
          <input type='text' className="add-ressource-details__content__left__subtitle" style={{ marginBottom: '20px' }} placeholder="Shutter speed" onChange={(e) => { setImageCameraShutterSpeed(e.target.value) }} />
          <input type='text' className="add-ressource-details__content__left__subtitle" style={{ marginBottom: '20px' }} placeholder="Aperture" onChange={(e) => { setImageCameraAperture(e.target.value) }} />
          <input type='number' className="add-ressource-details__content__left__subtitle" style={{ marginBottom: '20px' }} placeholder="FPS" onChange={(e) => { setImageCameraFps(e.target.value.includes('.') ? parseFloat(e.target.value) : parseInt(e.target.value)) }} />
          <input type='text' className="add-ressource-details__content__left__subtitle" style={{ marginBottom: '20px' }} placeholder="Focale" onChange={(e) => { setImageCameraFocal(e.target.value) }} />
          <input type='text' className="add-ressource-details__content__left__subtitle" style={{ marginBottom: '20px' }} placeholder="Télescope" onChange={(e) => { setImageTelescopeName(e.target.value) }} />
          <input type='text' className="add-ressource-details__content__left__subtitle" style={{ marginBottom: '20px' }} placeholder="Monture" onChange={(e) => { setImageTelescopeMount(e.target.value) }} />
          <input type='number' className="add-ressource-details__content__left__subtitle" style={{ marginBottom: '20px' }} placeholder="Focale" onChange={(e) => { setImageTelescopeFocal(e.target.value.includes('.') ? parseFloat(e.target.value) : parseInt(e.target.value)) }} />
          <input type='number' className="add-ressource-details__content__left__subtitle" style={{ marginBottom: '20px' }} placeholder="Diametre" onChange={(e) => { setImageTelescopeDiameter(e.target.value.includes('.') ? parseFloat(e.target.value) : parseInt(e.target.value)) }} />
          <input type='text' className="add-ressource-details__content__left__subtitle" style={{ marginBottom: '20px' }} placeholder="F/d" onChange={(e) => { setImageTelescopeFocalRatio(e.target.value) }} />
          <input type='text' className="add-ressource-details__content__left__subtitle" style={{ marginBottom: '20px' }} placeholder="Oculaire" onChange={(e) => { setImageTelescopeEyepiece(e.target.value) }} />
          <input type='number' className="add-ressource-details__content__left__subtitle" style={{ marginBottom: '20px' }} placeholder="Grossissement" onChange={(e) => { setImageTelescopeMagnification(e.target.value.includes('.') ? parseFloat(e.target.value) : parseInt(e.target.value)) }} />
          <input type='text' className="add-ressource-details__content__left__subtitle" style={{ marginBottom: '20px' }} placeholder="Barlow ?" onChange={(e) => { setImageTelescopeBarlow(e.target.value) }} />
          <input type='text' className="add-ressource-details__content__left__subtitle" style={{ marginBottom: '20px' }} placeholder="Logiciel de traitement" onChange={(e) => { setImageSoftware(e.target.value) }} />
          <input type='text' className="add-ressource-details__content__left__subtitle" style={{ marginBottom: '20px' }} placeholder="Stacking ?" onChange={(e) => { setImageStacking(e.target.value) }} />
          <input type='text' className="add-ressource-details__content__left__subtitle" style={{ marginBottom: '20px' }} placeholder="Logiciel de stacking" onChange={(e) => { setImageStackingSoftware(e.target.value) }} />
          <input type='number' className="add-ressource-details__content__left__subtitle" style={{ marginBottom: '20px' }} placeholder="Nombre d'images stackées" onChange={(e) => { setImageStackingImages(e.target.value.includes('.') ? parseFloat(e.target.value) : parseInt(e.target.value)) }} />
          <input type='text' className="add-ressource-details__content__left__subtitle" style={{ marginBottom: '20px' }} placeholder="Pose / image" onChange={(e) => { setImageExposurePerImage(e.target.value) }} />
          <input type='text' className="add-ressource-details__content__left__subtitle" style={{ marginBottom: '20px' }} placeholder="Total de pose" onChange={(e) => { setImageTotalExposure(e.target.value) }} />
          <input type="file" accept='image/*' onChange={(e) => { setImageFile(e.target.files![0]) }} />
          <button style={{ color: 'black', marginTop: '20px', marginBottom: '20px' }} onClick={() => addNewImage()}>Ajouter l'image</button>
        </div>
        <div className="add-ressource-details__content__right" style={{ textAlign: 'center' }}>
          {imageFile && <img style={{ maxWidth: '90%' }} src={URL.createObjectURL(imageFile)} alt='' />}
        </div> */}
      </div>
    </div>
  )
}
