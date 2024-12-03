import { Link } from "expo-router";
import { StatusBar, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <StatusBar translucent hidden />
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Link href="/welcome">Welcome</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})