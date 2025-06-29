import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";
interface ProductState {
  productCounts: number;
  totallProduct: number;
  productDeatils: any;
}
const initialState: ProductState = {
  productCounts: 1,
  totallProduct: 0,
  productDeatils: [],
};

const productSlice = createSlice({
  name: "addToCard",
  initialState,
  reducers: {
    addToCardProduct: (state, action) => {
      const existingProduct = state.productDeatils.find(
        (item: any) => item.id === action.payload.id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.productDeatils.push({ ...action.payload, quantity: 1 });
      }
    },
  },
});

export const { addToCardProduct } = productSlice.actions;
export default productSlice.reducer;

export const allPorducts = (state: RootState) =>
  state.addToCards.productDeatils;
export const totallProducts = (state: RootState) =>
  state.addToCards.totallProduct;
