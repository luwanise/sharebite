import { Colors } from '@/assets/Colors';
import React from 'react';
import { View, TextInput, Text, StyleSheet, InputModeOptions } from 'react-native';

interface CustomTextInputProps {
    label: string;
    value: string;
    onChangeText: (text: string) => void;
    placeholder: string;
    secureTextEntry?: boolean;
    readonly?: boolean;
    inputMode?: InputModeOptions;
}
export function CustomTextInput({
  label, 
  value, 
  onChangeText, 
  placeholder, 
  secureTextEntry = false, 
  readonly = false, 
  inputMode
}: CustomTextInputProps) {
  return (
    <View style={styles.container}>
      {/* Label */}
      <Text style={styles.label}>{label}</Text>

      {/* Input field */}
      <TextInput
        style={[
          styles.input,
          readonly && styles.readOnlyInput
        ]}
        
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#aaa"
        secureTextEntry={secureTextEntry}
        autoCapitalize="none"
        autoCorrect={false}
        readOnly={readonly}
        inputMode={inputMode}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontFamily: "Lato_400Regular",
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: Colors.primary_1,
    borderRadius: 10,
    paddingLeft: 15,
    fontSize: 16,
    backgroundColor: Colors.secondary_2,
  },
  readOnlyInput: {
    opacity: 0.5,
  },
});