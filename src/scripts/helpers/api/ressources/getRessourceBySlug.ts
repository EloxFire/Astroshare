import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { dbCollections } from "../../constants";

// Get a ressource by its slug
export const getRessourceBySlug = async (ressource_slug: string) => {
  const db = getFirestore();
  const ressourcesRef = collection(db, dbCollections.ressources);
  const ressourceQuery = query(ressourcesRef, where("slug", "==", ressource_slug));
  const ressource = await getDocs(ressourceQuery)
  return ressource.docs[0].data();
}