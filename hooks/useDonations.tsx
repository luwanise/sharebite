import { db } from "@/firebaseConfig";
import { Donation } from "@/models/Donation";
import { showToastError } from "@/utils/showToastError";
import { collection, DocumentData, getDocs, Query, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function useDonations(donorId?: string, recipientId?: string) {
    const [donations, setDonations] = useState<Donation[]>([]);
    const [donationsLoading, setDonationsLoading] = useState(false);
    
    const getDonations = async() => {
        setDonationsLoading(true);
        try {
            let q = collection(db, "donations") as Query<DocumentData>;
            if (donorId) {
                q = query(q, where("donorId", "==", donorId));
            }
            if (recipientId) {
                q = collection(db, "claimedDonations") as Query<DocumentData>;
                q = query(q, where("recipientId", "==", recipientId));
            }
            const querySnapshot = await getDocs(q);
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