import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer, persistStore } from "redux-persist";
import todoSlice from "./slices/todoSlice";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["todo"],
};

const rootReducers = combineReducers({
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
