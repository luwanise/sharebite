import { Colors } from "@/assets/Colors";
import { Dimens } from "@/assets/Dimens";
import { auth } from "@/firebaseConfig";
import { Image, StyleSheet, Text, View } from "react-native";

export function ProfileHeader() {
    return (
        <View style={styles.container}>
            {auth.currentUser?.photoURL ? (
                <Image
                    source={{ uri: auth.currentUser.photoURL }}
                    style={styles.profileImage}
                />
            ) : (
                <Image
                    source={require("../../assets/images/design-resources/profile-placeholder.png")}
                    style={styles.profileImage}
                />
            )}
            <Text style={styles.name}>{auth.currentUser?.displayName}</Text>
            <Text style={styles.email}>{auth.currentUser?.email}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center",
        backgroundColor: Colors.primary_2,
        borderBottomStartRadius: 25,
        borderBottomEndRadius: 25,
        padding: Dimens.padding
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        resizeMode: "contain",
        marginVertical: Dimens.padding,
        borderWidth: 3,
        borderColor: Colors.background_2,
        backgroundColor: "#fff7"
    },
    name: {
        fontSize: 20,
        fontFamily: "Montserrat_700Bold",
        marginBottom: 5,
        color: Colors.background_2
    },
    email: {
        fontSize: Dimens.bodySize,
        fontFamily: "Lato_400Regular",
        color: Colors.background_2,
    }
})