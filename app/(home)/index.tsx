import { Colors } from "@/assets/Colors";
import { useLocalSearchParams } from "expo-router";
import { ScrollView, StatusBar, StyleSheet, View } from "react-native";
import { HomePageHeader } from "@/components/HomePageHeader";
import { ThankYouList } from "@/components/ThankYous/ThankYouList";
import { Donations } from "@/components/Donations/Donations";
import useDonations from "@/hooks/useDonations";
import useThankYous from "@/hooks/useThankYous";

export default function HomeScreen() {

    const { donations, donationsLoading } = useDonations();
    const { thankYous, thanksLoading } = useThankYous();

    return (
        <View style={styles.container}>
            <StatusBar translucent hidden />
            <HomePageHeader />
            <ScrollView>
                <ThankYouList data={thankYous} loading={thanksLoading} />
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
