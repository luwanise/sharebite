import { db } from "@/firebaseConfig";
import { User } from "@/models/User";
import { doc, getDoc } from "firebase/firestore";
import { showToastError } from "../showToastError";

export const getUserDetails = async (userId?: string): Promise<User | undefined> => {
    try {
        const userDocRef = doc(db, "users", userId || "");
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
            return userDoc.data() as User;
        } else {
            showToastError("User records not found");
        }
    } catch (error) {
        showToastError("Failed to get user details");
    }
}