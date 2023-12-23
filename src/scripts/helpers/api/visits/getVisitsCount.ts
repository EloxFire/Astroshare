import { collection, getFirestore, doc, getDoc } from "firebase/firestore";

// Get Visits collection count value
export const getVisitsCount = async () => {
  const firestore = getFirestore();
  const visitisCollectionRef = collection(firestore, "Visits");
  const countDocRef = doc(visitisCollectionRef, "count");

  const countDocSnapshot = await getDoc(countDocRef);
  if (countDocSnapshot.exists()) {
    const countData = countDocSnapshot.data();
    const countValue = countData.value;
    return countValue;
  } else {
    throw new Error("Count document does not exist");
  }
}