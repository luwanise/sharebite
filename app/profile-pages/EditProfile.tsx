import { Colors } from "@/assets/Colors";
import { Dimens } from "@/assets/Dimens";
import { LoadingIndicator } from "@/components/Authentication/LoadingIndicator";
import { CustomTextInput } from "@/components/CustomTextInput";
import { ImageSelector } from "@/components/NewDonation/ImageSelector";
import { CountrySelector } from "@/components/Profile/CountrySelector";
import { auth } from "@/firebaseConfig";
import { User } from "@/models/User";
import { getUserDetails } from "@/utils/Profile/getUserDetails";
import { updateUserDetails } from "@/utils/Profile/updateUserDetails";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from "react-native";
import { Country } from "react-native-country-picker-modal";

export default function EditProfile() {
    const [profilePic, setProfilePic] = useState(auth.currentUser?.photoURL || "");
    const [username, setUsername] = useState(auth.currentUser?.displayName || "");
    const [email, setEmail] = useState(auth.currentUser?.email || "");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [countryCode, setCountryCode] = useState<Country['cca2']>("US");
    const [loading, setLoading] = useState(false);

    const handleSaveChanges = async () => {
        setLoading(true);

        const userDetails: User = {
            id: auth.currentUser?.uid,
            profilePic,
            username,
            email,
            phoneNumber,
            countryCode
        }
        
        await updateUserDetails(userDetails, setLoading);
        ToastAndroid.show("Profile updated successfully", ToastAndroid.SHORT);
    }

    const loadUserDetails = async () => {
        setLoading(true);
        const userDetails = await getUserDetails(auth.currentUser?.uid);
        if (userDetails){
            setProfilePic(userDetails.profilePic);
            setUsername(userDetails.username);
            setEmail(userDetails.email);
            setPhoneNumber(userDetails.phoneNumber);
            setCountryCode(userDetails.countryCode);
        }
        setLoading(false);
    };

    useEffect(() => {
        loadUserDetails();
    }, []);

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="chevron-back" size={24} color={Colors.primary_2} />
                </TouchableOpacity>
                <Text style={styles.header}>Edit Profile</Text>
                <View />
            </View>
            <ScrollView
                contentContainerStyle={styles.scrollContainer}
                keyboardShouldPersistTaps="handled"
            >
                <ImageSelector
                    image={profilePic}
                    setImage={setProfilePic}
                    asProfileIcon
                />
                <CustomTextInput
                    label="Username"
                    value={username}
                    onChangeText={setUsername}
                    placeholder="Enter username"
                    inputMode="text"
                />
                <CustomTextInput
                    label="Email"
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Enter email"
                    readonly
                />
                <CustomTextInput
                    label="Phone Number"
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                    placeholder="Enter phone number"
                    inputMode="tel"
                />
                <CountrySelector countryCode={countryCode} setCountryCode={setCountryCode}/>
                <TouchableOpacity style={styles.saveChangesButton} onPress={async() => await handleSaveChanges()}>
                    <Text style={styles.saveChangesText}>Save Changes</Text>
                </TouchableOpacity>
            </ScrollView>
            <LoadingIndicator loading={loading} />
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background_1
    },
    headerContainer: {
        width: '100%',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: Dimens.padding,
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: "space-between",
        alignItems: "center",
        padding: Dimens.padding,
        gap: Dimens.padding
    },
    header: {
        fontSize: 20,
        textAlign: "center",
        fontFamily: "Montserrat_700Bold",
    },
    saveChangesButton: {
        backgroundColor: Colors.primary_1,
        padding: 15,
        borderRadius: Dimens.buttonBorderRadius,
        marginBottom: 10,
        width: "100%"
    },
    saveChangesText: {
        fontSize: Dimens.buttonText,
        fontFamily: "Montserrat_700Bold",
        color: Colors.background_1,
        textAlign: "center",
    },
})