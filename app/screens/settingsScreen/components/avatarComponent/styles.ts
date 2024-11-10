import { StyleSheet } from "react-native";
import { COLORS, TYPOGRAPHY } from "../../../../theme";

export const getStyle = () => {
    return StyleSheet.create({
        container: {
            width: "100%",
            height: 110,
            borderRadius: 8,
            marginBottom: 35,
            backgroundColor: COLORS.white
        },
        content: {
            flex: 1,
            borderBottomColor: COLORS.lightSilver,
            borderBottomWidth: 0.3,
            paddingHorizontal: 16,
            alignItems: "center",
            flexDirection: "row"
        },
        avatar: {
            width: 56,
            height: 56,
            borderRadius: 56
        },
        infoContainer: {
            flex: 1,
            justifyContent: "space-between",
            paddingLeft: 12,
            paddingRight: 16
        },
        qrButton: {
            width: 36,
            height: 36,
            borderRadius: 36,
            backgroundColor: COLORS.paleGrayTwo,
            alignItems: "center",
            justifyContent: "center"
        },
        name: {
            ...TYPOGRAPHY.title4
        },
        status: {
            ...TYPOGRAPHY.body2,
            color: COLORS.slateGray

        }
    });
};