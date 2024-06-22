import { getFirestore, collection, query, getDocs, where } from "firebase/firestore";
import { dbCollections } from "../../../scripts/helpers/constants";

// Get all ressources in the collection
export const getHiddenCategories = async () => {
  const db = getFirestore();
  const categoriesRef = collection(db, dbCollections.categories);
  const categoriesQuery = query(categoriesRef, where("visibility", "==", false));
  const categories = await getDocs(categoriesQuery)
  return categories;
}