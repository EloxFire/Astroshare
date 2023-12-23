import { collection, getFirestore, doc, getDoc } from "firebase/firestore";

// Get global downloads count value
export const getDownloadsCount = async () => {
  const firestore = getFirestore();
  const downloadsCollectionRef = collection(firestore, "Downloads");
  const countDocRef = doc(downloadsCollectionRef, "count");

  const countDocSnapshot = await getDoc(countDocRef);
  if (countDocSnapshot.exists()) {
    const countData = countDocSnapshot.data();
    const countValue = countData.value;
    return countValue;
  } else {
    throw new Error("Count document does not exist");
  }
}