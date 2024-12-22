import { db } from "@/firebaseConfig";
import { doc, setDoc, collection, addDoc } from "firebase/firestore";

export async function uploadDoc(collectionName: string, data: any, id?: string) {
    try {
        if (id) {
            await setDoc(doc(db, collectionName, id), data);
        } else {
            await addDoc(collection(db, collectionName), data);
        }
    } catch (error) {
        console.error(error);
    }
}