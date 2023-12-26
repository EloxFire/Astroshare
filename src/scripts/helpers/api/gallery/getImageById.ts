import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { dbCollections } from "../../constants";

// Get an image in the gallery bi its ID
export const getImageById = async (image_id: string) => {
  const db = getFirestore();
  const galleryRef = collection(db, dbCollections.gallery);
  const ressourceQuery = query(galleryRef, where("id", "==", image_id));
  const gallery = await getDocs(ressourceQuery)
  return gallery.docs[0].data();
}