import { db } from "@/firebaseConfig";
import { Donation } from "@/models/Donation";
import { showToastError } from "@/utils/showToastError";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function useDonations() {
    const [donations, setDonations] = useState<Donation[]>([]);
    const [donationsLoading, setDonationsLoading] = useState(false);
    
    const getDonations = async() => {
        setDonationsLoading(true);
        try {
            const querySnapshot = await getDocs(collection(db, "donations"));
            const donations = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                foodName: doc.data().foodName,
                quantity: doc.data().quantity,
                expirationDate: doc.data().expirationDate.toDate(),
                location: doc.data().location,
                description: doc.data().description,
                image: doc.data().image
            }));
    
            setDonations(donations);
            setDonationsLoading(false);
        } catch (error) {
            console.error(error);
            showToastError(`Error getting donations: ${error}`);
            setDonationsLoading(false);
        }
    }

    useEffect(() => {
        getDonations();
    }, []);

    return {donations, donationsLoading, refreshDonations: getDonations};
}