import React, { FC, memo } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { getStyle } from "./styles";
import { ICONS } from "../../assets/svg";
import { UniversalButton } from "../../components/universalButton";
import { TUniversalButtonType } from "../../components/universalButton/types";
import { AvatarComponent } from "./components/avatarComponent";

interface IProps {
}

export const SettingScreen: FC<IProps> = memo(({ }: IProps) => {
    const styles = getStyle();

    const menuItems_1: TUniversalButtonType[] = [
        { leftIcon: ICONS.Broadcast, title: "Lists" },
        { leftIcon: ICONS.Broadcast, title: "Broadcast messages" },
        { leftIcon: ICONS.Star, title: "Starred Messages" },
        { leftIcon: ICONS.Devices, title: "Linked devices" }
    ];

    const menuItems_2: TUniversalButtonType[] = [
        { leftIcon: ICONS.Key, title: "Account" },
        { leftIcon: ICONS.Lock, title: "Privacy" },
        { leftIcon: ICONS.Chat, title: "Chats" },
        { leftIcon: ICONS.Notification, title: "Notifications" },
        { leftIcon: ICONS.Arrows, title: "Storage and Data" }
    ];

    const menuItems_3: TUniversalButtonType[] = [
        { leftIcon: ICONS.Info, title: "Help" },
        { leftIcon: ICONS.Heart, title: "Invite a Friend" }
    ];

    const menuItems_4: TUniversalButtonType[] = [
        { leftIcon: ICONS.Info, title: "Open Instagram" },
        { leftIcon: ICONS.Info, title: "Open Facebook" },
        { leftIcon: ICONS.Info, title: "Open Threads" }
    ];

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <ScrollView>
                    <AvatarComponent />
                    <View style={styles.blockContainer}>
                        {menuItems_1.map((item, index, arr) => (
                            <UniversalButton key={index} {...{ item, index }} length={arr.length} />
                        ))}
                    </View>
                    <View style={styles.blockContainer}>
                        {menuItems_2.map((item, index, arr) => (
                            <UniversalButton key={index} {...{ item, index }} length={arr.length} />
                        ))}
                    </View>
                    <View style={styles.blockContainer}>
                        {menuItems_3.map((item, index, arr) => (
                            <UniversalButton key={index} {...{ item, index }} length={arr.length} />
                        ))}
                    </View>
                    <View style={styles.blockContainer}>
                        {menuItems_4.map((item, index, arr) => (
                            <UniversalButton key={index} {...{ item, index }} length={arr.length} />
                        ))}
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
});
