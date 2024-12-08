import { Dimens } from "@/assets/Dimens";
import { Donation } from "@/models/Donation";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { DonationsCard } from "./DonationsCard";

interface DonationsProps {
    data: Donation[];
}
export function Donations({ data }: DonationsProps) {
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