import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { dbCollections } from "../../constants";

// Get a ressource by its slug
export const getRessourceByCategorySlug = async (category_slug: string) => {
  const db = getFirestore();
  const ressourcesRef = collection(db, dbCollections.ressources);
  const ressourceQuery = query(ressourcesRef, where("category", "==", category_slug));
  const ressource = await getDocs(ressourceQuery)
  return ressource.docs[0].data();
}