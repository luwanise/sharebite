import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { Colors } from "@/assets/Colors";
import { Dimens } from "@/assets/Dimens";
import { CustomTextInput } from "@/components/CustomTextInput";
import { useState } from "react";
import PasswordResetErrorAlert from "@/components/Authentication/PasswordResetErrorAlert";
import { auth } from "@/firebaseConfig";
import { sendPasswordResetEmail } from "firebase/auth";
import { Validation } from "@/utils/Validation";
import { showToastError } from "@/utils/showToastError";
import { LoadingIndicator } from "@/components/Authentication/LoadingIndicator";

export default function forgotPassword() {
    const [email, setEmail] = useState("");
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const validateForm = () => {
        if (!Validation.validateEmail(email)) {
            setLoading(false);
            throw new Error("auth/invalid-email");
        }
      
        return true;
    };

    const resetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent
                setLoading(false);
                router.replace("/auth/forgot-password/PasswordReset")
            })
            .catch((error) => {
                const errorCode = error.code;
                // handle error
                setLoading(false);
                if (errorCode === "auth/user-not-found") {
                    setErrorMessage("It's not you, it's us. We couldn’t find that email. Double-check and give it another shot!");
                } else if (errorCode === "auth/network-request-failed") {
                    setErrorMessage("Whoops! Looks like we’re having trouble connecting. Please check your internet and give it another go!");
                } else {
                    setErrorMessage(error.code);
                }

                setVisible(true);
            })
    }

    const handlePasswordReset = () => {
        setLoading(true);
        try{
            validateForm();
            resetPassword();
        }
        catch (error: any) {
            setLoading(false);
            showToastError(error.message);
        }
    }

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
                        onPress={() => { handlePasswordReset() }}
                    >
                        <Text style={styles.buttonText}>Send me the magic link!</Text>
                    </TouchableOpacity>
                    <PasswordResetErrorAlert visible={visible} setVisible={setVisible} errorMessage={errorMessage} />
                </View>
            </ScrollView>
            <LoadingIndicator loading={loading} />
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
        width: '100%',
        padding: 20,
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
        width: '90%',
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
    },
});