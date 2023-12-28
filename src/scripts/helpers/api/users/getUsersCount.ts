import { collection, getDocs, getFirestore } from "firebase/firestore";
import { dbCollections } from "../../constants";

// Get Users collection documents count
export const getUsersCount = async () => {
  const db = getFirestore();
  const usersRef = collection(db, dbCollections.users);
  const users = await getDocs(usersRef);
  return users.size;
}