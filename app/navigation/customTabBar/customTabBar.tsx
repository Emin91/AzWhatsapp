import React, { FC, memo } from "react";
import { View } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedTabButton } from "./animatedTabButton";
import { getStyle } from "./styles";

interface Props {
    state: any;
    descriptors: any;
    navigation: NavigationProp<any>;
}

export const CustomTabBar: FC<Props> = memo(({ state, navigation }: Props) => {
    const { bottom } = useSafeAreaInsets();
    const styles = getStyle(bottom);

    return (
        <View style={styles.container}>
            {state.routes.map((route: any, index: number) => (
                <AnimatedTabButton key={index} {...{ state, navigation, index, route }} />
            ))}
        </View>
    );
});
