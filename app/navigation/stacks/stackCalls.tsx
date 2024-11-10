import React, { FC } from "react";
import { ROUTES } from "../routes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CallsScreen } from "../../screens/callsScreen";

const Stack = createNativeStackNavigator();

export const StackCalls: FC = () => {

    return (
        <Stack.Navigator initialRouteName={ROUTES.Calls} screenOptions={{ headerShown: false }}>
            <Stack.Screen name={ROUTES.Calls} component={CallsScreen} />
        </Stack.Navigator>
    );
};