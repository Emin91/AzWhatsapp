import React, { FC } from "react";
import { ROUTES } from "../routes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SettingScreen } from "../../screens/settingsScreen";
import { COLORS } from "../../theme";

const Stack = createNativeStackNavigator();

export const StackSettings: FC = () => {

    return (
        <Stack.Navigator initialRouteName={ROUTES.Settings}>
            <Stack.Screen name={ROUTES.Settings} component={SettingScreen} options={{
                title: "Settings",
                headerShadowVisible: false,
                headerSearchBarOptions: {
                    placeholder: "Search"
                },
                headerStyle: { backgroundColor: COLORS.lightGray },
                headerLargeTitle: true
            }} />
        </Stack.Navigator>
    );
};