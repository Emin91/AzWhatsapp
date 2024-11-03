import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AppStateSlice from "./appStateSlice";

const rootReducer = combineReducers({
    AppStateSlice
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware();
    }
});

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;