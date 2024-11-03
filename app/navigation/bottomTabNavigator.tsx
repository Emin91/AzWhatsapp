import React, { FC } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ROUTES } from "./routes";
import { StackCalls, StackChats, StackCommunities, StackSettings, StackStories } from "./stacks";
import { CustomTabBar } from "./customTabBar";

const BottomTab = createBottomTabNavigator();

export const BottomTabNavigator: FC = () => {

    return (
        <BottomTab.Navigator initialRouteName={ROUTES.StackChats} screenOptions={{ headerShown: false, tabBarShowLabel: false }}
            tabBar={(props) => <CustomTabBar {...props as any} />}>
            <BottomTab.Screen name={ROUTES.StackStories} component={StackStories} />
            <BottomTab.Screen name={ROUTES.StackCalls} component={StackCalls} />
            <BottomTab.Screen name={ROUTES.StackCommunities} component={StackCommunities} />
            <BottomTab.Screen name={ROUTES.StackChats} component={StackChats} />
            <BottomTab.Screen name={ROUTES.StackSettings} component={StackSettings} />
        </BottomTab.Navigator>
    );
};