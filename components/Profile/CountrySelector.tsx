import { Colors } from '@/assets/Colors';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CountryPicker, { Country } from 'react-native-country-picker-modal';

interface CountrySelectorProps {
    countryCode: Country['cca2'];
    setCountryCode: (countryCode: Country["cca2"]) => void;
}

export function CountrySelector({ countryCode, setCountryCode }: CountrySelectorProps) {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Country</Text>
      <TouchableOpacity style={styles.inputContainer} onPress={() => setVisible(true)}>
        <CountryPicker
                withFilter
                withFlag
                withCountryNameButton
                withAlphaFilter
                withCallingCode
                withEmoji
                countryCode={countryCode}
                onSelect={(selectedCountry) => setCountryCode(selectedCountry.cca2)}
                visible={visible}
                onClose={() => setVisible(false)}
            />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    fontFamily: "Lato_400Regular",
  },
  inputContainer: {
    width: '100%',
    height: 50,
    paddingLeft: 15,
    flexDirection: 'row',
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.primary_1,
    borderRadius: 10,
    backgroundColor: Colors.secondary_2,
  },
  inputText: {
    fontSize: 16,
    fontFamily: "Lato_400Regular",
  },
});