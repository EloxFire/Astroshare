import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiChevronLeft } from 'react-icons/fi'
import { uploadNewCategory } from '../../../scripts/helpers/api/categories/uploadNewCategory'
import { routes } from '../../../routes'
import '../../../styles/pages/dashboard/categories/addCategory.scss'

export default function AddCategory() {

  useEffect(() => {
    document.title = 'Astroshare | Ajouter une categorie'
  }, [])

  const [categoryName, setCategoryName] = useState<string>("")
  const [categorySlug, setCategorySlug] = useState<string>("")
  const [categoryDescription, setCategoryDescription] = useState<string>("")
  const [categoryLongDescription, setCategoryLongDescription] = useState<string>("");
  const [categoryIcon, setCategoryIcon] = useState<any>(null);
  const [categoryImage, setCategoryImage] = useState<any>(null);
  const [uploading, setUploading] = useState<boolean>(false)

  const addNewCategory = async () => {
    if (categoryName === null || categoryDescription === '' || categorySlug === '' || categoryLongDescription === '') {
      console.log("Missing required fields");
      return;
    }

    const categoryToAdd = {
      name: categoryName,
      slug: categorySlug,
      description: categoryDescription,
      longDescription: categoryLongDescription,
      icon: categoryIcon,
      image: categoryImage,
      uploadedAt: new Date(),
      createdAt: new Date(),
      visibility: false,
    }

    try {
      setUploading(true)
      await uploadNewCategory(categoryToAdd)
      setCategoryName("")
      setCategorySlug("")
      setCategoryDescription("")
      setCategoryLongDescription("")
      setCategoryIcon(null)
      setCategoryImage(null)
      setUploading(false)
    } catch (error) {
      console.log(error)
    }
  }

  const deleteIcon = () => {
    setCategoryIcon(null)
  }

  const deleteImage = () => {
    setCategoryImage(null)
  }

  return (
    <div className="dashboard-add-image">
      {/* <Alert type='error' message='Test alert plutot longue pour voir le comportement avec un lmessage tres long ' /> */}
      <p className="h3 title"><Link to={routes.dashboard.main.path}><FiChevronLeft style={{ verticalAlign: 'middle' }} /></Link>Ajouter une catégorie</p>
      <div className="dashboard-add-image__content">
        <div className="left">
          <input type='text' className="custom-input" style={{ marginBottom: '20px' }} placeholder="Titre de la catégorie" value={categoryName} onChange={(e) => { setCategoryName(e.target.value) }} />
          <input type='text' className="custom-input" style={{ marginBottom: '20px' }} placeholder="Slug de la catégorie" value={categorySlug} onChange={(e) => { setCategorySlug(e.target.value.toLowerCase().replaceAll(' ', '-').trim()) }} />
          <input type='text' className="custom-input" style={{ marginBottom: '20px' }} placeholder="Description courte de la catégorie" value={categoryDescription} onChange={(e) => { setCategoryDescription(e.target.value) }} />
          <input type='text' className="custom-input" style={{ marginBottom: '20px' }} placeholder="Description longue de la catégorie" value={categoryLongDescription} onChange={(e) => { setCategoryLongDescription(e.target.value) }} />
          <button disabled={uploading} className="submit-button" onClick={() => addNewCategory()}>{!uploading ? "Ajouter la catégorie" : <div className="loader"></div>}</button>
          {
            uploading && (
              <div style={{ marginTop: '3vh', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div className="loader"></div>
                <p style={{ margin: 0 }}>Chargement</p>
              </div>
            )
          }
        </div>
        <div className="right">
          <div className="drop-container">
            <span className="drop-title">Sélectionnez un fichier (optionnel) (200x200 ideal)</span>
            <input type="file" accept="image/*" onChange={(e) => setCategoryIcon(e.target.files![0])} />
            {categoryIcon && (
              <div className="image-preview">
                <img className="image" src={URL.createObjectURL(categoryIcon)} alt='' />
                <button onClick={() => deleteIcon()}>X</button>
              </div>
            )}
          </div>
          <div className="drop-container" style={{ marginTop: "3vh" }}>
            <span className="drop-title">Sélectionnez une image de fond (optionnel)</span>
            <input type="file" accept="image/*" onChange={(e) => setCategoryImage(e.target.files![0])} />
            {categoryImage && (
              <div className="image-preview">
                <img className="image" src={URL.createObjectURL(categoryImage)} alt='' />
                <button onClick={() => deleteImage()}>X</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
