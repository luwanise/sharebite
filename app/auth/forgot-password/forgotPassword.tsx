import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { Colors } from "@/assets/Colors";
import { Dimens } from "@/assets/Dimens";
import { CustomTextInput } from "@/components/CustomTextInput";
import { useState } from "react";

export default function forgotPassword() {
    const [email, setEmail] = useState("");

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>    
                <TouchableOpacity onPress={() => {router.back()}} >
                    <Ionicons name="chevron-back" size={24} color={Colors.primary_2} />
                </TouchableOpacity>
                <Text style={styles.header}>Oops, Forgot Something?</Text>
                <View />
            </View>
            <Image
                source={require("../../../assets/images/design-resources/forgot-password-illustration.png")}
                style={styles.forgotPasswordImage}
            />
            <Text style={styles.body}>Who needs a password anyway? Oh, wait... you do. Let’s fix that. Enter your email, and we’ll send the magic link to reset your password.</Text>
            <CustomTextInput
                    label="Email"
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Enter your email"
                />
            <TouchableOpacity
                style={styles.button}
                onPress={() => {}}
            >
                <Text style={styles.buttonText}>Send me the magic link!</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.background_1,
        justifyContent: "space-evenly",
    },
    headerContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: Dimens.padding,
        marginTop: 20,
        gap: 10,
    },
    header: {
        fontSize: 20,
        textAlign: "center",
        fontFamily: "Montserrat_700Bold",
    },
    forgotPasswordImage: {
        width: 300,
        height: 300,
        resizeMode: "contain"
    },
    body: {
        width: "100%",
        paddingHorizontal: Dimens.padding,
        marginVertical: 20,
        fontSize: Dimens.bodySize,
        textAlign: "center",
        fontFamily: "Lato_400Regular",
    },
    button: {
        padding: 15,
        marginVertical: 30,
        width: "80%",
        borderRadius: Dimens.buttonBorderRadius,
        backgroundColor: Colors.primary_1,
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        fontSize: Dimens.bodySize,
        fontFamily: "Montserrat_700Bold",
    },
})