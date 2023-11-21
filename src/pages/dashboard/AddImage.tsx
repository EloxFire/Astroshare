import React, { useEffect, useState } from 'react'
import { Image } from '../../scripts/types'
import { Link } from 'react-router-dom'
import { routes } from '../../routes'
import { FiChevronLeft } from 'react-icons/fi'
import { uploadNewImage } from '../../scripts/helpers/api/gallery'
import dayjs, { Dayjs } from 'dayjs'
import '../../styles/pages/dashboard/addRessource.scss'

export default function AddImage() {

  useEffect(() => {
    document.title = 'Astroshare | Ajouter une image'
  }, [])

  const [imageTitle, setImageTitle] = useState<string | undefined>()
  const [imageDate, setImageDate] = useState<Dayjs | undefined>()
  const [imageResolution, setImageResolution] = useState<string | undefined>()
  const [imageFormat, setImageFormat] = useState<string | undefined>()
  const [imageTags, setImageTags] = useState<string[] | undefined>([])
  const [imageCameraName, setImageCameraName] = useState<string | undefined>()
  const [imageCameraIso, setImageCameraIso] = useState<number | undefined>()
  const [imageCameraShutterSpeed, setImageCameraShutterSpeed] = useState<string | undefined>()
  const [imageCameraAperture, setImageCameraAperture] = useState<string | undefined>()
  const [imageCameraFps, setImageCameraFps] = useState<number | undefined>()
  const [imageCameraFocal, setImageCameraFocal] = useState<string | undefined>()
  const [imageTelescopeName, setImageTelescopeName] = useState<string | undefined>()
  const [imageTelescopeMount, setImageTelescopeMount] = useState<string | undefined>()
  const [imageTelescopeFocal, setImageTelescopeFocal] = useState<number | undefined>()
  const [imageTelescopeDiameter, setImageTelescopeDiameter] = useState<number | undefined>()
  const [imageTelescopeFocalRatio, setImageTelescopeFocalRatio] = useState<string | undefined>()
  const [imageTelescopeEyepiece, setImageTelescopeEyepiece] = useState<string | undefined>()
  const [imageTelescopeMagnification, setImageTelescopeMagnification] = useState<number | undefined>()
  const [imageTelescopeBarlow, setImageTelescopeBarlow] = useState<string | undefined>()
  const [imageSoftware, setImageSoftware] = useState<string | undefined>()
  const [imageStacking, setImageStacking] = useState<string | undefined>()
  const [imageStackingSoftware, setImageStackingSoftware] = useState<string | undefined>()
  const [imageStackingImages, setImageStackingImages] = useState<number | undefined>()
  const [imageExposurePerImage, setImageExposurePerImage] = useState<string | undefined>()
  const [imageTotalExposure, setImageTotalExposure] = useState<string | undefined>()
  const [imageFile, setImageFile] = useState<any>(null);

  const addNewImage = () => {
    if (imageFile === null || imageTitle === '' || imageTitle === undefined || imageCameraName === '' || imageCameraName === undefined) {
      return;
    }

    const imageToAdd: Image = {
      alt: imageTitle,
      date: dayjs(imageDate, 'DD-MM-YYYY'),
      resolution: imageResolution,
      fileFormat: imageFormat,
      tags: imageTags === undefined ? [] : imageTags,
      cameraSettings: {
        name: imageCameraName,
        iso: imageCameraIso,
        shutter: imageCameraShutterSpeed,
        aperture: imageCameraAperture,
        fps: imageCameraFps,
        focalLength: imageCameraFocal
      },
      scopeSettings: {
        name: imageTelescopeName,
        mount: imageTelescopeMount,
        focal: imageTelescopeFocal,
        diameter: imageTelescopeDiameter,
        focalRatio: imageTelescopeFocalRatio,
        eyePiece: imageTelescopeEyepiece,
        eyePieceMagnification: imageTelescopeMagnification,
        barlow: imageTelescopeBarlow
      },
      processingSettings: {
        software: imageSoftware,
        stacking: imageStacking,
        stackingSoftware: imageStackingSoftware,
        stackingFrames: imageStackingImages,
        stackingTime: imageExposurePerImage,
        stackingTimeTotal: imageTotalExposure
      },
      file: imageFile
    }
    try {
      imageToAdd && uploadNewImage(imageToAdd)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="add-ressource-details">
      <p className="h3 title"><Link to={routes.dashboard.path}><FiChevronLeft style={{ verticalAlign: 'middle' }} /></Link>Ajouter une image</p>
      <div className="add-ressource-details__content">
        <div className="add-ressource-details__content__left">
          <input type='text' className="add-ressource-details__content__left__subtitle" style={{ marginBottom: '20px' }} placeholder="Titre de l'image" value={imageTitle} onChange={(e) => { setImageTitle(e.target.value) }} />
          <input type='text' className="add-ressource-details__content__left__subtitle" style={{ marginBottom: '20px' }} placeholder="Date de l'image (DD-MM-YYYY)" onChange={(e) => { setImageDate(dayjs(e.target.value)) }} />
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
        </div>
      </div>
    </div>
  )
}
