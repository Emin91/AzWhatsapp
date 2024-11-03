import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ROUTES } from "../navigation/routes";

export interface IAppStateSlice {
    isSplashLoaded: boolean
    activeScreenName: keyof typeof ROUTES
}

const initialState: IAppStateSlice = {
    isSplashLoaded: false,
    activeScreenName: "" as ROUTES
};

const AppStateSlice = createSlice({
    name: "AppState",
    initialState,
    reducers: {
        _setIsSplashLoaded(state, action: PayloadAction<boolean>) {
            state.isSplashLoaded = action.payload;
        },
        _setActiveScreenName(state, action: PayloadAction<keyof typeof ROUTES>) {
            state.activeScreenName = action.payload;
        }
    }
});

export const AppStateActions = AppStateSlice.actions;
export default AppStateSlice.reducer;