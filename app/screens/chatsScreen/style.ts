import { StyleSheet } from "react-native";
import { COLORS } from "../../theme";

export const getStyle = () => {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: COLORS.white
        }
    });
};
