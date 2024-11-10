import React from "react";
import { ICONS } from "../../assets/svg";

export type TRightIconType = "arrow" | "icon" | "text" | "none"

export type TUniversalButtonType = {
    title: string
    subTitle?: string
    rightTitle?: string
    leftIcon?: (typeof ICONS)[keyof typeof ICONS]
    onPress?: () => void
} & (
    | { rightIconType?: "none" }
    | { rightIconType: "icon"; rightIcon: React.ReactNode }
    | { rightIconType: "arrow" }
);