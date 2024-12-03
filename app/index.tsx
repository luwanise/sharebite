import { Colors } from "@/assets/Colors";
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";

export default function WelcomeScreen() {

  return (
    <View style={styles.container}>
        <StatusBar translucent hidden />
        <View style={styles.logoContainer}>
            <Image
                source={require("../assets/images/icon.png")}
                style={styles.icon}
            />
            <Image
                source={require("../assets/images/design-resources/top_right_design.png")}
                style={styles.image}
            />
        </View>
        <Image
            source={require("../assets/images/design-resources/welcome_image.png")}
            style={styles.welcomeImage}
        />
        <View style={styles.textContainer}>
            <Text style={styles.header}>Share a Bite, Change a Life</Text>
            <Text style={styles.text}>Connect surplus food with those who need it. Make a difference, one meal at a time.</Text>
        </View>
        <TouchableOpacity
            style={styles.button}
            onPress={() => {router.navigate("/login")}}
        >
            <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: Colors.background_1
  },
  logoContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    marginStart: 20,
    width: 100,
    height: 100
  },
  image: {
    width: 120,
    height: 120
  },
  welcomeImage: {
    width: 300,
    height: 300,
    resizeMode: "contain"
  },
  textContainer: {
    width: "80%",
    alignItems: "center",
  },
  header: {
    fontSize: 20,
    textAlign: "center",
    fontFamily: "Montserrat_700Bold"
  },
  text: {
    fontSize: 16,
    marginVertical: 10,
    textAlign: "center",
    fontFamily: "Lato_400Regular"
  },
  button: {
    width: "70%",
    marginBottom: 60,
    padding: 15,
    borderRadius: 10,
    backgroundColor: Colors.primary_1,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontFamily: "Montserrat_700Bold",
  }
})