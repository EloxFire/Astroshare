import React, { useEffect, useState } from 'react'
import { Image } from '../../scripts/types'
import { Link } from 'react-router-dom'
import { routes } from '../../routes'
import { FiChevronLeft } from 'react-icons/fi'
import '../../styles/pages/dashboard/addRessource.scss'
import dayjs from 'dayjs'

export default function AddImage() {

  useEffect(() => {
    document.title = 'Astroshare | Ajouter une image'
  }, [])

  const [imageToAdd, setImageToAdd] = useState<Image | null>(null);
  const [imageFile, setImageFile] = useState<any>(null);

  const handleInputChange = (key: string, value: string, parse?: boolean) => {
    if (parse) {
      const parsedValue = value.split(',').map((element) => element.trim())
      setImageToAdd({ ...imageToAdd, [key]: parsedValue } as Image)
    } else {
      setImageToAdd({ ...imageToAdd, [key]: value } as Image)
    }
  }

  const addNewImage = () => {
    try {
      // imageToAdd && uploadNewRessource(imageToAdd)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="add-ressource-details">
      <p className="h3 title"><Link to={routes.dashboard.path}><FiChevronLeft style={{ verticalAlign: 'middle' }} /></Link>Ajouter une image</p>
      <div className="add-ressource-details__content">
        <div className="add-ressource-details__content__left">
          <input type='text' className="add-ressource-details__content__left__subtitle" placeholder="Titre de l'image" value={imageToAdd?.alt} onChange={(e) => { handleInputChange('alt', e.target.value) }} />
          <input type='date' className="add-ressource-details__content__left__subtitle" value={imageToAdd?.date} onChange={(e) => { handleInputChange('date', e.target.value) }} />
          <input type="file" accept='image/*' onChange={(e) => { setImageFile(e.target.files![0]) }} />
          <button style={{ color: 'black' }} onClick={() => addNewImage()}>Ajouter l'image</button>
        </div>
        <div className="add-ressource-details__content__right">
          {imageFile && <img src={URL.createObjectURL(imageFile)} alt='' />}
        </div>
      </div>
    </div>
  )
}
