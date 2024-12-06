import { FlatList, StyleSheet } from "react-native";
import { ThankYouCard } from "./ThankYouCard";
import { ThankYou } from "@/models/ThankYou";
import { Dimens } from "@/assets/Dimens";

interface ThankYouListProps {
    data: ThankYou[];
}
export function ThankYouList({data}: ThankYouListProps) {
    return (
        <FlatList
            style={styles.container}
            data={data}
            renderItem={({ item }) => <ThankYouCard item={item} />}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.contentContainer}
            horizontal
        />
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: Dimens.padding,
    },
    contentContainer: {
        gap: 15,
    },
})