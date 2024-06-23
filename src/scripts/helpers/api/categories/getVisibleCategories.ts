import { getFirestore, collection, query, getDocs, where } from "firebase/firestore";
import { dbCollections } from "../../constants";

// Get all ressources in the collection
export const getVisibleCategories = async () => {
  const db = getFirestore();
  const categoriesRef = collection(db, dbCollections.categories);
  const categoriesQuery = query(categoriesRef, where("visibility", "==", true));
  const categories = await getDocs(categoriesQuery)
  return categories;
}