import { Colors } from "@/assets/Colors";
import { Dimens } from "@/assets/Dimens";
import { FoodQuantitySelector } from "@/components/FoodQuantitySelector";
import { getDonationDetails } from "@/utils/firebase/getDonationDetails";
import { Donation } from "@/models/Donation";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function DonationsDetailsScreen() {
    const { donation } = useLocalSearchParams();
    const [details, setDetails] = useState<Donation>();
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const newDetails = getDonationDetails(donation.toString());
        setDetails(newDetails);
    }, [])

    return (
        <View style={styles.container}>
            <Image
                source={{uri: details?.image}}
                style={styles.foodImage}
            />
            <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                <Ionicons name="chevron-back" size={24} color={Colors.background_1} />
            </TouchableOpacity>
            <View style={styles.detailsCard}>
                <View style={styles.detailsContainer}>
                    <View style={styles.foodNameContainer}>
                        <Text style={styles.foodName}>{details?.foodName}</Text>
                        <FoodQuantitySelector foodQuantity={quantity} setFoodQuantity={setQuantity} maxQuantity={details?.quantity ?? 0}/>
                    </View>
                    <Text style={styles.description}>{details?.description}</Text>
                    <View style={styles.expiryContainer}>
                        <Text style={styles.expiryLabel}>Expires on:</Text>
                        <Ionicons name="timer-outline" size={24} color={Colors.secondary_1} />
                        <Text style={styles.expiry}>{details?.expirationDate.toDateString()}</Text>
                    </View>
                    <View>
                        <Text style={styles.pickupLabel}>Pickup Location:</Text>
                        <View style={styles.pickupContainer}>
                            <Ionicons name="location" size={24} color={Colors.secondary_1} />
                            <Text style={styles.pickupLocation}>{details?.location}</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={styles.claimDonationButton}>
                    <Text style={styles.claimDonationButtonText}>Claim Donation</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    foodImage: {
        width: "100%",
        aspectRatio: 1,
    },
    backButton: {
        position: "absolute",
        top: 30,
        left: 20,
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: Colors.primary_2,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1
    },    
    detailsCard: {
        flex: 1,
        backgroundColor: Colors.background_1,
        width: "100%",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        marginTop: -40,
        borderWidth: 1,
        padding: Dimens.padding,
        gap: 10,
        justifyContent: "space-between",
    },
    detailsContainer: {
        gap: 10,
    },
    foodNameContainer: {
        width: "100%",
        justifyContent: "space-between",
        marginTop: Dimens.padding,
        flexDirection: "row",
    },
    foodName: {
        flex: 1,
        fontSize: 20,
        fontFamily: "Montserrat_700Bold",
    },
    description: {
        marginTop: 10,
        fontSize: 16,
        fontStyle: "italic",
        fontFamily: "Lato_400Regular",
    },
    expiryContainer: {
        flexWrap: "wrap",
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
    },
    expiryLabel: {
        fontSize: 16,
        fontWeight: "bold",
        fontFamily: "Lato_400Regular",
    },
    expiry: {
        fontSize: 16,
        fontFamily: "Lato_400Regular",
    },
    pickupLabel: {
        fontSize: 16,
        fontWeight: "bold",
        fontFamily: "Lato_400Regular",
    },
    pickupContainer: {
        flexWrap: "wrap",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5,
        gap: 5,
    },
    pickupLocation: {
        fontSize: 16,
        fontFamily: "Lato_400Regular",
    },
    claimDonationButton: {
        backgroundColor: Colors.primary_1,
        padding: 15,
        borderRadius: Dimens.buttonBorderRadius,
        marginTop: 20,
        borderWidth: 1,
    },
    claimDonationButtonText: {
        fontSize: Dimens.buttonText,
        fontFamily: "Montserrat_700Bold",
        color: Colors.background_1,
        textAlign: "center",
    }
})