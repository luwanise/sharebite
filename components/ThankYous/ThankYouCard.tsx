import { Colors } from "@/assets/Colors";
import { Dimens } from "@/assets/Dimens";
import { ThankYou } from "@/models/ThankYou";
import { Image, StyleSheet, Text, View } from "react-native";

interface ThankYouCardProps {
    item: ThankYou
}
export function ThankYouCard({item}: ThankYouCardProps) {
    return (
        <View style={styles.container}>
            <View style={styles.userHeading}>
                <Image source={{uri: item.image}} style={styles.image} />
                <View style={styles.userInfo}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.cityState}>{item.city}, {item.state}</Text>
                </View>
            </View>
            <Text style={styles.message}>"{item.message}"</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 270,
        height: 150,
        backgroundColor: Colors.secondary_2,
        borderTopStartRadius: 25,
        borderTopEndRadius: 25,
        borderBottomStartRadius: 25,
        padding: Dimens.padding,
        borderWidth: 1,
        borderColor: Colors.primary_1,
        marginVertical: 5,
        gap: 5,
        flexDirection: "column"
    },
    userHeading: {
        flexDirection: "row",
        gap: 10
    },
    image: {
        width: 44,
        height: 44,
        borderRadius: 22,
    },
    userInfo: {
        flex: 1,
        flexDirection: "column",
        gap: 4
    },
    name: {
        fontSize: 15,
        fontFamily: "Montserrat_700Bold",
    },
    message: {
        fontSize: 14,
        fontStyle: "italic",
        fontFamily: "Lato_400Regular",
    },
    cityState: {
        fontSize: 14,
        fontFamily: "Lato_400Regular",
    }
})
