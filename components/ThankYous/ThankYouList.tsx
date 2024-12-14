import { FlatList, StyleSheet, Text, View } from "react-native";
import { ThankYouCard } from "./ThankYouCard";
import { ThankYou } from "@/models/ThankYou";
import { Dimens } from "@/assets/Dimens";
import { LoadingIndicator } from "../Authentication/LoadingIndicator";

interface ThankYouListProps {
    data: ThankYou[];
    loading: boolean;
}
export function ThankYouList({data, loading}: ThankYouListProps) {
    return (
        <View>
            <Text style={styles.impact}>Our Impact</Text>
            <FlatList
                style={styles.container}
                data={data}
                renderItem={({ item }) => <ThankYouCard item={item} />}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.contentContainer}
                showsHorizontalScrollIndicator={false}
                horizontal
            />
            <LoadingIndicator loading={loading} bgOverlay={false} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: Dimens.padding,
    },
    impact: {
        fontFamily: "Montserrat_700Bold",
        fontSize: 20,
        padding: Dimens.padding,
    },
    contentContainer: {
        gap: 15,
        paddingRight: 40,
    },
})