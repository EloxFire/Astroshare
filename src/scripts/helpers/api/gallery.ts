import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

// Get an image in the gallery bi its ID
export const getImageById = async (image_id: string) => {
  const db = getFirestore();
  const ressourcesRef = collection(db, "Gallery");
  const ressourceQuery = query(ressourcesRef, where("id", "==", image_id));
  const ressource = await getDocs(ressourceQuery)
  return ressource.docs[0].data();
}

// Get all images in the gallery
export const getImages = async () => {
  const db = getFirestore();
  const ressourcesRef = collection(db, "Gallery");
  const ressourceQuery = query(ressourcesRef);
  const ressources = await getDocs(ressourceQuery)
  return ressources;
}