import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "@/assets/Colors";
import { CustomTextInput } from "@/components/CustomTextInput";
import { useState } from "react";
import { CustomOrSeparator } from "@/components/Authentication/CustomOrSeparator";
import { Link, router } from "expo-router";
import IonIcons from "@expo/vector-icons/Ionicons";
import { Dimens } from "@/assets/Dimens";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebaseConfig";
import { showToastError } from "@/utils/showToastError";
import { Validation } from "@/utils/Validation";
import { LoadingIndicator } from "@/components/Authentication/LoadingIndicator";

export default function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const validateForm = () => {
        if (!Validation.validateEmail(email)) {
            setLoading(false);
            throw new Error("auth/invalid-email");
        }
      
        if (!Validation.validatePassword(password)) {
            setLoading(false);
            throw new Error("auth/weak-password");
        }
      
        return true;};

    const signInUser = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                setLoading(false);
                const userId = userCredential.user.uid;
                router.dismissTo({
                    "pathname": "/(home)",
                    "params": { "userId": userId }
                })
            })
            .catch((error) => {
                setLoading(false);
                showToastError(error.code);
            });
    }    

    const handleSignIn = () => {
        setLoading(true);
        try{
            validateForm();
            signInUser();
        }
        catch (error: any) {
            setLoading(false);
            showToastError(error.message);
        }
    }
    
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>Welcome{"\n"}Back!</Text>
                <Image
                    style={styles.loginImage}
                    source={require("../../assets/images/design-resources/login_image.png")}
                />
            </View>
            <View style={styles.textInputContainer}>
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
                    secureTextEntry={true}
                />
            </View>
            <Link href={"/auth/forgot-password/forgotPassword"} style={styles.forgotPassword}>Forgot Password?</Link>
            <TouchableOpacity
                style={styles.button}
                onPress={() => handleSignIn()}
            >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <View style={styles.registerContainer}>
                <Text style={styles.text}>Don't have an account?</Text>
                <Link href={"/auth/signup"} style={styles.register}>Register</Link>
            </View>
            <CustomOrSeparator />
            <TouchableOpacity style={styles.googleButton} onPress={() => {}}>
                <IonIcons name="logo-google" size={24} color={Colors.primary_2} />
                <Text style={styles.googleButtonText}>Sign Up with Google</Text>
            </TouchableOpacity>
            <LoadingIndicator loading={loading} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: Colors.background_1,
    },
    headerContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: Dimens.padding,
    },
    header: {
        fontSize: Dimens.headerSize,
        fontFamily: "Montserrat_700Bold",
        marginEnd: 10,
        textAlign: 'center',
    },
    loginImage: {
        flex: 1,
        resizeMode: "contain",
        aspectRatio: 6/4.5,
    },
    textInputContainer: {
        width: "100%",
        paddingHorizontal: Dimens.padding,
        gap: Dimens.padding,
    },
    forgotPassword: {
        width: "100%",
        paddingStart: Dimens.padding,
        color: Colors.primary_1,
        fontSize: Dimens.bodySize,
        fontFamily: "Lato_400Regular",
    },
    button: {
        width: "70%",
        padding: 15,
        borderRadius: Dimens.buttonBorderRadius,
        backgroundColor: Colors.primary_1,
        alignItems: "center"
    },
    buttonText: {
        color: "white",
        fontSize: Dimens.buttonText,
        fontFamily: "Montserrat_700Bold",
    },
    registerContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
    },
    text: {
        fontSize: Dimens.bodySize,
        fontFamily: "Lato_400Regular",
    },
    register: {
        color: Colors.primary_2,
        fontSize: Dimens.bodySize,
        fontFamily: "Lato_400Regular",
    },
    googleButton: {
        flexDirection: "row",
        gap: 10,
        width: "70%",
        padding: 15,
        borderRadius: Dimens.buttonBorderRadius,
        borderColor: Colors.primary_2,
        borderWidth: 1,
        backgroundColor: Colors.background_2,
        alignItems: "center",
        justifyContent: "center"
    },
    googleButtonText: {
        fontSize: 16,
        fontFamily: "Lato_400Regular",
        color: Colors.primary_2,
    }
})