import React, { FC, memo, useCallback, useEffect, useMemo, useRef } from "react";
import { Pressable, Text, View } from "react-native";
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import { NavigationProp } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { getStyle } from "./styles";
import { SvgProps } from "react-native-svg";
import { ICONS } from "../../assets/svg";
import { COLORS } from "../../theme";

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
    let TabIcon: React.ComponentType<SvgProps>;

    const onPressToTabIcon = useCallback(() => {
        const event = navigation?.emit({ type: "tabPress", target: route.key });
        (!isFocused && !event.defaultPrevented) ? navigation.navigate(route.name) : null;
    }, [isFocused]);

    const rIcon = useAnimatedStyle(() => {
        const scale = interpolate(progress.value, [0, 1], [1, 1.2]);
        const translateY = interpolate(progress.value, [0, 0.1, 1], [0, isFocused ? 3 : -3, 0]);
        return {
            transform: [{ scale }, { translateY: isFocused ? translateY : 0 }]
        };
    });

    const tabIcon = useMemo(() => {
        const icons: { [key: number]: React.ComponentType<SvgProps> } = {
            0: ICONS[isFocused ? "StoriesFilled" : "Stories"],
            1: ICONS[isFocused ? "PhoneFilled" : "Phone"],
            2: ICONS[isFocused ? "PeopleFilled" : "People"],
            3: ICONS[isFocused ? "ChatsFilled" : "Chats"],
            4: ICONS[isFocused ? "SettingsFilled" : "Settings"]
        };
        TabIcon = icons[index];

        return <TabIcon />;
    }, [index, isFocused]);

    const tabTitle = useMemo(() => {
        const title: { [key: number]: React.ReactNode } = {
            0: "Stories",
            1: "Calls",
            2: "Communities",
            3: "Chats",
            4: "Settings"
        };
        return title[index] as string;
    }, [index, isFocused]);

    useEffect(() => {
        progress.value = withSpring(isFocused ? 1 : 0, { stiffness: 100 });
    }, [isFocused]);

    return (
        <Pressable key={index} onPress={onPressToTabIcon} style={styles.tabBarButton}>
            <Animated.View ref={tabIconRef} style={[styles.buttonWrapper, rIcon]}>
                {tabIcon}
            </Animated.View>
            <Text numberOfLines={1} style={{ ...styles.tabBarTitle, color: isFocused ? COLORS.dark : COLORS.slateGray }}>{tabTitle}</Text>
        </Pressable>
    );
});
