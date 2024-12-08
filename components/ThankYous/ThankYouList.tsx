import { FlatList, StyleSheet, Text, View } from "react-native";
import { ThankYouCard } from "./ThankYouCard";
import { ThankYou } from "@/models/ThankYou";
import { Dimens } from "@/assets/Dimens";

interface ThankYouListProps {
    data: ThankYou[];
}
export function ThankYouList({data}: ThankYouListProps) {
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