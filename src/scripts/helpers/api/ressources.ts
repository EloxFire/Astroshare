import { collection, getDocs, getFirestore, query, where, addDoc, updateDoc, arrayUnion } from "firebase/firestore";
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
  const storage = getStorage();
  const db = getFirestore();

  const tempRessource = ressource;
  const filesToUpload = ressource.files!;
  const { files, ...ressourceToUpload } = tempRessource;

  try {
    console.log("Writing ressource to database");

    const ressourcesRef = collection(db, dbCollections.ressources);
    const docRef = await addDoc(ressourcesRef, ressourceToUpload);
    updateDoc(docRef, {
      ref: docRef.id
    });
    console.log("Ressource written with ID : ", docRef.id);

    // Upload files to storage
    try {
      filesToUpload.forEach(async (file, file_index) => {
        const storageRef = ref(storage, `ressources/${ressource.slug}/${ressource.downloadNames[file_index]}`);
        const fileRef = await uploadBytes(storageRef, file);
        const fileUrl = await getDownloadURL(fileRef.metadata.ref!);
        console.log("File uploaded to storage:", fileRef.metadata.ref!);
        updateDoc(docRef, {
          files: arrayUnion(fileUrl)
        })
        console.log(`File n°${file_index} url added to ressource document`);


      })
    } catch (error) {
      console.error("Error uploading ressource files to storage:", error);
    }
  } catch (error) {
    console.error("Error adding document:", error);
  }
}