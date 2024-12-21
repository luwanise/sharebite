import { uploadDoc } from "@/firebase/uploadDoc";
import { auth } from "@/firebaseConfig";
import { User } from "@/models/User";
import { updateProfile } from "firebase/auth";
import { showToastError } from "../showToastError";
import { uploadImage } from "@/firebase/uploadImage";

export const updateUserDetails = async (userDetails: User, setLoading: (loading: boolean) => void) => {
    setLoading(true);
    
    try {
        userDetails.profilePic = await uploadImage(userDetails.profilePic);
        await uploadDoc("users", userDetails);

        if (auth.currentUser) {
            await updateProfile(auth.currentUser, {
                displayName: userDetails.username,
                photoURL: userDetails.profilePic
            });
        }

        setLoading(false);
    } catch (error) {
        setLoading(false);
        showToastError(`Error updating user details: ${error}`);
    }
}