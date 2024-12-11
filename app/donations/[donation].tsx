import { Colors } from "@/assets/Colors";
import { Dimens } from "@/assets/Dimens";
import { FoodQuantitySelector } from "@/components/FoodQuantitySelector";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { DonationInfo } from "@/components/Donations/DonationInfo";
import { useDonationDetails } from "@/hooks/useDonationDetails";

export default function DonationsDetailsScreen() {
    const { donation } = useLocalSearchParams();
    const [quantity, setQuantity] = useState(1);
    const details = useDonationDetails(donation.toString());

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
                    <DonationInfo
                        label="Expires on:"
                        icon={"timer-outline"}
                        info={details?.expirationDate.toDateString()} />
                    <DonationInfo
                        label="Pickup Location:" 
                        icon={"location-outline"} 
                        info={details?.location} />
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
        alignItems: "center"
    },    
    detailsCard: {
        flex: 1,
        backgroundColor: Colors.background_1,
        width: "100%",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        marginTop: -40,
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
    claimDonationButton: {
        backgroundColor: Colors.primary_1,
        padding: 15,
        borderRadius: Dimens.buttonBorderRadius,
        marginTop: 20,
    },
    claimDonationButtonText: {
        fontSize: Dimens.buttonText,
        fontFamily: "Montserrat_700Bold",
        color: Colors.background_1,
        textAlign: "center",
    }
})