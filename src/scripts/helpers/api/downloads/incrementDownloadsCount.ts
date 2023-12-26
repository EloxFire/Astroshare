import { getFirestore, collection, updateDoc, increment, doc } from "firebase/firestore";
import { dbCollections } from "../../constants";

// Get a ressource by its slug
export const incrementDownloadsCount = async () => {
  const firestore = getFirestore();
  const downloadsCollectionRef = collection(firestore, dbCollections.downloadStats);
  const countDocRef = doc(downloadsCollectionRef, "count");

  try {
    updateDoc(countDocRef, {
      value: increment(1)
    })
    return 1;
  } catch (error) {
    console.log(error);
    return 0;
  }
}