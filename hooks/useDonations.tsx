import { db } from "@/firebaseConfig";
import { Donation } from "@/models/Donation";
import { collection, getDocs, Timestamp } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function useDonations() {
    const [donations, setDonations] = useState<Donation[]>([]);
    
    useEffect(() => {
        const getDonations = async() => {
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
            } catch (error) {
                console.error(error);
            }
        }

        getDonations();
    }, []);

    return donations;
}