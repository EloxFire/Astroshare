import { collection, getDocs, getFirestore, query, where, doc, setDoc } from "firebase/firestore";
import { uuid } from "uuidv4";
import { Ressource } from "../../types";

// Get a ressource by its slug
export const getRessource = async (ressource_slug: string) => {
  const db = getFirestore();
  const ressourcesRef = collection(db, "Ressources");
  const ressourceQuery = query(ressourcesRef, where("slug", "==", ressource_slug));
  const ressource = await getDocs(ressourceQuery)
  return ressource.docs[0].data();
}

export const uploadNewRessource = async (ressource: Ressource) => {
  const db = getFirestore();

  try {
    await setDoc(doc(db, "Ressources", uuid()), ressource);
  } catch (error) {
    console.log(error);
  }
}