import { getFirestore, collection, query, getDocs } from "firebase/firestore";
import { dbCollections } from "../../constants";

// Get all images in the gallery
export const getImages = async () => {
  const db = getFirestore();
  const galleryRef = collection(db, dbCollections.gallery);
  const ressourceQuery = query(galleryRef);
  const gallery = await getDocs(ressourceQuery)
  return gallery;
}