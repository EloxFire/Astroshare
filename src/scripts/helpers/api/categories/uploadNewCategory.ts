import { getFirestore, collection, addDoc, updateDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { dbCollections } from "../../constants";
import { RessourceCategory } from "../../../types";

export const uploadNewCategory = async (category: RessourceCategory) => {
  const db = getFirestore();
  const storage = getStorage();
  console.log("Adding new ressource category");

  try {
    const categoriesRef = collection(db, dbCollections.categories);
    const docRef = await addDoc(categoriesRef, category);
    updateDoc(docRef, {
      ref: docRef.id
    });
    console.log("Document written with ID : ", docRef.id);

    if (category.icon) {
      try {
        const storageRef = ref(storage, `categories/${category.name}`);

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
  } catch (error) {
    console.error("Error adding catgeory document:", error);
  }

}