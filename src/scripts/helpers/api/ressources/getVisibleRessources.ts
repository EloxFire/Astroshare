import { getFirestore, collection, query, getDocs, where } from "firebase/firestore";
import { dbCollections } from "../../constants";

// Get all ressources in the collection
export const getVisibleRessources = async () => {
  const db = getFirestore();
  const ressourcesRef = collection(db, dbCollections.ressources);
  const ressourceQuery = query(ressourcesRef, where("visibility", "==", true));
  const ressources = await getDocs(ressourceQuery)
  return ressources;
}