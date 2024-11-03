import React, { FC } from "react";
import { ROUTES } from "../routes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SplashScreen } from "../../views/splashScreen";

const Stack = createNativeStackNavigator();

export const StackLaunch: FC = () => {

    return (
        <Stack.Navigator initialRouteName={ROUTES.Splash} screenOptions={{ headerShown: false }}>
            <Stack.Screen name={ROUTES.Splash} component={SplashScreen} />
        </Stack.Navigator>
    );
};