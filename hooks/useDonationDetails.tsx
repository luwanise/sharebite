import { db } from "@/firebaseConfig";
import { Donation } from "@/models/Donation";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

export function useDonationDetails(donationId: string) {
    const [donationDetails, setDonationDetails] = useState<Donation>();

    useEffect(() => {
        const getDonationDetails = async (donationId: string) => {
            try {
                const docRef = doc(db, "donations", donationId);
                const docSnapshot = await getDoc(docRef);

                if (docSnapshot.exists()){
                    const data = docSnapshot.data();
                    const donationDetails = {
                        id: data.id,
                        foodName: data.foodName,
                        quantity: data.quantity,
                        expirationDate: data.expirationDate.toDate(),
                        location: data.location,
                        description: data.description,
                        image: data.image
                    }

                    setDonationDetails(donationDetails);
                } else {
                    console.error("Donation Details not found!");
                }
            } catch (error) {
                console.error("Error fetching donation details:", error);
            }
        }

        getDonationDetails(donationId);
    }, []);

    return donationDetails;
}