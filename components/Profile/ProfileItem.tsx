import { Colors } from "@/assets/Colors";
import { Dimens } from "@/assets/Dimens";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ProfileItemProps {
    title: string;
    icon: any;
    onPress: () => void;
}
export function ProfileItem({title, icon, onPress}: ProfileItemProps) {
    return (
        <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
            <View style={{flexDirection: "row", alignItems: "center", gap: 10}}>
                <Ionicons name={icon} size={24} color={Colors.primary_1} />
                <Text style={styles.buttonText}>{title}</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color={Colors.primary_2} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: "100%",
        borderRadius: 5,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    buttonText: {
        fontSize: Dimens.bodySize,
        fontFamily: "Lato_400Regular",
    }
})