import { collection, deleteDoc, doc, getFirestore } from "firebase/firestore"
import { dbCollections, dbStorageNamespaces } from "../../constants"
import { deleteObject, getStorage, listAll, ref } from "firebase/storage";

export const deleteCategory = async (category_ref: string, category_slug: string) => {
  const db = getFirestore()
  const storage = getStorage();

  if (!category_ref || !category_slug) return console.error("Error deleting category: Missing parameter");

  console.log(category_ref, category_slug);
  

  try {
    console.log("Deleting category " + category_ref);

    // Delete ressource document
    const categoriesRef = collection(db, dbCollections.categories);
    const docRef = await doc(categoriesRef, category_ref);

    const storageRef = ref(storage, `${dbStorageNamespaces.categories}/${category_slug}/`);
    const files = await listAll(storageRef)
    files.items.forEach(async (fileRef) => {
      await deleteObject(fileRef)
    })
    console.log("Category files deleted successfully !");

    await deleteDoc(docRef)
    console.log("Category document deleted successfully !");

  } catch (error) {
    console.error("Error deleting category:", error);
  }
}