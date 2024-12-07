import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";

export default function DonationsDetailsScreen() {
    const { donation } = useLocalSearchParams();

    return (
        <Text>Donations Details: {donation}</Text>
    )
}