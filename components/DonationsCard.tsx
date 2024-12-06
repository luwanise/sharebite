import { Colors } from "@/assets/Colors";
import { Dimens } from "@/assets/Dimens";
import { Donation } from "@/models/Donation";
import { StyleSheet, Text, View } from "react-native";

interface DonationsCardProps {
    item: Donation;
}
export function DonationsCard({item}: DonationsCardProps) {
    return (
        <View>
            <Text style={styles.foodName}>{item.foodName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 100,
        backgroundColor: Colors.background_2,
        borderWidth: 1,
    },
    foodName: {
        flex: 1,
        textAlign: "center",
        fontSize: Dimens.headerSize,
        fontFamily: "Montserrat_700Bold",
    }
})