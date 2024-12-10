import { StyleSheet, Text, View } from "react-native";

export function CustomOrSeparator() {
    return (
        <View style={styles.separatorContainer}>
            <View style={styles.line} />
            <Text style={styles.orText}>OR</Text>
            <View style={styles.line} />
        </View>
    )
}

const styles = StyleSheet.create({
    separatorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: 'gray',
    },
    orText: {
        marginHorizontal: 10,
        fontFamily: "Montserrat_700Bold",
    },
})