import { Country } from "react-native-country-picker-modal";

export type User = {
    id?: string;
    profilePic: string;
    username: string;
    email: string;
    phoneNumber: string;
    countryCode: Country['cca2'];
}