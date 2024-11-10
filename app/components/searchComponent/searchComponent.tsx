import React, { FC, memo, useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { getStyle } from "./styles";
import { ICONS } from "../../assets/svg";
import Animated, { Extrapolation, FadeInRight, FadeOutRight, interpolate, LinearTransition, runOnJS, SharedValue, useAnimatedProps, useAnimatedReaction, useAnimatedStyle, useDerivedValue } from "react-native-reanimated";

interface IProps {
    offsetY: SharedValue<number>
    isScrolling?: boolean
}

export const SearchComponent: FC<IProps> = memo(({ offsetY, isScrolling }: IProps) => {
    const styles = getStyle();
    const [value, setValue] = useState("");
    const [isFocus, setIsFocus] = useState(false);
    const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

    const rView = useAnimatedStyle(() => {
        const height = interpolate(offsetY.value, [0, 34], [34, 0], Extrapolation.CLAMP);
        const translateY = interpolate(offsetY.value, [0, 68], [0, 10], Extrapolation.CLAMP);
        return {
            height,
            //transform: [{ translateY }],
            backgroundColor: "red"
        };
    });

    const onFocus = () => {
        setIsFocus(true);
    };

    const onBlur = () => {
        setIsFocus(false);
    };

    return (
        <Animated.View style={[styles.container, rView]}>
            <Animated.View style={styles.inputContainer} layout={!isScrolling ? LinearTransition.stiffness(400) : undefined}>
                <ICONS.Search />
                <TextInput
                    style={styles.input}
                    placeholder={"Search"}
                    onChangeText={setValue}
                    {...{ value, onFocus, onBlur }}
                />
            </Animated.View>
            {isFocus &&
                <AnimatedTouchableOpacity
                    key={String(isFocus)}
                    entering={FadeInRight.duration(300)}
                    exiting={FadeOutRight.duration(200)}
                    onPress={onBlur}
                    style={styles.cancelContainer}>
                    <Text style={styles.cancel}>Cancel</Text>
                </AnimatedTouchableOpacity>
            }
        </Animated.View>
    );
});
