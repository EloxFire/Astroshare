import { getFirestore, collection, updateDoc, doc } from "firebase/firestore";
import { dbCollections } from "../../constants";

export const changeCategoryVisibility = async (category_ref: string, value: boolean) => {
  const db = getFirestore();

  try {

    const categoriesRef = collection(db, dbCollections.categories);
    const docRef = await doc(categoriesRef, category_ref);

    await updateDoc(docRef, {
      visibility: value
    });
  } catch (error) {
    console.error("Error updating document:", error);
  }
}