import { uploadDoc } from "@/firebase/uploadDoc";
import { auth } from "@/firebaseConfig";
import { Donation } from "@/models/Donation";

export async function claimDonation(donation: Donation, quantity: number) {
    donation.recipientId = auth.currentUser?.uid;
    donation.quantity = quantity;
    uploadDoc("claimedDonations", donation, donation.id);
}