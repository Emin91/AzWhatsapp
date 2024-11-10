import { StyleSheet } from "react-native";
import { COLORS, TYPOGRAPHY } from "../../theme";
import { TUniversalButtonType } from "./types";

export const getStyle = (index: number, length: number, item?: TUniversalButtonType) => {
    const isFirstElement = index === 0;
    const isLastElement = index === length - 1;
    const isTop = isFirstElement && length > 1 || !index;
    const isBottom = isLastElement && length > 1 || length == 1;

    return StyleSheet.create({
        container: {
            paddingLeft: 18,
            minHeight: 40,
            width: "100%",
            flexDirection: "row",
            backgroundColor: COLORS.white,
            borderTopLeftRadius: isTop ? 8 : 0,
            borderTopRightRadius: isTop ? 8 : 0,
            borderBottomLeftRadius: isBottom ? 8 : 0,
            borderBottomRightRadius: isBottom ? 8 : 0
        },
        content: {
            flex: 1,
            minHeight: 40,
            paddingRight: 8,
            flexDirection: "row",
            borderColor: COLORS.lightSilver,
            borderBottomWidth: length > 1 && !isLastElement ? 0.3 : 0
        },
        textContainer: {
            flex: 0.7,
            paddingRight: item?.rightTitle ? 30 : 0,
            justifyContent: "center",
            paddingVertical: item?.subTitle ? 5 : 0
        },
        leftIconWrapper: {
            justifyContent: "center",
            paddingRight: 18
        },
        title: {
            ...TYPOGRAPHY.body2
        },
        subTitle: {
            ...TYPOGRAPHY.body7
        },
        rightTitle: {
            ...TYPOGRAPHY.body2,
            color: COLORS.slateGray
        },
        rightContainer: {
            flex: 0.3,
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center"
        }
    });
};
