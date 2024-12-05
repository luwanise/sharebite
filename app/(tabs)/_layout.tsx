import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="planet" color={color} />,
          headerShown: false,
          tabBarShowLabel: false
        }}
      />
      <Tabs.Screen
        name="NewDonation"
        options={{
            title: 'New Donation',
            tabBarIcon: ({ color }) => <Ionicons size={28} name="add-circle" color={color} />,
            headerShown: false,
            tabBarShowLabel: false
        }}
    />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'User Profile',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="person" color={color} />,
          headerShown: false,
          tabBarShowLabel: false
        }}
      />
    </Tabs>
  );
}