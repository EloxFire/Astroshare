import { collection, deleteDoc, doc, getFirestore } from "firebase/firestore"
import { deleteObject, getStorage, ref } from "firebase/storage"
import { dbCollections, dbStorageNamespaces } from "../../constants"

export const deleteRessource = async (ressource_ref: string, ressource_slug: string) => {
  const db = getFirestore()
  const storage = getStorage()

  if (!ressource_ref) return console.error("Error deleting ressource: ressource_ref is undefined");

  try {
    console.log("Deleting ressource " + ressource_ref);

    // Delete ressource document
    const ressourcesRef = collection(db, dbCollections.ressources);
    const docRef = await doc(ressourcesRef, ressource_ref);
    await deleteDoc(docRef)
    console.log("Ressource document deleted successfully !");

    // Delete ressource files
    const storageRef = ref(storage, `${dbStorageNamespaces.ressources}/${ressource_slug}/`);
    await deleteObject(storageRef)
    console.log("Ressource files deleted successfully !");

  } catch (error) {
    console.error("Error deleting ressource:", error);
  }
}