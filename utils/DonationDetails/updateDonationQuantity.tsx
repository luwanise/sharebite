import { removeDoc } from "@/firebase/removeDoc";
import { uploadDoc } from "@/firebase/uploadDoc";
import { Donation } from "@/models/Donation";
import { ToastAndroid } from "react-native";

export async function updateDonationQuantity(donation: Donation, quantity: number) {
    const newQuantity = (donation.quantity) - quantity;
    if (newQuantity < 0) {
        ToastAndroid.show("Not enough items available", ToastAndroid.SHORT);
        return;
    }

    if (newQuantity === 0) {
        if (donation.id) {
            await removeDoc("donations", donation.id);
        }
    }

    donation.quantity = newQuantity;

    uploadDoc("donations", donation, donation.id);
}