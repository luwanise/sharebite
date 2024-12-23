import { Colors } from "@/assets/Colors";
import { Dimens } from "@/assets/Dimens";
import { ProfileHeader } from "@/components/Profile/ProfileHeader";
import { ProfileItem } from "@/components/Profile/ProfileItem";
import { auth } from "@/firebaseConfig";
import { router } from "expo-router";
import { StyleSheet, ToastAndroid, View } from "react-native";

export default function ProfileScreen() {

    const showNotImplementedToast = () => {
        ToastAndroid.show("Feature not implemented", ToastAndroid.SHORT);
    };

    const logout = () => {
        auth.signOut();
        router.dismissTo("/auth/login")
    }

    return (
        <View style={styles.container}>
            <ProfileHeader />
            <View style={styles.profileItemContainer}>
                <ProfileItem title="Edit Profile" icon="person-outline" onPress={() => router.push("/profile-pages/EditProfile")} />
                <ProfileItem title="Donations given" icon="gift-outline" onPress={() => router.push("/profile-pages/DonationsGiven")} />
                <ProfileItem title="Donations claimed" icon="fast-food-outline" onPress={() => router.push("/profile-pages/DonationsClaimed")} />
                <ProfileItem title="Change Password" icon="key-outline" onPress={showNotImplementedToast} />
                <ProfileItem title="Notifications" icon="notifications-outline" onPress={showNotImplementedToast} />
                <ProfileItem title="Report a Problem" icon="bug-outline" onPress={showNotImplementedToast} />
                <ProfileItem title="Logout" icon="log-out-outline" onPress={logout} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: Colors.background_1
    },
    profileItemContainer: {
        gap: 20,
        padding: Dimens.padding,
    }
})