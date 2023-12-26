import { collection, getDocs, getFirestore } from "firebase/firestore";
import { dbCollections } from "../../constants";

// Get Gallery collection documents count
export const getGalleryCount = async () => {
  const db = getFirestore();
  const galleryRef = collection(db, dbCollections.gallery);
  const gallery = await getDocs(galleryRef);
  return gallery.size;
}