import { collection, getFirestore, doc, getDoc } from "firebase/firestore";
import { dbCollections } from "../../constants";

// Get global downloads count value
export const getDownloadsCount = async () => {
  const firestore = getFirestore();
  const downloadsCollectionRef = collection(firestore, dbCollections.downloadStats);
  const countDocRef = doc(downloadsCollectionRef, "count");

  const countDocSnapshot = await getDoc(countDocRef);
  if (countDocSnapshot.exists()) {
    const countData = countDocSnapshot.data();
    const countValue = countData.value;
    return countValue;
  } else {
    console.error("Count document error")
    return 0;
  }
}