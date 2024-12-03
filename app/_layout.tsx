import { Stack } from "expo-router";
import { useFonts, Montserrat_700Bold } from "@expo-google-fonts/montserrat"
import { Lato_400Regular } from "@expo-google-fonts/lato"

export default function RootLayout() {
    let [fontsLoaded] = useFonts({
      Montserrat_700Bold,
      Lato_400Regular
  });

  if (!fontsLoaded) {
      return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="signup" options={{ headerShown: false }} />
      <Stack.Screen name="forgotPassword" options={{ headerShown: false }} />
    </Stack>
  )
}
