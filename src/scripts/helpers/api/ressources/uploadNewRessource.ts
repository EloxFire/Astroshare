import { dbStorageNamespaces } from './../../constants';
import { getFirestore, collection, addDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { dbCollections } from "../../constants";
import { Ressource } from '../../../types/Ressource';

export const uploadNewRessource = async (ressource: Ressource) => {
  const storage = getStorage();
  const db = getFirestore();

  const tempRessource = ressource;
  const filesToUpload = ressource.files!;
  const filePreviewToUpload = ressource.filePreview!;
  const { files, filePreview, ...ressourceToUpload } = tempRessource;

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
        console.log("Uploading file :", ressource.downloadNames[file_index]);
        
        const storageRef = ref(storage, `${dbStorageNamespaces.ressources}/${ressource.slug}/files/version${ressource.updatesCount!}/${ressource.downloadNames[file_index]}`);
        const fileRef = await uploadBytes(storageRef, file);
        const fileUrl = await getDownloadURL(fileRef.metadata.ref!);
        console.log("File uploaded to storage:", fileRef.metadata.ref!);
        await updateDoc(docRef, {
          files: arrayUnion(fileUrl)
        })
        console.log(`File n°${file_index} url added to ressource document`);
      })
    } catch (error) {
      console.error("Error uploading ressource files to storage:", error);
    }

    // Upload files to storage
    try {
      const storageRef = ref(storage, `${dbStorageNamespaces.ressources}/${ressource.slug}/illustration/version${ressource.updatesCount!}/illustration.jpg`);
      const filePreviewRef = await uploadBytes(storageRef, filePreviewToUpload);
      const filePreviewUrl = await getDownloadURL(filePreviewRef.metadata.ref!);
      console.log("File uploaded to storage:", filePreviewRef.metadata.ref!);
      updateDoc(docRef, {
        filePreview: filePreviewUrl
      })
      console.log(`File preview url added to ressource document`);
    } catch (error) {
      console.error("Error uploading ressource file preview to storage:", error);
    }
  } catch (error) {
    console.error("Error adding document:", error);
  }
}