import React, { useState } from "react";
import { Colors } from "@/assets/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import DateTimePickerModal from "react-native-modal-datetime-picker"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ExpirationDateSelectorProps {
    expirationDate: Date;
    setExpirationDate: (date: Date) => void;
}

export function ExpirationDateSelector({ expirationDate, setExpirationDate }: ExpirationDateSelectorProps) {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => setDatePickerVisibility(true);
    const hideDatePicker = () => setDatePickerVisibility(false);

    const handleConfirm = (date: Date) => {
        setExpirationDate(date);
        hideDatePicker();
    };

    return (
        <View style={styles.expirationDateContainer}>
            <Text style={styles.expirationLabel}>Expiration Date</Text>
            <TouchableOpacity style={styles.expirationDate} onPress={showDatePicker}>
                <Ionicons name="calendar-outline" size={24} color={Colors.primary_1} />
                <Text style={styles.expirationDateText}>{expirationDate.toDateString()}</Text>
                <View />
            </TouchableOpacity>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                date={expirationDate}
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
                minimumDate={new Date()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
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
        backgroundColor: Colors.secondary_2,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 10,
    },
    expirationDateText: {
        fontSize: 16,
        fontFamily: "Lato_400Regular",
        textAlignVertical: "center",
    },
});