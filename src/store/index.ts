import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer, persistStore } from "redux-persist";
import todoSlice from "./slices/todoSlice";
import authSlice from "./slices/authSlice";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  // whitelist: ["auth", "todo"],
};

const rootReducers = combineReducers({
  auth: authSlice,
  todo: todoSlice,
});

const persistedReducers = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistedReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
