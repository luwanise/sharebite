import { db } from "@/firebaseConfig";
import { ThankYou } from "@/models/ThankYou";
import { showToastError } from "@/utils/showToastError";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function useThankYous() {
    const [thankYous, setThankYous] = useState<ThankYou[]>([]);
    const [thanksLoading, setThanksLoading] = useState(false);
    
    useEffect(() => {
        setThanksLoading(true);
        const getThankYous = async() => {
            try {
                const querySnapshot = await getDocs(collection(db, "thankyous"));
                const thankYous = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    name: doc.data().name,
                    message: doc.data().message,
                    date: doc.data().date.toDate(),
                    image: doc.data().image,
                    city: doc.data().city,
                    state: doc.data().state
                }));
        
                setThankYous(thankYous);
                setThanksLoading(false);
            } catch (error) {
                console.error(error);
                showToastError(`Error getting thank you cards: ${error}`);
                setThanksLoading(false);
            }
        }

        getThankYous();
    }, []);

    return {thankYous, thanksLoading};
}