import { collection, deleteDoc, doc, getFirestore } from "firebase/firestore"
import { dbCollections } from "../../constants"

export const deleteCategory = async (category_ref: string) => {
  const db = getFirestore()

  if (!category_ref) return console.error("Error deleting ressource: ressource_ref is undefined");

  try {
    console.log("Deleting ressource " + category_ref);

    // Delete ressource document
    const ressourcesRef = collection(db, dbCollections.categories);
    const docRef = await doc(ressourcesRef, category_ref);
    await deleteDoc(docRef)
    console.log("Category document deleted successfully !");

  } catch (error) {
    console.error("Error deleting category:", error);
  }
}