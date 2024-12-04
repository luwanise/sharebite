import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { Colors } from "@/assets/Colors";
import { Dimens } from "@/assets/Dimens";
import { CustomTextInput } from "@/components/CustomTextInput";
import { useState } from "react";
import PasswordResetErrorAlert from "@/components/PasswordResetErrorAlert";

export default function forgotPassword() {
    const [email, setEmail] = useState("");
    const [visible, setVisible] = useState(false);

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <ScrollView 
                contentContainerStyle={styles.scrollContainer}
                keyboardShouldPersistTaps="handled"
            >
                <View style={styles.innerContainer}>
                    <View style={styles.headerContainer}>
                        <TouchableOpacity onPress={() => router.back()}>
                            <Ionicons name="chevron-back" size={24} color={Colors.primary_2} />
                        </TouchableOpacity>
                        <Text style={styles.header}>Oops, Forgot Something?</Text>
                        <View />
                    </View>
                    <Image
                        source={require("../../../assets/images/design-resources/forgot-password-illustration.png")}
                        style={styles.forgotPasswordImage}
                    />
                    <Text style={styles.body}>
                        Who needs a password anyway? Oh, wait... you do. Let’s fix that. Enter your email, and we’ll send the magic link to reset your password.
                    </Text>
                    <View style={styles.input}>
                        <CustomTextInput
                            label="Email"
                            value={email}
                            onChangeText={setEmail}
                            placeholder="Enter your email"
                        />
                    </View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => { setVisible(true); }}
                    >
                        <Text style={styles.buttonText}>Send me the magic link!</Text>
                    </TouchableOpacity>
                    <PasswordResetErrorAlert visible={visible} setVisible={setVisible} />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background_1,
    },
    scrollContainer: {
        flexGrow: 1,
        alignItems: 'center',
        paddingVertical: Dimens.padding,
    },
    innerContainer: {
        width: '90%',
        alignItems: 'center',
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
        marginBottom: 20,
    },
    input: {
        width: '100%',
    },
    button: {
        padding: 15,
        width: "100%",
        borderRadius: Dimens.buttonBorderRadius,
        backgroundColor: Colors.primary_1,
        alignItems: "center",
        marginVertical: 30,
    },
    buttonText: {
        color: "white",
        fontSize: Dimens.bodySize,
        fontFamily: "Montserrat_700Bold",
    },
});