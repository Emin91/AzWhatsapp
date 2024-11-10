import React, { FC, memo, useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { getStyle } from "./styles";
import Animated, { FadeInLeft, FadeOutLeft, LinearTransition } from "react-native-reanimated";
import { ICONS } from "../../assets/svg";
import { useNavigation } from "@react-navigation/native";

interface IProps {
    item: any
}

export const ChatItemComponent: FC<IProps> = memo(({ item }: IProps) => {
    const styles = getStyle();
    const navigation = useNavigation();
    const [isCheckboxVisible, setIsCheckboxVisible] = useState(false);

    useEffect(() => {
        navigation.setOptions({
            title: !isCheckboxVisible ? "Chats" : `Selected: ${1}`
        });
    }, [navigation, isCheckboxVisible]);

    return (
        <TouchableOpacity onPress={() => setIsCheckboxVisible(!isCheckboxVisible)} activeOpacity={0.6} style={[styles.container]}>
            {isCheckboxVisible
                && <Animated.View
                    entering={FadeInLeft.duration(400)}
                    exiting={FadeOutLeft.duration(400)}
                    key={String(isCheckboxVisible)}
                    style={styles.checkboxContainer}>
                    <Text>Check</Text>
                </Animated.View>
            }
            <Animated.View layout={LinearTransition.stiffness(300)} style={{ flex: 1, flexDirection: "row" }}>
                <View style={[styles.avatarContainer]}>
                    <View style={[styles.border, true && styles.storiesBorder]}>
                        <Image source={{ uri: item.avatar }} style={styles.avatar} />
                    </View>
                </View>
                <Animated.View style={styles.infoContainer} >
                    <Animated.View style={styles.textContainer}>
                        <Animated.Text
                            style={styles.name}
                            numberOfLines={1}>{item.name}</Animated.Text>
                        <Animated.Text
                            style={styles.message}
                            numberOfLines={2}>{item.lastMessage}</Animated.Text>
                    </Animated.View>
                    <View style={styles.timeContainer}>
                        <Text numberOfLines={1} style={styles.time}>{item.sentTime}</Text>
                        {item.isPinned ? <ICONS.Pin /> : null}
                    </View>
                </Animated.View>
            </Animated.View>
        </TouchableOpacity>
    );
});
