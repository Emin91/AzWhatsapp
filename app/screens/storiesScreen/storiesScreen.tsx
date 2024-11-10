import React, { FC, memo } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { getStyle } from "./style";

interface IProps {
}

export const StoriesScreen: FC<IProps> = memo(({}: IProps) => {
    const styles = getStyle();

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text>StoriesScreen</Text>
            </View>
        </SafeAreaView>
    );
});
