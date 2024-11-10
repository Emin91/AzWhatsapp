import { StyleProp, TextStyle } from "react-native";
import { COLORS } from "./colors";
import { FONTS } from "./fonts";

const tabBar:StyleProp<TextStyle> = {
    fontFamily: FONTS.SFMedium,
    color: COLORS.slateGray,
    fontSize: 10
};

const title1:StyleProp<TextStyle> = {
    fontFamily: FONTS.SFBold,
    color: COLORS.dark,
    fontSize: 32
};

const title4:StyleProp<TextStyle> = {
    fontFamily: FONTS.SFRegular,
    color: COLORS.dark,
    fontSize: 20
};

const body1:StyleProp<TextStyle> = {
    fontFamily: FONTS.SFRegular,
    color: COLORS.dark,
    fontSize: 16
};

const body2:StyleProp<TextStyle> = {
    fontFamily: FONTS.SFRegular,
    color: COLORS.dark,
    fontSize: 16
};

const body7:StyleProp<TextStyle> = {
    fontFamily: FONTS.SFRegular,
    color: COLORS.slateGray,
    fontSize: 11
};

export const TYPOGRAPHY = {
    tabBar,
    body1,
    body2,
    body7,
    title1,
    title4
};
