import { db } from "@/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

export async function uploadDoc(collectionName: string, data: any) {
    try {
        addDoc(collection(db, collectionName), data)
    } catch (error) {
        console.error(error);
    }
}