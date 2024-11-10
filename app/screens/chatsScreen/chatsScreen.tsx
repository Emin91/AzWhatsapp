import React, { FC, memo, useEffect, useState } from "react";
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { getStyle } from "./style";
import { useNavigation } from "@react-navigation/native";
import { ICONS } from "../../assets/svg";
import { COLORS } from "../../theme";
import { ChatItemComponent } from "../../components/chatItemComponent";
import { CHAT_LIST_MOCK } from "../../../__mocks__/chatList.mock";

interface IProps {
}

export const ChatsScreen: FC<IProps> = memo(({ }: IProps) => {
    const styles = getStyle();
    const navigation = useNavigation();

    const headerButton = (isRight: boolean) => {
        return (
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity style={{ width: 28, height: 28, borderRadius: 28, backgroundColor: COLORS.paleGrayTwo, justifyContent: "center", alignItems: "center" }}>
                    {!isRight ? <ICONS.Dots /> : <ICONS.Camera />}
                </TouchableOpacity>
                {isRight
                    ? <TouchableOpacity style={{ marginLeft: 16, width: 28, height: 28, borderRadius: 28, backgroundColor: COLORS.forestGreen, justifyContent: "center", alignItems: "center" }}>
                        <ICONS.Plus />
                    </TouchableOpacity>
                    : null
                }
            </View>
        );
    };

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => headerButton(false),
            headerRight: () => headerButton(true)
        });
    }, [navigation]);

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                contentInsetAdjustmentBehavior="automatic"
                data={CHAT_LIST_MOCK.sort((a, b) => b.isPinned - a.isPinned)}
                renderItem={(({ item, index }) => (
                    <ChatItemComponent {...{ item, index }}/>
                ))}
            />
        </SafeAreaView>
    );
});
