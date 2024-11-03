import React, { FC, memo, useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { getStyle } from "./styles";

interface IProps {
}

export const MessagesListScreen: FC<IProps> = memo(({ }: IProps) => {
    const [] = useState();
    const styles = getStyle();

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text>MessagesListScreen</Text>
            </View>
        </SafeAreaView>
    );
});
