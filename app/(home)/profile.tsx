import { Colors } from "@/assets/Colors";
import { Dimens } from "@/assets/Dimens";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Profile</Text>
            <Image
                source={require("../../assets/images/design-resources/profile-placeholder.png")}
                style={styles.profileImage}
            />
            <Text style={styles.name}>Name</Text>
            <Text style={styles.email}>emailaddress@gmail.com</Text>
            <View style={styles.divider} />
            <View style={{gap: 20}}>
                <TouchableOpacity style={styles.logoutButtonContainer} onPress={() => {}}>
                    <View style={{flexDirection: "row", alignItems: "center", gap: 10}}>
                        <Ionicons name="person-outline" size={24} color={Colors.primary_2} />
                        <Text style={styles.logoutButtonText}>My Profile</Text>
                    </View>
                    <Ionicons name="chevron-forward" size={24} color={Colors.primary_2} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.logoutButtonContainer} onPress={() => {}}>
                    <View style={{flexDirection: "row", alignItems: "center", gap: 10}}>
                        <Ionicons name="gift-outline" size={24} color={Colors.primary_2} />
                        <Text style={styles.logoutButtonText}>Donations given</Text>
                    </View>
                    <Ionicons name="chevron-forward" size={24} color={Colors.primary_2} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.logoutButtonContainer} onPress={() => {}}>
                    <View style={{flexDirection: "row", alignItems: "center", gap: 10}}>
                        <Ionicons name="fast-food-outline" size={24} color={Colors.primary_2} />
                        <Text style={styles.logoutButtonText}>Donations claimed</Text>
                    </View>
                    <Ionicons name="chevron-forward" size={24} color={Colors.primary_2} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.logoutButtonContainer} onPress={() => {}}>
                    <View style={{flexDirection: "row", alignItems: "center", gap: 10}}>
                        <Ionicons name="key-outline" size={24} color={Colors.primary_2} />
                        <Text style={styles.logoutButtonText}>Change Password</Text>
                    </View>
                    <Ionicons name="chevron-forward" size={24} color={Colors.primary_2} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.logoutButtonContainer} onPress={() => {router.dismissTo("/auth/login")}}>
                    <View style={{flexDirection: "row", alignItems: "center", gap: 10}}>
                        <Ionicons name="log-out-outline" size={24} color={Colors.primary_2} />
                        <Text style={styles.logoutButtonText}>Report a Problem</Text>
                    </View>
                    <Ionicons name="chevron-forward" size={24} color={Colors.primary_2} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.logoutButtonContainer} onPress={() => {router.dismissTo("/auth/login")}}>
                    <View style={{flexDirection: "row", alignItems: "center", gap: 10}}>
                        <Ionicons name="bug-outline" size={24} color={Colors.primary_2} />
                        <Text style={styles.logoutButtonText}>Logout</Text>
                    </View>
                    <Ionicons name="chevron-forward" size={24} color={Colors.primary_2} />
                </TouchableOpacity>
            </View>
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
    header: {
        fontSize: 20,
        textAlign: "center",
        fontFamily: "Montserrat_700Bold",
        marginTop: Dimens.padding
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        resizeMode: "contain",
        marginVertical: Dimens.padding,
    },
    name: {
        fontSize: Dimens.headerSize,
        fontFamily: "Montserrat_700Bold",
    },
    email: {
        fontSize: Dimens.bodySize,
        fontFamily: "Lato_400Regular",
    },
    divider: {
        width: "100%",
        height: 1,
        backgroundColor: Colors.primary_1,
        marginTop: 40,
        marginBottom: 20
    },
    logoutButtonContainer: {
        width: "100%",
        borderRadius: 5,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    logoutButtonText: {
        fontSize: Dimens.bodySize,
        fontFamily: "Lato_400Regular",
    }
})