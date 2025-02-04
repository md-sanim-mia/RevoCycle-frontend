import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productCounts: 1,
  totallProduct: 0,
};
const bicycleSlice = createSlice({
  name: "bicycle",
  initialState,
  reducers: {
    setTotalProduct: (state, acction) => {
      state.totallProduct = acction.payload;
    },
    increaseProduct: (state, acction) => {
      if (state.productCounts < state.totallProduct) {
        state.productCounts = acction.payload + 1;
      }
    },
    decreaseProduct: (state, acction) => {
      if (state.productCounts > 1) {
        state.productCounts = acction.payload - 1;
      }
    },
    clearCount: (state) => {
      state.productCounts = 1;
    },
  },
});

export const { increaseProduct, decreaseProduct, setTotalProduct, clearCount } =
  bicycleSlice.actions;

export default bicycleSlice.reducer;

export const currentValue = (state: RootState) => state.bicycles.productCounts;
