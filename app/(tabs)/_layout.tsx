import Ionicons from '@expo/vector-icons/Ionicons';
import { router, Tabs, useNavigation } from 'expo-router';
import { TouchableOpacity, StyleSheet } from 'react-native';

export default function TabLayout() {
  const navigation = useNavigation();

  return (
    <>
      <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <Ionicons size={28} name="planet" color={color} />,
            headerShown: false,
            tabBarShowLabel: false,
          }}
        />
        <Tabs.Screen
          name="NewDonation"
          options={{
            title: 'New Donation',
            tabBarButton: () => null,
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarIcon: ({ color }) => <Ionicons size={28} name="person" color={color} />,
            headerShown: false,
            tabBarShowLabel: false,
          }}
        />
      </Tabs>

      {/* Floating Action Button */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => router.navigate("/(tabs)/NewDonation")}
      >
        <Ionicons name="add-circle" size={56} color="blue" />
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    zIndex: 1,
  },
});