import { uploadDoc } from "@/firebase/uploadDoc";
import { Donation } from "@/models/Donation";
import { showToastError } from "../showToastError";
import { uploadImage } from "@/firebase/uploadImage";

export const makeDonation = async (newDonation: Donation, setLoading: CallableFunction) => {
    setLoading(true);

    try {
        const imageUrl = await uploadImage(newDonation.image);
        newDonation.image = imageUrl;
        await uploadDoc("donations", newDonation);
        setLoading(false);
    } catch (error) {
        setLoading(false);
        showToastError(`Error making donation: ${error}`);
    }
}