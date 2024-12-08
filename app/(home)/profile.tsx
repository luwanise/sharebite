import { Colors } from "@/assets/Colors";
import { Dimens } from "@/assets/Dimens";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.logoutButton} onPress={() => {router.dismissTo("/auth/login")}}>
                <View style={styles.logoutButtonContainer}>
                    <Ionicons name="log-out-outline" size={24} color={Colors.background_2} />
                    <Text style={styles.logoutButtonText}>Logout</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: Dimens.padding
    },
    logoutButton: {
        width: "100%",
        backgroundColor: "red",
        padding: 10,
        borderRadius: 5,
        alignItems: "center"
    },
    logoutButtonContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    logoutButtonText: {
        color: "white",
        fontSize: 20,
        fontFamily: "Montserrat_700Bold",
    }
})