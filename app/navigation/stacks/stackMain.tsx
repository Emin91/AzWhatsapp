import React, { FC } from "react";
import { ROUTES } from "../routes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BottomTabNavigator } from "../bottomTabNavigator";

const Stack = createNativeStackNavigator();

export const StackMain: FC = () => {

    return (
        <Stack.Navigator initialRouteName={ROUTES.BottomTabNavigator} screenOptions={{ headerShown: false }}>
            <Stack.Screen name={ROUTES.BottomTabNavigator} component={BottomTabNavigator} />
        </Stack.Navigator>
    );
};