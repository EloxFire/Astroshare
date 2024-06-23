import { collection, deleteDoc, doc, getFirestore } from "firebase/firestore"
import { dbCollections, dbStorageNamespaces } from "../../constants"
import { deleteObject, getStorage, ref } from "firebase/storage";

export const deleteImage = async (image_ref: string, image_slug: string) => {
  const db = getFirestore()
  const storage = getStorage();

  if (!image_ref || !image_slug) return console.error("Error deleting image: missing parameter");

  try {
    console.log("Deleting category " + image_ref);

    // Delete ressource document
    const imagesRef = collection(db, dbCollections.gallery);
    const docRef = await doc(imagesRef, image_ref);

    // Delete image in storage
    const storageRef = ref(storage, `${dbStorageNamespaces.gallery}/${image_slug}`);
    await deleteObject(storageRef)
    console.log("Image file deleted successfully !");
    

    await deleteDoc(docRef)
    console.log("Image document deleted successfully !");



  } catch (error) {
    console.error("Error deleting image:", error);
  }
}