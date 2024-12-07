import { Colors } from "@/assets/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function FoodQuantitySelector() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.quantityButton} onPress={() => {}}>
                <Ionicons name="add" size={24} color={Colors.background_2} />
            </TouchableOpacity>
            <Text style={styles.quantityText}>1</Text>
            <TouchableOpacity style={styles.quantityButton} onPress={() => {}}>
                <Ionicons name="remove" size={24} color={Colors.background_2} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    quantityButton: {
        width: 30,
        height: 30,
        borderRadius: 10,
        backgroundColor: Colors.primary_2,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1
    },
    quantityText: {
        fontSize: 20,
        fontFamily: "Montserrat_700Bold",
        marginHorizontal: 10
    }
})