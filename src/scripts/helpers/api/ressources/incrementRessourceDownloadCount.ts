import { getFirestore, collection, query, where, getDocs, updateDoc, increment } from "firebase/firestore";
import { dbCollections } from "../../constants";
import { incrementDownloadsCount } from "../downloads/incrementDownloadsCount";

// Get a ressource by its slug
export const incrementRessourceDownloadCount = async (ressource_slug: string) => {
  const db = getFirestore();
  const ressourcesRef = collection(db, dbCollections.ressources);
  const ressourceQuery = query(ressourcesRef, where("slug", "==", ressource_slug));
  const ressource = await getDocs(ressourceQuery)

  if (ressource.docs.length > 0) {
    const ressourceRef = ressource.docs[0].ref;
    try {
      updateDoc(ressourceRef, {
        totalDownloads: increment(1)
      })

      const downloadsStatsRes = await incrementDownloadsCount()
      console.log(downloadsStatsRes);
      return 1;
    } catch (error) {
      console.log(error);
      return 0;
    }
  }
}