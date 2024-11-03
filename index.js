/**
 * @format
 */

import { AppRegistry, Text, TextInput, Platform } from "react-native";
import App from "./app/App";
import {name as appName} from './app.json';

if (Text.defaultProps == null) {
    Text.defaultProps = {};
    Text.defaultProps.allowFontScaling = false;
}

if (TextInput.defaultProps == null) {
    TextInput.defaultProps = {};
    TextInput.defaultProps.allowFontScaling = false;
}

const HeadlessCheck = (props) => {
    if (props?.isHeadless) {
        return null;
    }
    return <App/>;
};

if (Platform.OS === "ios") {
    AppRegistry.registerComponent(appName, () => HeadlessCheck);
} else {
    AppRegistry.registerComponent(appName, () => App);
}

