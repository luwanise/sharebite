import { Colors } from "@/assets/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface FoodQuantitySelectorProps {
    foodQuantity: number;
    setFoodQuantity: CallableFunction;
    maxQuantity: number;
    heading?: boolean;
}

export function FoodQuantitySelector({foodQuantity, setFoodQuantity, maxQuantity, heading = false}: FoodQuantitySelectorProps) {

    const increasedQuantity = () => {
        const quantity = foodQuantity + 1;
        if (quantity > maxQuantity) {
            return;
        }
        setFoodQuantity(quantity);
    };

    const decreasedQuantity = () => {
        const quantity = foodQuantity - 1;
        if (quantity == 0) {
            return;
        }
        setFoodQuantity(quantity);
    };

    return (
        <View>
            {heading && <Text style={styles.quantityLabel}>Quantity</Text>}
            <View style={styles.container}>
                <TouchableOpacity style={styles.quantityButton} onPress={() => {increasedQuantity()}}>
                    <Ionicons name="add" size={24} color={Colors.background_2} />
                </TouchableOpacity>
                <Text style={styles.quantityText}>{foodQuantity}</Text>
                <TouchableOpacity style={styles.quantityButton} onPress={() => {decreasedQuantity()}}>
                    <Ionicons name="remove" size={24} color={Colors.background_2} />
                </TouchableOpacity>
            </View>
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
    },
    quantityText: {
        fontSize: 20,
        fontFamily: "Montserrat_700Bold",
        marginHorizontal: 10
    },
    quantityLabel: {
        flex: 1,
        fontSize: 16,
        fontFamily: "Lato_400Regular",
    }
})