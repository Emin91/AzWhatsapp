import { StyleSheet } from "react-native";
import { COLORS, TYPOGRAPHY } from "../../theme";

export const getStyle = (bottom: number) => {
    return StyleSheet.create({
        container: {
            height: 60 + (bottom || 0),
            borderTopWidth: 0.3,
            borderTopColor: COLORS.silverGray,
            backgroundColor: COLORS.lightGray,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between"
        },
        tabBarButton: {
            flex: 1,
            alignItems: "center",
            height: "100%"
        },
        buttonWrapper: {
            width: "100%",
            paddingTop: 8,
            alignItems: "center",
            paddingVertical: 5,
            paddingHorizontal: 3,
            justifyContent: "center"
        },
        tabBarTitle: {
            ...TYPOGRAPHY.tabBar
        }
    });
};