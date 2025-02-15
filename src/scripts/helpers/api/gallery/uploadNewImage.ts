import { getFirestore, collection, addDoc, updateDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { dbCollections } from "../../constants";
import { Image } from "../../../types/Image";

export const uploadNewImage = async (image: Image) => { // TODO REMOVE ANY TYPE
  console.log("Adding new image to gallery");

  const slug = image.slug || image.alt.toLowerCase().replace(/ /g, "-");

  try {
    const storage = getStorage();
    const storageRef = ref(storage, `gallery/${slug}`);

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