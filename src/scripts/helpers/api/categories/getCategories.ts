import { getFirestore, collection, query, getDocs } from "firebase/firestore";
import { dbCollections } from "../../constants";

// Get all images in the gallery
export const getCategories = async () => {
  const db = getFirestore();
  const categoriesRef = collection(db, dbCollections.categories);
  const categoriesQuery = query(categoriesRef);
  const categories = await getDocs(categoriesQuery)
  return categories;
}