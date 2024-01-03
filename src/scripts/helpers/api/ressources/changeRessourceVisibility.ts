import { getFirestore, collection, updateDoc, doc } from "firebase/firestore";
import { dbCollections } from "../../constants";

export const changeRessourceVisibility = async (ressource_ref: string, value: boolean) => {
  const db = getFirestore();

  try {
    // console.log("Updating ressource " + ressource_ref + " visibility");

    const ressourcesRef = collection(db, dbCollections.ressources);
    const docRef = await doc(ressourcesRef, ressource_ref);

    await updateDoc(docRef, {
      visibility: value
    });
    // console.log(`${ressource_ref} document updated successfully !`);
  } catch (error) {
    console.error("Error updating document:", error);
  }
}