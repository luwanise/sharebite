import { Colors } from "@/assets/Colors";
import { Dimens } from "@/assets/Dimens";
import { CustomTextInput } from "@/components/CustomTextInput";
import { FoodQuantitySelector } from "@/components/FoodQuantitySelector";
import { ExpirationDateSelector } from "@/components/NewDonation/ExpirationDateSelector";
import { ImageSelector } from "@/components/NewDonation/ImageSelector";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function NewDonationScreen() {
    const [image, setImage] = useState("");
    const [foodName, setFoodName] = useState("");
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [expirationDate, setExpirationDate] = useState(new Date());
    const [location, setLocation] = useState("");

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Create a new donation</Text>
            <ImageSelector 
                image={image} 
                setImage={setImage} 
            />
            <View style={styles.inputContainer}>
                <CustomTextInput
                    label="Food Name"
                    value={foodName}
                    onChangeText={setFoodName}
                    placeholder="Enter food name"
                />
                <CustomTextInput
                    label="Description"
                    value={description}
                    onChangeText={setDescription}
                    placeholder="Enter description"
                />
                <View style={styles.quantityAndExpiration}>
                    <FoodQuantitySelector
                        foodQuantity={quantity}
                        setFoodQuantity={setQuantity}
                        maxQuantity={1000}
                        heading
                    />
                    <ExpirationDateSelector expirationDate={expirationDate} setExpirationDate={setExpirationDate} />
                </View>
                <CustomTextInput
                    label="Location"
                    value={location}
                    onChangeText={setLocation}
                    placeholder="Enter location"
                />
            </View>
            <TouchableOpacity style={styles.donateButton}>
                <Text style={styles.donateButtonText}>Donate</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: Colors.background_1,
        padding: Dimens.padding,
        gap: Dimens.padding
    },
    header: {
        fontSize: 20,
        fontFamily: "Montserrat_700Bold",
    },
    inputContainer: {
        width: "100%",
        gap: 10
    },
    donateButton: {
        backgroundColor: Colors.primary_1,
        padding: 15,
        borderRadius: Dimens.buttonBorderRadius,
        marginBottom: 10,
        width: "100%"
    },
    donateButtonText: {
        fontSize: Dimens.buttonText,
        fontFamily: "Montserrat_700Bold",
        color: Colors.background_1,
        textAlign: "center",
    },
    quantityAndExpiration: {
        width: "100%",
        flexDirection: "row",
        gap: 20,
        alignItems: "baseline",
    }
})