import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import isOpenReducer from "./features/sideberSlice";
import authReducer from ".//features/Auth/auth.slice";
import bicyclesReducer from "./features/bicycle/bicycle.slice";
import bicyclePaymentReducer from "./features/payment/payment.slice";
import addToCardsReducer from "./features/AddToCard/addToCard.slice";
import isOpenWishListReducer from "./features/WishiListSidebar";
import addToWishListReducer from "./features/WishIList/wishiList.slice";
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
const persistConfigProduct = {
  key: "addToCard",
  storage,
};
const persistConfigWishListProduct = {
  key: "addToWishListProduct",
  storage,
};
const persistAuthReducer = persistReducer(persistConfig, authReducer);
const persistProductReducer = persistReducer(
  persistConfigs,
  bicyclePaymentReducer
);
const persistAddToCardReducer = persistReducer(
  persistConfigProduct,
  addToCardsReducer
);
const persistAddToWishListReducer = persistReducer(
  persistConfigWishListProduct,
  addToWishListReducer
);
export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    isOpens: isOpenReducer,
    isOpensWishList: isOpenWishListReducer,
    auth: persistAuthReducer,
    PaymetDeatils: persistProductReducer,
    bicycles: bicyclesReducer,
    addToCards: persistAddToCardReducer,
    addToWishList: persistAddToWishListReducer,
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
