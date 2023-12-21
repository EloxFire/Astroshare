import { collection, getDocs, getFirestore, query, where, addDoc, updateDoc } from "firebase/firestore";
import { Ressource } from "../../types";
import { dbCollections } from "../constants";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

// Get Ressources collection documents count
export const getRessourcesCount = async () => {
  const db = getFirestore();
  const ressourcesRef = collection(db, dbCollections.ressources);
  const ressources = await getDocs(ressourcesRef);
  return ressources.size;
}

// Get a ressource by its slug
export const getRessource = async (ressource_slug: string) => {
  const db = getFirestore();
  const ressourcesRef = collection(db, dbCollections.ressources);
  const ressourceQuery = query(ressourcesRef, where("slug", "==", ressource_slug));
  const ressource = await getDocs(ressourceQuery)
  return ressource.docs[0].data();
}

export const uploadNewRessource = async (ressource: Ressource) => {
  console.log("Adding new ressource");

  console.log(ressource);

  // Upload files to storage
  let filesUrls: string[] = [];
  try {
    const storage = getStorage();

    ressource.files?.forEach(async (file, file_index) => {
      const storageRef = ref(storage, `ressources/${ressource.slug}/${ressource.downloadNames[file_index]}`);
      const fileRef = await uploadBytes(storageRef, file);
      const fileUrl = await getDownloadURL(fileRef.metadata.ref!);
      filesUrls.push(fileUrl);
    })
  } catch (error) {
    console.error("Error uploading ressource files to storage:", error);
  }

  console.log(filesUrls);

  ressource.files = filesUrls;

  console.log(ressource);


  try {
    const db = getFirestore();
    const ressourcesRef = collection(db, dbCollections.ressources);
    const docRef = await addDoc(ressourcesRef, ressource);
    updateDoc(docRef, {
      ref: docRef.id
    });
    console.log("Ressource written with ID : ", docRef.id);
  } catch (error) {
    console.error("Error adding document:", error);
  }

}