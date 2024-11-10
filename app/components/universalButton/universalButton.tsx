import React, { FC, memo } from "react";
import { TouchableOpacity, View, Text, TouchableOpacityProps, StyleProp, TextStyle, ViewStyle } from "react-native";
import { getStyle } from "./styles";
import { TUniversalButtonType } from "./types";
import { ICONS } from "../../assets/svg";

type IProps = {
    item: TUniversalButtonType
    textStyle?: StyleProp<TextStyle>,
    containerStyle?: StyleProp<ViewStyle>
} & Omit<TouchableOpacityProps, "style"> & (
    | { index?: undefined; length?: undefined }
    | { index: number, length: number }
)

export const UniversalButton: FC<IProps> = memo(({ item, index = 0, length = 1, containerStyle, textStyle, ...props }: IProps) => {
    const styles = getStyle(index, length, item);
    const rightIconType = !item?.rightIconType || item?.rightIconType !== "none" ? "arrow" : "";

    return (
        <TouchableOpacity onPress={item.onPress} activeOpacity={0.6} {...{ ...props }} style={[styles.container, containerStyle]}>
            {item.leftIcon &&
                (<View style={styles.leftIconWrapper}>
                    {<item.leftIcon />}
                </View>)}
            <View style={styles.content}>
                <View style={styles.textContainer}>
                    <Text style={[styles.title, textStyle]} numberOfLines={1}>{item.title}</Text>
                    {item.subTitle ? <Text style={[styles.subTitle, textStyle]}>{item.subTitle}</Text> : null}
                </View>
                {rightIconType || item?.rightTitle
                    ? <View style={styles.rightContainer}>
                        {item?.rightTitle
                            ? <Text style={[styles.rightTitle, textStyle]} ellipsizeMode="middle" adjustsFontSizeToFit numberOfLines={1}>{item?.rightTitle}</Text>
                            : null
                        }
                        {rightIconType ? <ICONS.ArrowRight /> : null}
                    </View>
                    : null}
            </View>
        </TouchableOpacity>
    );
});
