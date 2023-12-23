import { collection, getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";

export const addNewVisit = async () => {
  const firestore = getFirestore();
  const visitisCollectionRef = collection(firestore, "Visits");
  const countDocRef = doc(visitisCollectionRef, "count");

  const countDocSnapshot = await getDoc(countDocRef);
  if (countDocSnapshot.exists()) {
    const countData = countDocSnapshot.data();
    const countValue = countData.value;
    const newCountValue = countValue + 1;
    await updateDoc(countDocSnapshot.ref, {
      value: newCountValue
    });
  } else {
    throw new Error("Count document does not exist");
  }
}