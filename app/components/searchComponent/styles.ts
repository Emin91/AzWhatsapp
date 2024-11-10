import { StyleSheet } from "react-native";
import { COLORS, TYPOGRAPHY } from "../../theme";

export const getStyle = () => {
    return StyleSheet.create({
        container: {
            width: "100%",
            marginVertical: 16,
            overflow: "scroll",
            flexDirection: "row"
        },
        inputContainerLayout: {
            flex: 1,
            width: "100%"
        },
        inputContainer: {
            flex: 1,
            paddingLeft: 6,
            flexDirection: "row",
            borderRadius: 10,
            alignItems: "center",
            backgroundColor: COLORS.mediumGray
        },
        input: {
            ...TYPOGRAPHY.body1,
            flex: 1,
            paddingRight: 10,
            color: COLORS.slateGray
        },
        cancelContainer: {
            justifyContent: "center",
            paddingLeft: 10
        },
        cancel: {
            ...TYPOGRAPHY.body1
        }
    });
};