import { Colors } from "@/assets/Colors";
import { pickImage } from "@/utils/pickImage";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

interface ImageSelectorProps {
    image: string;
    setImage: CallableFunction;
}
export function ImageSelector({image, setImage}: ImageSelectorProps) {
    return (
        <View>
            <TouchableOpacity style={styles.imageContainer} onPress={() => {pickImage(setImage)}}>
                <Ionicons name="camera" size={40} color={Colors.primary_1} style={styles.cameraIcon}/>
                {image && <Image source={{ uri: image }} style={styles.image} />}
            </TouchableOpacity>

            {image && 
            <TouchableOpacity style={styles.removeImage} onPress={() => {setImage("")}}>
                <Ionicons name="close-circle" size={24} color={"#0007"} />
            </TouchableOpacity>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        width: 200,
        aspectRatio: 1,
        borderStyle: "dashed",
        borderWidth: 1,
        borderRadius: 10,
        borderColor: Colors.primary_1,
        justifyContent: "center",
        alignItems: "center",
    },
    cameraIcon: {
        position: "absolute",
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 10,
        resizeMode: "contain",
    },
    removeImage: {
        position: "absolute",
        top: -10,
        right: -10,
    }
})