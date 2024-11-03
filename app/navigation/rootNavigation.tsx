import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useAppSelector } from "../hooks";
import { StackLaunch, StackMain } from "./stacks";
import { navigationRef, onNavigationStateChange } from "../helpers";

export const RootNavigation: FC = () => {
    const isUserAuthorized = true;
    const { isSplashLoaded } = useAppSelector(state => state.AppStateSlice);

    return (
        <NavigationContainer ref={navigationRef} onStateChange={onNavigationStateChange}>
            {!isSplashLoaded
                ? <StackLaunch />
                : isUserAuthorized
                    ? <StackMain />
                    : null
            }
        </NavigationContainer>
    );
};
