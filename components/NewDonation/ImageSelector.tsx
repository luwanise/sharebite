import { Colors } from "@/assets/Colors";
import { pickImage } from "@/utils/pickImage";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

interface ImageSelectorProps {
    image: string;
    setImage: (image: string) => void;
    asProfileIcon?: boolean;
}

export function ImageSelector({ image, setImage, asProfileIcon = false }: ImageSelectorProps) {
    return (
        <View>
            <TouchableOpacity
                style={[styles.imageContainer, asProfileIcon && styles.profileIcon]}
                onPress={() => pickImage(setImage)}
            >
                <Ionicons name="camera" size={40} color={Colors.primary_1} style={styles.cameraIcon} key="camera-icon" />
                {image && (
                    <Image
                        source={{ uri: image }}
                        style={[styles.image, asProfileIcon && styles.profileIcon]}
                        alt="Selected image"
                    />
                )}
            </TouchableOpacity>

            {image && (
                <TouchableOpacity
                    style={[styles.removeImage, asProfileIcon && styles.profileRemoveImage]}
                    onPress={() => setImage("")}
                >
                    <Ionicons name="close-circle" size={24} color={"#0007"} key="close-icon" />
                </TouchableOpacity>
            )}
        </View>
    );
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
    profileIcon: {
        borderRadius: 75,
        width: 150,
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
    },
    profileRemoveImage: {
        position: "absolute",
        top: 7,
        right: 7,
    }
})