import { getFirestore, collection, getDocs } from "firebase/firestore";
import { dbCollections } from "../../constants";

// Get Categories collection documents count
export const getCategoriesCount = async () => {
  const db = getFirestore();
  const categoriesRef = collection(db, dbCollections.categories);
  const categories = await getDocs(categoriesRef);
  return categories.size;
}