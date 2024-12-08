import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView, KeyboardAvoidingView, Platform, Alert, ActivityIndicator, } from "react-native";
import { Colors } from "@/assets/Colors";
import { CustomTextInput } from "@/components/CustomTextInput";
import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { Dimens } from "@/assets/Dimens";
import { ToastAndroid } from "react-native";;
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebaseConfig";

export default function SignUpScreen() {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const [loading, setLoading] = useState(false);

const validateName = () => {
    return name.length > 0;
}

const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    return emailRegex.test(email);
}

const validatePassword = () => {
    const passwordRegex = /^(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
};

const validatePasswordsMatch = () => {
    return password === confirmPassword;
}

const validateForm = () => {
  if (!validateName()) {
    setLoading(false);
    ToastAndroid.show('Please enter your name', ToastAndroid.LONG);
    return false;
  }

  if (!validateEmail()) {
    setLoading(false);
    ToastAndroid.show("Please enter a valid email", ToastAndroid.LONG);
    return false;
  }

  if (!validatePassword()) {
    setLoading(false);
    ToastAndroid.show('Password must be at least 8 characters long and contain at least one digit.', ToastAndroid.LONG);
    return false;
  }

  if (!validatePasswordsMatch()) {
    setLoading(false);
    ToastAndroid.show("Passwords do not match", ToastAndroid.LONG);
    return false;
  }

  return true;};

const signUpUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed up
        setLoading(false);
        const userId = userCredential.user.uid;
        router.dismissAll();
        router.replace({
            "pathname": "/(home)",
            "params": { "userId": userId }
        });
    })
    .catch((error) => {
        setLoading(false);
        if (error.code === 'auth/email-already-in-use') {
            ToastAndroid.show('Email already in use', ToastAndroid.LONG);
        } else if (error.code === 'auth/network-request-failed') {
            ToastAndroid.show('Looks like we’re having trouble connecting. Please check your internet connection and try again!', ToastAndroid.LONG);
        } else {
            ToastAndroid.show(`An error occurred: ${error.message}`, ToastAndroid.LONG);
        }
});
}

const handleSignUp = () => {
    setLoading(true);
    if (!validateForm()) {
        return;
    }
    signUpUser();
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
        {loading && (
            <View style={styles.loaderContainer}>
                <ActivityIndicator size="large" color={Colors.primary_2} />
            </View>
        )}
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
    loaderContainer: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
    },
});
