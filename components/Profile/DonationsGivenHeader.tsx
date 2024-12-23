import { Colors } from "@/assets/Colors";
import { Dimens } from "@/assets/Dimens";
import { Image, StyleSheet, Text, View } from "react-native";

export function DonationsGivenHeader() {
    return (
        <View style={styles.headerContainer}>
                <View style={styles.headerTextContainer}>
                    <Text style={styles.heading}>Your Generosity in Action!</Text>
                    <Text style={styles.subHeading}>Thank You for Your Incredible Support and Helping Us Create Change!</Text>
                </View>
                <Image
                    source={require("../../assets/images/design-resources/signup_image.png")}
                    style={styles.headerImage}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        width: "100%",
        height: 250,
        paddingHorizontal: Dimens.padding,
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "center",
        backgroundColor: Colors.primary_2,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        gap: 10,
    },
    headerTextContainer: {
        flex: 1,
        height: "100%",
        flexDirection: "column",
        paddingTop: 40,
        gap: Dimens.padding,
    },
    heading: {
        color: Colors.background_2,
        fontFamily: "Montserrat_700Bold",
        fontSize: Dimens.headerSize,
    },
    subHeading: {
        color: Colors.background_2,
        fontFamily: "Lato_400Regular",
        fontSize: Dimens.bodySize,
    },
    headerImage: {
        width: 160,
        height: 160,
        resizeMode: "contain",
    }
})