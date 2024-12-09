import { Colors } from "@/assets/Colors";
import { Dimens } from "@/assets/Dimens";
import { ProfileHeader } from "@/components/Profile/ProfileHeader";
import { ProfileItem } from "@/components/Profile/ProfileItem";
import { StyleSheet, View } from "react-native";

export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            <ProfileHeader />
            <View style={styles.profileItemContainer}>
                <ProfileItem title="Edit Profile" icon="person-outline" />
                <ProfileItem title="Donations given" icon="gift-outline" />
                <ProfileItem title="Donations claimed" icon="fast-food-outline" />
                <ProfileItem title="Change Password" icon="key-outline" />
                <ProfileItem title="Report a Problem" icon="bug-outline" />
                <ProfileItem title="Logout" icon="log-out-outline" />
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