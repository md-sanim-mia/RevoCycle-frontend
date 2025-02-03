import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";
interface PaymentState {
  products: {
    product: any;
    price: number;
    quantity: number;
  } | null;
}

const initialState: PaymentState = {
  products: null,
};
const paymentSlice = createSlice({
  name: "productCard",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    clearProduct: (state) => {
      state.products = null;
    },
  },
});

export const { setProducts, clearProduct } = paymentSlice.actions;

export default paymentSlice.reducer;

export const currentPaymentData = (state: RootState) =>
  state.PaymetDeatils.products;
