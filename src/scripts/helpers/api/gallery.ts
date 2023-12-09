import { collection, getDocs, getFirestore, query, updateDoc, where, addDoc } from "firebase/firestore";
import { Image } from "../../types";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import dayjs from "dayjs";

// Get an image in the gallery bi its ID
export const getImageById = async (image_id: string) => {
  const db = getFirestore();
  const ressourcesRef = collection(db, "Gallery");
  const ressourceQuery = query(ressourcesRef, where("id", "==", image_id));
  const ressource = await getDocs(ressourceQuery)
  return ressource.docs[0].data();
}

// Get all images in the gallery
export const getImages = async () => {
  const db = getFirestore();
  const ressourcesRef = collection(db, "Gallery");
  const ressourceQuery = query(ressourcesRef);
  const ressources = await getDocs(ressourceQuery)
  return ressources;
}

export const uploadNewImage = async (image: any) => {
  console.log("Adding new image to gallery");

  try {
    const db = getFirestore();
    const galleryRef = collection(db, "Gallery");
    const docRef = await addDoc(galleryRef, image);
    updateDoc(docRef, {
      ref: docRef.id
    });
    console.log("Document written with ID : ", docRef.id);
  } catch (error) {
    console.error("Error adding image metadata document:", error);
  }

  try {
    const storage = getStorage();
    const storageRef = ref(storage, `gallery/${image.alt}-${dayjs().format("DD-MM-YYYY-HH-mm-ss")}`);

    await uploadBytes(storageRef, image.file)
    console.log("Image uploaded to storage");
  } catch (error) {
    console.error("Error uploading image to storage:", error);
  }
}