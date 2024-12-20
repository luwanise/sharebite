import { Stack } from "expo-router";
import { useFonts, Montserrat_700Bold } from "@expo-google-fonts/montserrat"
import { Lato_400Regular } from "@expo-google-fonts/lato"
import { StatusBar } from "react-native";

export default function RootLayout() {
    let [fontsLoaded] = useFonts({
      Montserrat_700Bold,
      Lato_400Regular
  });

  if (!fontsLoaded) {
      return null;
  }

  // Hide the status bar
  StatusBar.setHidden(true);

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="auth/login" options={{ headerShown: false }} />
      <Stack.Screen name="auth/signup" options={{ headerShown: false }} />
      <Stack.Screen name="auth/forgot-password/forgotPassword" options={{ headerShown: false }} />
      <Stack.Screen name="auth/forgot-password/PasswordReset" options={{ headerShown: false }} />
      <Stack.Screen name="(home)" options={{ headerShown: false }} />
      <Stack.Screen name="donations/[donation]" options={{ headerShown: false }} />
      <Stack.Screen name="profile-pages/EditProfile" options={{ headerShown: false }} />
    </Stack>
  )
}
