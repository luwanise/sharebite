import { Colors } from "@/assets/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, View } from "react-native";

interface DonationInfoProps {
    label: string;
    info?: string;
    icon: any;
}

export function DonationInfo({label, info, icon}: DonationInfoProps) {
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.container}>
                <Ionicons name={icon} size={24} color={Colors.secondary_1} />
                <Text style={styles.info}>{info}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        fontWeight: "bold",
        fontFamily: "Lato_400Regular",
    },
    container: {
        flexWrap: "wrap",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5,
        gap: 5,
    },
    info: {
        fontSize: 16,
        fontFamily: "Lato_400Regular",
    },
})