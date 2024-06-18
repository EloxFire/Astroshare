import { getFirestore, collection, addDoc, updateDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { dbCollections } from "../../constants";
import { RessourceCategory } from "../../../types";

export const uploadNewCategory = async (category: RessourceCategory) => {
  const db = getFirestore();
  const storage = getStorage();
  console.log("Adding new ressource category");


  const tempCategory = category;
  const { icon, ...categoryWithoutIcon } = tempCategory;
  const { image, ...categoryToUpload } = categoryWithoutIcon;

  try {
    const categoriesRef = collection(db, dbCollections.categories);
    const docRef = await addDoc(categoriesRef, categoryToUpload);
    updateDoc(docRef, {
      ref: docRef.id
    });
    console.log("Document written with ID : ", docRef.id);

    if (category.icon) {
      try {
        const storageRef = ref(storage, `categories/${category.name}/icon-${category.name}`);

        const file = await uploadBytes(storageRef, category.icon)
        const categoryIconUrl = await getDownloadURL(file.metadata.ref!);
        console.log("Category icon uploaded to storage");
        updateDoc(docRef, {
          icon: categoryIconUrl
        })
        console.log("Category icon url added to category document:", categoryIconUrl);

      } catch (error) {
        console.error("Error uploading category icon to storage:", error);
      }
    }

    if (category.image) {
      try {
        const storageRef = ref(storage, `categories/${category.name}/image-${category.name}`);

        const file = await uploadBytes(storageRef, category.image)
        const categoryImageUrl = await getDownloadURL(file.metadata.ref!);
        console.log("Category image uploaded to storage");
        updateDoc(docRef, {
          image: categoryImageUrl
        })
        console.log("Category image url added to category document:", categoryImageUrl);

      } catch (error) {
        console.error("Error uploading category image to storage:", error);
      }
    }
  } catch (error) {
    console.error("Error adding catgeory document:", error);
  }

}