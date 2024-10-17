import { collection, getFirestore, doc, getDoc } from "firebase/firestore";
import { dbCollections } from "../../constants";

// Get Visits collection count value
export const getVisitsCount = async () => {
  const firestore = getFirestore();
  const visitisCollectionRef = collection(firestore, dbCollections.visitsStats);
  const countDocRef = doc(visitisCollectionRef, "count");

  const countDocSnapshot = await getDoc(countDocRef);
  if (countDocSnapshot.exists()) {
    const countData = countDocSnapshot.data();
    const countValue = countData.value;
    return countValue;
  } else {
    console.error("Total visits count error")
    return 0;
  }
}