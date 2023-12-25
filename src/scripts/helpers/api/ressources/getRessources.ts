import { getFirestore, collection, query, getDocs } from "firebase/firestore";
import { dbCollections } from "../../constants";

// Get all ressources in the collection
export const getRessources = async () => {
  const db = getFirestore();
  const ressourcesRef = collection(db, dbCollections.ressources);
  const ressourceQuery = query(ressourcesRef);
  const ressources = await getDocs(ressourceQuery)
  return ressources;
}