import { Dimens } from "@/assets/Dimens";
import { Donation } from "@/models/Donation";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { DonationsCard } from "./DonationsCard";
import { LoadingIndicator } from "../Authentication/LoadingIndicator";

interface DonationsProps {
    data: Donation[];
    loading: boolean;
}
export function Donations({ data, loading }: DonationsProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.donationsHeading}>Donations</Text>
            <FlatList
                style={styles.donationsList}
                data={data}
                renderItem={({ item }) => <DonationsCard item={item} />}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.contentContainer}
                showsVerticalScrollIndicator={false}
                scrollEnabled={false}
            />
            <LoadingIndicator loading={loading} bgOverlay={false} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    donationsList: {
        marginHorizontal: Dimens.padding,
    },
    donationsHeading: {
        fontFamily: "Montserrat_700Bold",
        fontSize: 20,
        padding: Dimens.padding,
    },
    contentContainer: {
        gap: 15,
    },
})