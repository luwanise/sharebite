import * as ImagePicker from "expo-image-picker";

export const pickImage = async (setImage: CallableFunction) => {
    // Ask for permission
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
        alert('Permission to access gallery is required!');
        return;
    }

    // Open the image picker
    const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1], // optional cropping
        quality: 1, // image quality
    });

    if (!result.canceled) {
        setImage(result.assets[0].uri); // Save the image URI
    }
};