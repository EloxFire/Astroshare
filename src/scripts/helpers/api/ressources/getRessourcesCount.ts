import { getFirestore, collection, getDocs } from "firebase/firestore";
import { dbCollections } from "../../constants";

// Get Ressources collection documents count
export const getRessourcesCount = async () => {
  const db = getFirestore();
  const ressourcesRef = collection(db, dbCollections.ressources);
  const ressources = await getDocs(ressourcesRef);
  return ressources.size;
}