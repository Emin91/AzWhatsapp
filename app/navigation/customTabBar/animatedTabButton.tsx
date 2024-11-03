import React, { FC, memo, useCallback, useEffect, useMemo, useRef } from "react";
import { Pressable, Text, View } from "react-native";
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import { NavigationProp } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { getStyle } from "./styles";

interface Props {
    index: number
    route: any
    state: any
    navigation: NavigationProp<any>
}

export const AnimatedTabButton: FC<Props> = memo(({ index, route, state, navigation }: Props) => {
    const { bottom } = useSafeAreaInsets();
    const progress = useSharedValue(0);
    const tabIconRef = useRef<View>(null);
    const styles = useMemo(() => getStyle(bottom), [bottom]);
    const isFocused = state.index == index;

    const onPressToTabIcon = useCallback(() => {
        tabIconRef?.current?.measure((x, y, w, h, pagex, pagey) => {
        });
        const event = navigation.emit({ type: "tabPress", target: route.key });
        (!isFocused && !event.defaultPrevented) ? navigation.navigate(route.name) : null;
    }, [isFocused]);

    const rIcon = useAnimatedStyle(() => {
        const scale = interpolate(progress.value, [0, 1], [1, 1.2]);
        const translateY = interpolate(progress.value, [0, 0.5, 1], [0, isFocused ? 6 : -3, 0]);
        return {
            transform: [{ scale }, { translateY: isFocused ? translateY : 0 }]
        };
    });

    const tabIcon = useMemo(() => {
        const color = isFocused ? "green" : "orange";
        const icons: { [key: number]: React.ReactNode } = {
            0: null,
            1: null,
            2: null,
            3: null,
            4: null
        };
        return icons[index];
    }, [index, isFocused]);

    const tabTitle = useMemo(() => {
        const title: { [key: number]: React.ReactNode } = {
            0: "search",
            1: "trip",
            2: "favorites",
            3: "support",
            4: "menu"
        };
        return title[index] as string;
    }, [index, isFocused]);

    useEffect(() => {
        progress.value = withSpring(isFocused ? 1 : 0, { stiffness: 200 });
    }, [isFocused]);

    return (
        <Pressable key={index} onPress={onPressToTabIcon} style={styles.tabBarButton}>
            <Animated.View ref={tabIconRef} style={[styles.buttonWrapper, rIcon]}>
                {tabIcon}
            </Animated.View>
            <Text numberOfLines={1} style={{ ...styles.tabBarTitle, color: isFocused ? "green" : "orange" }}>{tabTitle}</Text>
        </Pressable>
    );
});
