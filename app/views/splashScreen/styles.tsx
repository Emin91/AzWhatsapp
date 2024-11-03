import { StyleSheet } from "react-native";

export const getStyle = () => {
    return StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white"
        }
    });
};