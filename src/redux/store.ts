import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import isOpenReducer from "./features/sideberSlice";
import authReducer from ".//features/Auth/auth.slice";
import bicyclesReducer from "./features/bicycle/bicycle.slice";
import bicyclePaymentReducer from "./features/payment/payment.slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "auth",
  storage,
};
const persistConfigs = {
  key: "product",
  storage,
};
const persistAuthReducer = persistReducer(persistConfig, authReducer);
const persistProductReducer = persistReducer(
  persistConfigs,
  bicyclePaymentReducer
);
export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    isOpens: isOpenReducer,
    auth: persistAuthReducer,
    PaymetDeatils: persistProductReducer,
    bicycles: bicyclesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persist = persistStore(store);
