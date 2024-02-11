import { getFirestore, collection, updateDoc, arrayUnion, doc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Ressource } from "../../../types";
import { dbCollections, dbStorageNamespaces } from "../../constants";

export const updateExistingRessource = async (ressource: Ressource) => {
  const storage = getStorage();
  const db = getFirestore();

  const tempRessource = ressource;
  const filesToUpload = ressource.files!;
  const filePreviewToUpload = ressource.filePreview!;
  const { files, filePreview, ...ressourceToUpload } = tempRessource;

  try {
    console.log("Updating ressource " + ressource.slug);
    console.log("Finding ressource " + ressource.slug + " ref in database...");

    console.log(ressourceToUpload);


    // const ressourcesRef = collection(db, dbCollections.ressources);
    // try {
    //   const docRef = await doc(ressourcesRef, ressource.ref!);
    //   console.log("Found ressource in database : ", docRef.id);
    //   updateDoc(docRef, {

    //   });
    //   console.log(`${ressource.slug} document main updated successfully !`);

    //   // Mise a jour des fichiers de ressource
    //   if (filesToUpload.length > 0 && filesToUpload !== null) {
    //     // Upload files to storage
    //     updateDoc(docRef, {
    //       files: [],
    //     })
    //     try {
    //       filesToUpload.forEach(async (file, file_index) => {
    //         if (typeof file === 'string') return console.log(`File n°${file_index} is already uploaded to storage`);

    //         const storageRef = ref(storage, `${dbStorageNamespaces.ressources}/${ressource.slug}/version${ressource.updatesCount! + 1}/${ressource.downloadNames[file_index]}`);
    //         const fileRef = await uploadBytes(storageRef, file);
    //         const fileUrl = await getDownloadURL(fileRef.metadata.ref!);
    //         console.log("File uploaded to storage:", fileRef.metadata.ref!);
    //         updateDoc(docRef, {
    //           files: arrayUnion(fileUrl),
    //           updatedAt: new Date()
    //         })
    //         console.log(`File n°${file_index} url updated in ressource document`);
    //       })
    //     } catch (error) {
    //       console.error("Error updating ressource files to storage:", error);
    //     }
    //   }

    //   // Mise a jour de l'illustration de ressource
    //   if (filePreviewToUpload !== null) {
    //     try {
    //       if (typeof filePreviewToUpload === 'string') return console.log(`File preview is already uploaded to storage`);

    //       const storageRef = ref(storage, `${dbStorageNamespaces.ressources}/${ressource.slug}/illustration/version${ressource.updatesCount! + 1}`);
    //       const filePreviewRef = await uploadBytes(storageRef, filePreviewToUpload);
    //       const filePreviewUrl = await getDownloadURL(filePreviewRef.metadata.ref!);
    //       console.log("File uploaded to storage:", filePreviewRef.metadata.ref!);
    //       updateDoc(docRef, {
    //         filePreview: filePreviewUrl,
    //         updatedAt: new Date()
    //       })
    //       console.log(`File preview url updated in ressource document`);
    //     } catch (error) {
    //       console.error("Error updating ressource file preview to storage:", error);
    //     }
    //   }
    // } catch (error) {
    //   console.log(error);

    // }
  } catch (error) {
    console.error("Error adding document:", error);
  }
}