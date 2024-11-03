import { StyleSheet } from "react-native";

export const getStyle = (bottom: number) => {
    return StyleSheet.create({
        container: {
            height: 50 + (bottom || 0),
            borderTopWidth: 1,
            borderTopColor: "#dedede",
            backgroundColor: "#FFFFFF",
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
            fontSize: 10
        }
    });
};