import { StyleSheet, Text, View } from "react-native";

export default function DonationsGiven() {
    return (
        <View style={styles.container}>
            <Text>Donations Given</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})