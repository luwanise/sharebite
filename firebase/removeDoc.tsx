import { db } from "@/firebaseConfig";
import { doc, deleteDoc } from "firebase/firestore";

export async function removeDoc(collectionName: string, id: string) {
    try {
        await deleteDoc(doc(db, collectionName, id));
    } catch (error) {
        console.error(error);
    }
}