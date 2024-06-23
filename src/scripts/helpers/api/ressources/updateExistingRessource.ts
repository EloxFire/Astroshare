import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { Ressource } from "../../../types/Ressource";
import { arrayUnion, collection, getDocs, getFirestore, query, updateDoc, where } from "firebase/firestore";
import { dbCollections, dbStorageNamespaces } from "../../constants";

export const updateExistingRessource = async (old_slug: string, ressource: Ressource) => {
  const storage = getStorage();
  const db = getFirestore();

  const tempRessource = ressource;
  const filesToUpload = ressource.files!;
  const filePreviewToUpload = ressource.filePreview!;
  const { files, filePreview, ...ressourceToUpload } = tempRessource;
  let oldRessourceDocRef: any = null;

  console.log("Updating ressource " + old_slug);

  // Mise a jour du document firestore
  try {
    const ressourcesRef = collection(db, dbCollections.ressources);
    const oldRessourceQuery = query(ressourcesRef, where("slug", "==", old_slug));
    const oldRessourceDocs = await getDocs(oldRessourceQuery);
    const oldRessourceDoc = oldRessourceDocs.docs[0];
    oldRessourceDocRef = oldRessourceDoc.ref;

    if (!oldRessourceDoc) {
      console.error("Ressource not found in database");
      return;
    }


    console.log("Found ressource in database : ", oldRessourceDocRef);

    updateDoc(oldRessourceDocRef, {
      ...ressourceToUpload,
      updatesCount: ressource.updatesCount! + 1,
      updatedAt: new Date()
    })

    console.log("Ressource document updated");
  } catch (error) {
    console.error("Error updating ressource document:", error);
  }


  // Mise a jour des fichiers
  if (filesToUpload) {
    
  }
}