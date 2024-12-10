import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { Colors } from "@/assets/Colors";
import { CustomTextInput } from "@/components/CustomTextInput";
import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { Dimens } from "@/assets/Dimens";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebaseConfig";
import { Validation } from "@/utils/Validation";
import { showToastError } from "@/utils/showToastError";
import { LoadingIndicator } from "@/components/Authentication/LoadingIndicator";

export default function SignUpScreen() {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const [loading, setLoading] = useState(false);

const validateForm = () => {
  if (!Validation.validateName(name)) {
    setLoading(false);
    throw new Error("auth/invalid-name");
  }

  if (!Validation.validateEmail(email)) {
    setLoading(false);
    throw new Error("auth/invalid-email");
  }

  if (!Validation.validatePassword(password)) {
    setLoading(false);
    throw new Error("auth/weak-password");
  }

  if (!Validation.validatePasswordMatch(password, confirmPassword)) {
    setLoading(false);
    throw new Error("auth/password-mismatch");
  }

  return true;
};

const signUpUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed up
        setLoading(false);
        router.dismissTo({
            "pathname": "/(home)",
            "params": { "userId": userCredential.user.uid }
        });
    })
    .catch((error) => {
        setLoading(false);
        showToastError(error.code);
    });
}

const handleSignUp = () => {
    setLoading(true);
    try{
        validateForm();
        signUpUser();
    }
    catch (error: any) {
        setLoading(false);
        showToastError(error.message);
    }
}

return (
    <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
    >
        <ScrollView
            contentContainerStyle={styles.scrollContainer}
            keyboardShouldPersistTaps="handled"
        >
            <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                <Ionicons name="arrow-back" size={24} color={Colors.background_1} />
            </TouchableOpacity>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>Join the{"\n"}Movement!</Text>
                <Image
                    style={styles.signupImage}
                    source={require("../../assets/images/design-resources/signup_image.png")}
                />
            </View>
            <View style={styles.textInputContainer}>
            <CustomTextInput
                label="Name"
                value={name}
                onChangeText={setName}
                placeholder="Enter your name"
            />
            <CustomTextInput
                label="Email"
                value={email}
                onChangeText={setEmail}
                placeholder="Enter your email"
            />
            <CustomTextInput
                label="Password"
                value={password}
                onChangeText={setPassword}
                placeholder="Enter your password"
                secureTextEntry
            />
            <CustomTextInput
                label="Confirm Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                placeholder="Confirm password"
                secureTextEntry
            />
            </View>
            <TouchableOpacity style={styles.button} onPress={() => {handleSignUp()}}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            <View style={styles.separatorContainer}>
                <View style={styles.line} />
                <Text style={styles.orText}>OR</Text>
                <View style={styles.line} />
            </View>
            <TouchableOpacity style={styles.googleButton} onPress={() => {}}>
                <Ionicons name="logo-google" size={24} color={Colors.background_2} />
                <Text style={styles.googleButtonText}>Sign Up with Google</Text>
            </TouchableOpacity>
        </ScrollView>
        <LoadingIndicator loading={loading} />
    </KeyboardAvoidingView>
);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary_1,
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    backButton: {
        position: "absolute",
        top: 30,
        left: 20,
    },
    headerContainer: {
        marginTop: 30,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    header: {
        fontSize: Dimens.headerSize,
        color: Colors.background_1,
        fontFamily: "Montserrat_700Bold",
        marginEnd: 10,
        textAlign: 'center',
    },
    signupImage: {
        flex: 1,
        resizeMode: "contain",
        aspectRatio: 6/4.5,
    },
    textInputContainer: {
        width: "100%",
        backgroundColor: Colors.background_1,
        borderRadius: 20,
        marginTop: Dimens.padding,
        padding: Dimens.padding,
        gap: Dimens.padding
    },
    button: {
        width: "80%",
        padding: 15,
        borderRadius: Dimens.buttonBorderRadius,
        backgroundColor: Colors.background_1,
        alignItems: "center",
        marginTop: 20
    },
    buttonText: {
        color: Colors.primary_1,
        fontSize: Dimens.buttonText,
        fontFamily: "Montserrat_700Bold",
    },
    separatorContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: "80%",
        marginVertical: 10,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: Colors.background_1,
    },
    orText: {
        marginHorizontal: 10,
        color: Colors.background_1,
        fontFamily: "Montserrat_700Bold",
    },
    googleButton: {
        flexDirection: "row",
        width: "80%",
        padding: 15,
        borderRadius: Dimens.buttonBorderRadius,
        borderColor: Colors.background_2,
        backgroundColor: Colors.primary_2,
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    googleButtonText: {
        fontSize: 16,
        fontFamily: "Lato_400Regular",
        color: Colors.background_2,
        marginLeft: 10,
    },
});
