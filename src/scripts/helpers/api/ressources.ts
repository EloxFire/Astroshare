import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

export const getRessource = async (ressource_slug: string) => {
  const db = getFirestore();
  const ressourcesRef = collection(db, "Ressources");
  const ressourceQuery = query(ressourcesRef, where("slug", "==", ressource_slug));

  getDocs(ressourceQuery).then((response) => {
    const ressource = response.docs.map((doc, index) => {
      return doc.data();
    });
    return ressource[0];
  })
}