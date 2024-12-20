import { Colors } from "@/assets/Colors";
import { useLocalSearchParams } from "expo-router";
import { RefreshControl, ScrollView, StatusBar, StyleSheet, View } from "react-native";
import { HomePageHeader } from "@/components/HomePageHeader";
import { ThankYouList } from "@/components/ThankYous/ThankYouList";
import { Donations } from "@/components/Donations/Donations";
import useDonations from "@/hooks/useDonations";
import useThankYous from "@/hooks/useThankYous";
import { useState } from "react";

export default function HomeScreen() {

    const { donations, donationsLoading, refreshDonations } = useDonations();
    const { thankYous, thanksLoading, refreshThankYous } = useThankYous();
    const [refreshing, setRefreshing] = useState(false);

    return (
        <View style={styles.container}>
            <StatusBar translucent hidden />
            <HomePageHeader />
            <ScrollView refreshControl={
                <RefreshControl colors={[Colors.primary_2]} refreshing={refreshing} onRefresh={async () => {
                    setRefreshing(true);
                    await refreshDonations();
                    await refreshThankYous();
                    setRefreshing(false);
                }} />
            }>
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
