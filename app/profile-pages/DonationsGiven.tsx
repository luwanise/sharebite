import { Colors } from "@/assets/Colors";
import { RefreshControl, ScrollView, StatusBar, StyleSheet, View } from "react-native";
import { Donations } from "@/components/Donations/Donations";
import useDonations from "@/hooks/useDonations";
import { useState } from "react";
import { DonationsGivenHeader } from "@/components/Profile/DonationsGivenHeader";

export default function DonationsGiven() {

    const { donations, donationsLoading, refreshDonations } = useDonations();
    const [refreshing, setRefreshing] = useState(false);

    return (
        <View style={styles.container}>
            <StatusBar translucent hidden />
            <DonationsGivenHeader />
            <ScrollView refreshControl={
                <RefreshControl colors={[Colors.primary_2]} refreshing={refreshing} onRefresh={async () => {
                    setRefreshing(true);
                    await refreshDonations();
                    setRefreshing(false);
                }} />
            }>
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
