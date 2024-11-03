import { Dimensions, Platform } from "react-native";
import DeviceInfo from "react-native-device-info";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const IS_IOS = Platform.OS == "ios";

const UNIQ_ID = DeviceInfo.getUniqueIdSync();

const VERSION = DeviceInfo.getVersion();

export const Device = { WIDTH, HEIGHT, IS_IOS, UNIQ_ID, VERSION };