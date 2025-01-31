import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
const initialState = {
  isOpen: "", // Default text state
  isShowSideber: false,
};
const sideberSlice = createSlice({
  name: "isOpen",
  initialState,
  reducers: {
    setIsOpen: (state, acction) => {
      state.isOpen = acction.payload;
    },
    setCardSideber: (state, acction) => {
      state.isShowSideber = acction.payload;
    },
  },
});

export const { setIsOpen, setCardSideber } = sideberSlice.actions;
export default sideberSlice.reducer;

export const isOpens = (state: RootState) => state.isOpens.isOpen;
export const isShowSideber = (state: RootState) => state.isOpens.isShowSideber;
