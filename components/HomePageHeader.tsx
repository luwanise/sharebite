import { Colors } from "@/assets/Colors";
import { Dimens } from "@/assets/Dimens";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function HomePageHeader() {
    return (
        <View style={styles.headerContainer}>
                <View style={styles.headerTextContainer}>
                    <Text style={styles.heading}>Bite Back at Hunger!</Text>
                    <Text style={styles.subHeading}>Donate what you can, because everyone deserves a seat at the table.</Text>
                </View>
                <Image
                    source={require("../assets/images/design-resources/food.png")}
                    style={styles.headerImage}
                />
                <TouchableOpacity style={styles.search} onPress={() => {}}>
                    <Ionicons name="search" size={24} color={Colors.background_1} />
                </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
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
    }
})