import { collection, getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";

// Get Ressources collection count value
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