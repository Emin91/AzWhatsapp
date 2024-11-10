import React, { FC, memo, useEffect } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { getStyle } from "./styles";
import { useAppDispatch } from "../../hooks";

interface Props {
}

export const SplashScreen: FC<Props> = memo(({ }: Props) => {
    const styles = getStyle();
    const { _setIsSplashLoaded } = useAppDispatch();

    useEffect(() => {
        const id = setTimeout(() => {
            _setIsSplashLoaded(true);
        }, 500);
        return () => clearTimeout(id);
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text>Splash Screen</Text>
            </View>
        </SafeAreaView>
    );
});
