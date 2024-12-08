import { Colors } from "@/assets/Colors";
import { pickImage } from "@/utils/pickImage";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

interface ImageSelectorProps {
    image: string;
    setImage: CallableFunction;
}
export function ImageSelector({image, setImage}: ImageSelectorProps) {

    return (
        <TouchableOpacity style={styles.imageContainer} onPress={() => {pickImage(setImage)}}>
            {image && <Image source={{ uri: image }} style={styles.image} />}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        width: "100%",
        aspectRatio: 1,
        borderStyle: "dashed",
        borderWidth: 1,
        borderRadius: 10,
        borderColor: Colors.primary_1,
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
    },
})