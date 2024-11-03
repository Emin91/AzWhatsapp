import React, { FC } from "react";
import { ROUTES } from "../routes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MessagesListScreen } from "../../views/messagesListScreen";

const Stack = createNativeStackNavigator();

export const StackStories: FC = () => {

    return (
        <Stack.Navigator initialRouteName={ROUTES.MessagesList} screenOptions={{ headerShown: false }}>
            <Stack.Screen name={ROUTES.MessagesList} component={MessagesListScreen} />
        </Stack.Navigator>
    );
};