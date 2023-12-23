import { getFirestore, collection, addDoc, updateDoc } from "firebase/firestore";
import { dbCollections } from "../../constants";
import { RessourceCategory } from "../../../types";

export const uploadNewCategory = async (category: RessourceCategory) => {
  console.log("Adding new ressource category");

  try {
    const db = getFirestore();
    const categoriesRef = collection(db, dbCollections.categories);
    const docRef = await addDoc(categoriesRef, category);
    updateDoc(docRef, {
      ref: docRef.id
    });
    console.log("Document written with ID : ", docRef.id);
  } catch (error) {
    console.error("Error adding catgeory document:", error);
  }
}