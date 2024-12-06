import { Colors } from "@/assets/Colors";
import { useLocalSearchParams } from "expo-router";
import { StatusBar, StyleSheet, View } from "react-native";
import { HomePageHeader } from "@/components/HomePageHeader";
import { ThankYouList } from "@/components/ThankYouList";
import { getThankYous } from "@/firebase/getThankYous";
import { Donations } from "@/components/Donations";
import { getDonations } from "@/firebase/getDonations";

export default function HomeScreen() {
    const { userId } = useLocalSearchParams();
    const thankYous = getThankYous();
    const donations = getDonations();

    return (
        <View style={styles.container}>
            <StatusBar translucent hidden />
            <HomePageHeader />
            <ThankYouList data={thankYous} />
            <Donations data={donations}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background_1,
    }
})
