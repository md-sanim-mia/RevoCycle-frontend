import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store"; // make sure the path is correct

const initialState = {
  isWishListOpen: "", // If you use this anywhere
  isWishListSidebar: false,
};

const sideberWishListSlice = createSlice({
  name: "wishListOpen",
  initialState,
  reducers: {
    setWishListOpen: (state, action) => {
      state.isWishListOpen = action.payload;
    },
    setWishListCardSidebar: (state, action) => {
      state.isWishListSidebar = action.payload;
    },
  },
});

export const { setWishListOpen, setWishListCardSidebar } =
  sideberWishListSlice.actions;

export default sideberWishListSlice.reducer;

export const isOpensWishList = (state: RootState) =>
  state.isOpensWishList.isWishListOpen;

export const isShowWishListSidebar = (state: RootState) =>
  state.isOpensWishList.isWishListSidebar;
