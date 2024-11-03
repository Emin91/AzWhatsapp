/* eslint-disable no-console */
import { createNavigationContainerRef } from "@react-navigation/native";
import { AppStateActions } from "../redux/appStateSlice";
import { ROUTES } from "../navigation/routes";
import store from "../redux/store";

export const navigationRef = createNavigationContainerRef();

export const getNavigationRef = () => (
    navigationRef?.isReady() ? navigationRef : undefined
);

export const onNavigationStateChange = () => {
    const currentRoute = getNavigationRef()?.getCurrentRoute();
    store.dispatch(AppStateActions._setActiveScreenName(currentRoute?.name as keyof typeof ROUTES || ""));
    console.log("Active screen: ", currentRoute?.name);
};