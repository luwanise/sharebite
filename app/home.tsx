import { Colors } from "@/assets/Colors";
import { useLocalSearchParams } from "expo-router";
import { StatusBar, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
    const { userId } = useLocalSearchParams();

    return (
        <View style={styles.container}>
            <StatusBar translucent hidden />
            <Text>Home</Text>
            <Text>User ID: {userId}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.background_1,
    }
})