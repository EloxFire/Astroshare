import { collection, getDocs, getFirestore, query, where, addDoc, updateDoc } from "firebase/firestore";
import { Ressource } from "../../types";

// Get Ressources collection documents count
export const getRessourcesCount = async () => {
  const db = getFirestore();
  const ressourcesRef = collection(db, "Ressources");
  const ressources = await getDocs(ressourcesRef);
  return ressources.size;
}

// Get a ressource by its slug
export const getRessource = async (ressource_slug: string) => {
  const db = getFirestore();
  const ressourcesRef = collection(db, "Ressources");
  const ressourceQuery = query(ressourcesRef, where("slug", "==", ressource_slug));
  const ressource = await getDocs(ressourceQuery)
  return ressource.docs[0].data();
}

export const uploadNewRessource = async (ressource: Ressource) => {
  console.log("Adding new ressource");

  try {
    const db = getFirestore();
    const ressourcesRef = collection(db, "Ressources");
    const docRef = await addDoc(ressourcesRef, ressource);
    updateDoc(docRef, {
      ref: docRef.id
    });
    console.log("Document written with ID : ", docRef.id);
  } catch (error) {
    console.error("Error adding document:", error);
  }
}