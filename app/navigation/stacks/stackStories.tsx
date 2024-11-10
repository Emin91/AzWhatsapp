import React, { FC } from "react";
import { ROUTES } from "../routes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StoriesScreen } from "../../screens/storiesScreen";

const Stack = createNativeStackNavigator();

export const StackStories: FC = () => {

    return (
        <Stack.Navigator initialRouteName={ROUTES.Stories} screenOptions={{ headerShown: false }}>
            <Stack.Screen name={ROUTES.Stories} component={StoriesScreen} />
        </Stack.Navigator>
    );
};