import React, { FC } from "react";
import { ROUTES } from "../routes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ChatsScreen } from "../../screens/chatsScreen";
import { COLORS } from "../../theme";
import { TouchableOpacity, View } from "react-native";
import { ICONS } from "../../assets/svg";

const Stack = createNativeStackNavigator();

export const StackChats: FC = () => {

    return (
        <Stack.Navigator initialRouteName={ROUTES.Chats}>
            <Stack.Screen name={ROUTES.Chats} component={ChatsScreen} options={{
                title: "Chats",
                headerShadowVisible: true,
                headerSearchBarOptions: {
                    placeholder: "Search"
                },
                headerStyle: { backgroundColor: COLORS.white },
                headerLargeTitle: true
            }} />
        </Stack.Navigator>
    );
};