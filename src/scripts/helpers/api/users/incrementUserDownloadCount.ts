import { getFirestore, collection, query, where, getDocs, updateDoc, increment, arrayUnion } from "firebase/firestore";
import { dbCollections } from "../../constants";
import { incrementDownloadsCount } from "../downloads/incrementDownloadsCount";

// Get a ressource by its slug
export const incrementUserDownloadCount = async (uid: string, ressource_name: string, ressource_url: string) => {
  console.log(uid, ressource_name, ressource_url);

  const db = getFirestore();
  const usersRef = collection(db, dbCollections.users);
  const userQuery = query(usersRef, where("uid", "==", uid));
  const user = await getDocs(userQuery)
  const userRef = user.docs[0].ref;

  try {
    updateDoc(userRef, {
      downloadsCount: increment(1),
      downloadsHistory: arrayUnion({
        ressource_name: ressource_name,
        ressource_url: ressource_url,
        date: new Date()
      })
    })

    const userDownloadsStatsRes = await incrementDownloadsCount()
    console.log(userDownloadsStatsRes);
    return 1;
  } catch (error) {
    console.log(error);
    return 0;
  }
}