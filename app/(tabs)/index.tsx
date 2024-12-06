import { Colors } from "@/assets/Colors";
import { Dimens } from "@/assets/Dimens";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useLocalSearchParams } from "expo-router";
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { getThankYous } from "../firebase/getThankYous";
import { ThankYouList } from "@/components/ThankYouList";

export default function HomeScreen() {
    const { userId } = useLocalSearchParams();
    const data = getThankYous();

    return (
        <View style={styles.container}>
            <StatusBar translucent hidden />
            <View style={styles.headerContainer}>
                <View style={styles.headerTextContainer}>
                    <Text style={styles.heading}>Bite Back at Hunger!</Text>
                    <Text style={styles.subHeading}>Donate what you can, because everyone deserves a seat at the table.</Text>
                </View>
                <Image
                    source={require("../../assets/images/design-resources/food.png")}
                    style={styles.headerImage}
                />
            </View>
            <TouchableOpacity style={styles.search} onPress={() => {}}>
                <Ionicons name="search" size={24} color={Colors.background_1} />
            </TouchableOpacity>
            <Text style={styles.impact}>Our Impact</Text>
            <ThankYouList data={data} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background_1,
    },
    search: {
        position: "absolute",
        top: 30,
        right: 30,
    },
    headerContainer: {
        width: "100%",
        height: 250,
        paddingHorizontal: Dimens.padding,
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "center",
        backgroundColor: Colors.primary_1,
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
    },
    impact: {
        fontFamily: "Montserrat_700Bold",
        fontSize: 20,
        padding: Dimens.padding,
    },
})
