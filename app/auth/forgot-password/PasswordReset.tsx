import { Colors } from "@/assets/Colors";
import { Dimens } from "@/assets/Dimens";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";

export default function PasswordResetScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="chevron-back" size={24} color={Colors.primary_2} />
                </TouchableOpacity>
                <Text style={styles.header}>Check your inbox!</Text>
                <View />
            </View>
            <Image
                source={require("../../../assets/images/design-resources/password-reset-illustration.png")}
                style={styles.forgotPasswordImage}
            />
            <Text style={styles.body}>
                The magic link is on its way! Check your email (including the spam folder just in case), and click on the link to reset your password. You’re almost there!
            </Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => { router.back() }}
            >
                <Text style={styles.buttonText}>Back to login</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: Dimens.padding,
        backgroundColor: Colors.background_1
    },
    headerContainer: {
        width: '100%',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: Dimens.padding,
    },
    header: {
        fontSize: 20,
        textAlign: "center",
        fontFamily: "Montserrat_700Bold",
    },
    forgotPasswordImage: {
        width: '80%',
        height: 200,
        resizeMode: "contain",
        marginVertical: Dimens.padding,
    },
    body: {
        width: '100%',
        fontSize: Dimens.bodySize,
        textAlign: "center",
        fontFamily: "Lato_400Regular",
        marginVertical: 20,
    },
    button: {
        padding: 15,
        width: "90%",
        borderRadius: Dimens.buttonBorderRadius,
        backgroundColor: Colors.primary_1,
        alignItems: "center",
        marginVertical: 30
    },
    buttonText: {
        color: "white",
        fontSize: Dimens.bodySize,
        fontFamily: "Montserrat_700Bold",
    }
})