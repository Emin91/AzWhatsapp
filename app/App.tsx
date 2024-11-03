import React, { FC } from "react";
import { View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider } from "react-redux";
import { RootNavigation } from "./navigation/rootNavigation";
import store from "./redux/store";
import "react-native-gesture-handler";

const App: FC = () => {

    return (
        <View style={{ flex: 1 }}>
            <Provider {...{ store }}>
                <GestureHandlerRootView style={{ flex: 1 }}>
                    <RootNavigation />
                </GestureHandlerRootView>
            </Provider>
        </View>
    );
};

export default App;
