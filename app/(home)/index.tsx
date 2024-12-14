import { Colors } from "@/assets/Colors";
import { useLocalSearchParams } from "expo-router";
import { ScrollView, StatusBar, StyleSheet, View } from "react-native";
import { HomePageHeader } from "@/components/HomePageHeader";
import { ThankYouList } from "@/components/ThankYous/ThankYouList";
import { getThankYous } from "@/utils/firebase/getThankYous";
import { Donations } from "@/components/Donations/Donations";
import useDonations from "@/hooks/useDonations";

export default function HomeScreen() {
    const { userId } = useLocalSearchParams();

    const thankYous = getThankYous();
    const { donations, donationsLoading } = useDonations();

    return (
        <View style={styles.container}>
            <StatusBar translucent hidden />
            <HomePageHeader />
            <ScrollView>
                <ThankYouList data={thankYous} />
                <Donations data={donations} loading={donationsLoading}/>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background_1,
    }
})
