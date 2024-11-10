import { StyleSheet } from "react-native";

export const getStyle = () => {
    return StyleSheet.create({
        container: {
            flex: 1
        },
        content: {
            flex: 1,
            paddingHorizontal: 16
        },
        blockContainer: {
            marginBottom: 35
        }
    });
};