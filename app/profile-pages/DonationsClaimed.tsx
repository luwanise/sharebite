import { Colors } from "@/assets/Colors";
import { Dimens } from "@/assets/Dimens";
import { Donations } from "@/components/Donations/Donations";
import { auth } from "@/firebaseConfig";
import useDonations from "@/hooks/useDonations";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { useState } from "react";
import { Image, RefreshControl, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function DonationsClaimed() {
    const [refreshing, setRefreshing] = useState(false);
    const { donations, donationsLoading, refreshDonations } = useDonations(undefined, auth.currentUser?.uid);

    return (
        <View style={styles.container}>
            <Image
                source={require("../../assets/images/design-resources/top_right_design.png")}
                style={styles.image}
            />
            <Text style={styles.header}>Claimed{'\n'}Donations</Text>
            <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                <Ionicons name="arrow-back" size={24} color={Colors.primary_2} />
            </TouchableOpacity>
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
    },
    backButton: {
        position: "absolute",
        top: 40,
        left: 20,
    },
    header: {
        fontSize: Dimens.headerSize,
        color: Colors.primary_1,
        fontFamily: "Montserrat_700Bold",
        textAlign: 'center',
        marginTop: 20
    },
    image: {
        position: "absolute",
        top: 0,
        right: 0,
        width: 120,
        height: 120
    },
})