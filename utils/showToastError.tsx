import { ToastAndroid } from "react-native";

export const showToastError = (errorCode: string) => {
    if (errorCode === 'auth/invalid-credential') {
        ToastAndroid.show('Invalid email or password', ToastAndroid.LONG);
    } else if (errorCode === 'auth/user-not-found') {
        ToastAndroid.show('User not found', ToastAndroid.LONG);
    } else if (errorCode === 'auth/invalid-email') {
        ToastAndroid.show('Please enter a valid email address', ToastAndroid.LONG);
    } else if (errorCode === 'auth/wrong-password') {
        ToastAndroid.show('Incorrect password', ToastAndroid.LONG);
    } else if (errorCode === 'auth/network-request-failed') {
        ToastAndroid.show('Whoops! Looks like we’re having trouble connecting. Please check your internet and give it another go!', ToastAndroid.LONG);
    } else if (errorCode === 'auth/email-already-in-use') {
        ToastAndroid.show('Email already in use', ToastAndroid.LONG);
    } else if (errorCode === 'auth/invalid-name') {
        ToastAndroid.show('Please enter your name', ToastAndroid.LONG);
    } else if (errorCode === 'auth/weak-password') {
        ToastAndroid.show('Password must be at least 8 characters long and contain at least one digit.', ToastAndroid.LONG);
    } else if (errorCode === 'auth/password-mismatch') {
        ToastAndroid.show("Passwords do not match", ToastAndroid.LONG);
    } else {
        ToastAndroid.show(`An error occurred: ${errorCode}`, ToastAndroid.LONG);
    }
}