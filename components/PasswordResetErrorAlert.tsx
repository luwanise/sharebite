import { Colors } from '@/assets/Colors';
import { Dimens } from '@/assets/Dimens';
import React, { useState, useCallback } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface PasswordResetErrorAlertProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const PasswordResetErrorAlert: React.FC<PasswordResetErrorAlertProps> = ({ visible, setVisible }) => {

  return (
    <Modal visible={visible} transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.alertContainer}>
          <Text style={styles.title}>Uh-oh, something went wrong!</Text>
          <Text style={styles.message}>
            It's not you, it's us. We couldn’t find that email. Double-check and give it another shot!
          </Text>
          <TouchableOpacity style={styles.button} onPress={() => setVisible(false)}>
            <Text style={styles.buttonText}>Try again</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  alertContainer: {
    width: 300,
    backgroundColor: Colors.background_1,
    borderRadius: 10,
    padding: Dimens.padding,
  },
  title: {
    fontSize: Dimens.bodySize,
    fontFamily: 'Montserrat_700Bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  message: {
    fontSize: 16,
    marginBottom: Dimens.padding,
    textAlign: 'center',
  },
  button: {
    padding: 10,
    backgroundColor: Colors.primary_1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: Dimens.bodySize,
    fontFamily: 'Montserrat_700Bold',
    color: Colors.background_2,
  },
});

export default PasswordResetErrorAlert;