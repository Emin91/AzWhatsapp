import React, { FC } from "react";
import { ROUTES } from "../routes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CommunitiesScreen } from "../../screens/communitiesScreen";

const Stack = createNativeStackNavigator();

export const StackCommunities: FC = () => {

    return (
        <Stack.Navigator initialRouteName={ROUTES.Communities} screenOptions={{ headerShown: false }}>
            <Stack.Screen name={ROUTES.Communities} component={CommunitiesScreen} />
        </Stack.Navigator>
    );
};