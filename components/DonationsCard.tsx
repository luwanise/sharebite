import { Colors } from "@/assets/Colors";
import { Donation } from "@/models/Donation";
import { RelativePathString, router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface DonationsCardProps {
    item: Donation;
}
export function DonationsCard({item}: DonationsCardProps) {
    return (
        <TouchableOpacity style={styles.container} onPress={() => {
            router.navigate({
                "pathname": "/donations/[donation]",
                "params": { donation: item.id}
            });
        }}>
                <Image source={{uri: item.image}} style={styles.image} />
            <View style={styles.details}>
                <Text style={styles.foodName}>{item.foodName}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.expiry}>Expires on: {item.expirationDate.toLocaleDateString()}</Text>
                <Text style={styles.pickupDetails}>See Pickup Details {">"}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: Colors.background_2,
        borderWidth: 1,
        borderRadius: 25,
        flexDirection: "row",
        padding: 10,
        gap: 10,
    },
    image: {
        width: 100,
        height: 100,
        borderWidth: 1,
        borderRadius: 20,
    },
    details: {
        flex: 1,
        gap: 5,
    },
    foodName: {
        fontSize: 15,
        fontFamily: "Montserrat_700Bold",
    },
    description: {
        fontSize: 13,
        fontFamily: "Lato_400Regular",
    },
    expiry: {
        fontSize: 13,
        fontStyle: "italic",
        fontFamily: "Lato_400Regular",
    },
    pickupDetails: {
        flex: 1,
        width: "100%",
        textAlign: "right",
        textAlignVertical: "bottom",
        fontSize: 13,
        fontFamily: "Lato_400Regular",
        color: Colors.accent_1
    },
})