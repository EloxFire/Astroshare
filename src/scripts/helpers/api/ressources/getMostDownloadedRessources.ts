import { getFirestore, collection, query, getDocs } from "firebase/firestore";
import { dbCollections } from "../../constants";
import { Ressource } from './../../../types';

// Get all ressources in the collection
export const getMostDownloadedRessources = async () => {
  const db = getFirestore();
  const ressourcesRef = collection(db, dbCollections.ressources);
  const ressourceQuery = query(ressourcesRef);
  const ressources = await getDocs(ressourceQuery)

  //Sort ressources by totalDownloads
  const sortedRessources: Ressource[] = [];
  ressources.forEach(ressource => {
    sortedRessources.push(ressource.data() as Ressource);
  })

  sortedRessources.sort((a, b) => {
    return b.totalDownloads! - a.totalDownloads!;
  })

  const topRessources = sortedRessources.slice(0, 3);  

  return topRessources;
}