import { getFirestore, collection, addDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Ressource } from "../../../types";
import { dbCollections } from "../../constants";

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