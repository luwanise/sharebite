import { Colors } from "@/assets/Colors";
import { useLocalSearchParams } from "expo-router";
import { StatusBar, StyleSheet, View } from "react-native";
import { getThankYous } from "../firebase/getThankYous";
import { ThankYouList } from "@/components/ThankYouList";
import { HomePageHeader } from "@/components/HomePageHeader";

export default function HomeScreen() {
    const { userId } = useLocalSearchParams();
    const data = getThankYous();

    return (
        <View style={styles.container}>
            <StatusBar translucent hidden />
            <HomePageHeader />
            <ThankYouList data={data} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background_1,
    }
})
