import { collection, getDocs, getFirestore, query, updateDoc, where, addDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { dbCollections } from "../constants";
import { Image } from "../../types";
import dayjs from "dayjs";

// Get Gallery collection documents count
export const getGalleryCount = async () => {
  const db = getFirestore();
  const galleryRef = collection(db, dbCollections.gallery);
  const gallery = await getDocs(galleryRef);
  return gallery.size;
}

// Get an image in the gallery bi its ID
export const getImageById = async (image_id: string) => {
  const db = getFirestore();
  const galleryRef = collection(db, dbCollections.gallery);
  const ressourceQuery = query(galleryRef, where("id", "==", image_id));
  const gallery = await getDocs(ressourceQuery)
  return gallery.docs[0].data();
}

// Get all images in the gallery
export const getImages = async () => {
  const db = getFirestore();
  const galleryRef = collection(db, dbCollections.gallery);
  const ressourceQuery = query(galleryRef);
  const gallery = await getDocs(ressourceQuery)
  return gallery;
}

export const uploadNewImage = async (image: any | Image) => { // TODO REMOVE ANY TYPE
  console.log("Adding new image to gallery");

  try {
    const storage = getStorage();
    const storageRef = ref(storage, `gallery/${image.alt}-${dayjs().format("DD-MM-YYYY-HH-mm-ss")}`);

    const file = await uploadBytes(storageRef, image.file)
    image.file = await getDownloadURL(file.metadata.ref!);
    console.log("Image uploaded to storage");
  } catch (error) {
    console.error("Error uploading image to storage:", error);
  }

  try {
    const db = getFirestore();
    const galleryRef = collection(db, dbCollections.gallery);
    const docRef = await addDoc(galleryRef, image);
    updateDoc(docRef, {
      ref: docRef.id
    });
    console.log("Document written with ID : ", docRef.id);
  } catch (error) {
    console.error("Error adding image metadata document:", error);
  }
}