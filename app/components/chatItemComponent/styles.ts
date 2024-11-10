import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../theme";

export const getStyle = () => {
    return StyleSheet.create({
        container: {
            width: "100%",
            height: 76,
            paddingLeft: 16,
            backgroundColor: COLORS.white,
            flexDirection: "row"
        },
        checkboxContainer: {
            paddingRight: 16,
            justifyContent: "center",
            alignItems: "center"
        },
        avatarContainer: {
            width: 56,
            height: "100%",
            justifyContent: "center",
            alignItems: "center"
        },
        storiesBorder: {
            padding: 2,
            borderWidth: 2,
            borderColor: COLORS.forestGreen
        },
        border: {
            width: 56,
            height: 56,
            borderRadius: 56,
            backgroundColor: COLORS.white
        },
        avatar: {
            borderRadius: 56,
            width: "100%",
            height: "100%"
        },
        infoContainer: {
            flex: 1,
            flexDirection: "row",
            marginLeft: 12,
            paddingVertical: 10,
            borderBottomWidth: 0.3,
            borderBottomColor: COLORS.black20
        },
        textContainer: {
            flex: 1,
            paddingRight: 4
        },
        timeContainer: {
            alignItems: "flex-end",
            paddingRight: 16
        },
        name: {
            fontFamily: FONTS.SFSemibold,
            color: COLORS.dark,
            fontSize: 16
        },
        message: {
            fontFamily: FONTS.SFRegular,
            color: COLORS.slateGray,
            fontSize: 14
        },
        time: {
            fontFamily: FONTS.SFRegular,
            color: COLORS.slateGray,
            fontSize: 14,
            marginBottom: 4
        }
    });
};