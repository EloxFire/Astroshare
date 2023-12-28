import { getFirestore, collection, addDoc, updateDoc } from "firebase/firestore";
import { dbCollections } from "../../constants";
import { User } from "../../../types/User";

export const createNewUser = async (user: User) => {
  const db = getFirestore();

  try {
    console.log("Writing user to database");

    const usersRef = collection(db, dbCollections.users);
    const docRef = await addDoc(usersRef, user);
    updateDoc(docRef, {
      ref: docRef.id
    });
    console.log("User written with ID : ", docRef.id);
  } catch (error) {
    console.error("Error adding user to database:", error);
  }
}