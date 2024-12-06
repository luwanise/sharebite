import { Dimens } from "@/assets/Dimens";
import { StyleSheet, Text, View } from "react-native";

export function Donations() {
    return (
        <View>
            <Text style={styles.donationsHeading}>Donations</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    donationsHeading: {
        fontFamily: "Montserrat_700Bold",
        fontSize: 20,
        padding: Dimens.padding,
    },
})