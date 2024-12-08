import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FoodQuantitySelector } from "../FoodQuantitySelector";
import { Colors } from "@/assets/Colors";

interface QuantityAndExpirationProps {
    quantity: number;
    setQuantity: CallableFunction;
    expirationDate: Date;
    setExpirationDate: CallableFunction;
}
export function QuantityAndExpiration({quantity, setQuantity, expirationDate, setExpirationDate}: QuantityAndExpirationProps) {
    return (
        <View style={styles.quantityAndExpiration}>
            <View>
                <Text style={styles.quantityLabel}>Quantity </Text>
                <FoodQuantitySelector
                    foodQuantity={quantity}
                    setFoodQuantity={setQuantity}
                    maxQuantity={1000}
                />
            </View>
            <View style={styles.expirationDateContainer}>
                <Text style={styles.expirationLabel}>Expiration Date </Text>
                <TouchableOpacity style={styles.expirationDate} onPress={() => {}}>
                    <Text>{expirationDate.toDateString()}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    quantityAndExpiration: {
        width: "100%",
        flexDirection: "row",
        gap: 20,
        alignItems: "baseline",
    },
    quantityLabel: {
      flex: 1,
      fontSize: 16,
      fontFamily: "Lato_400Regular",
    },
    expirationLabel: {
      fontSize: 16,
      marginBottom: 5,
      fontFamily: "Lato_400Regular",
    },
    expirationDateContainer: {
        flex: 1,
    },
    expirationDate: {
      borderWidth: 1,
      borderColor: Colors.primary_1,
      borderRadius: 10,
      padding: 14,
      fontSize: 16,
      backgroundColor: Colors.secondary_2,
      textAlignVertical: "center",
    },
})