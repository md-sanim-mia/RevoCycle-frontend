import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";
interface ProductState {
  productWishiList: any;
}
const initialState: ProductState = {
  productWishiList: [],
};

const productWishListSlice = createSlice({
  name: "wishListCard",
  initialState,
  reducers: {
    addToWishListProduct: (state, action) => {
      const existingProduct = state.productWishiList.find(
        (item: any) => item.id === action.payload.id
      );

      if (!existingProduct) {
        state.productWishiList.push({ ...action.payload });
      }
    },

    deleteWishListProduct: (state, action) => {
      state.productWishiList = state.productWishiList.filter(
        (item: any) => item.id !== action.payload
      );
    },
  },
});

export const { addToWishListProduct, deleteWishListProduct } =
  productWishListSlice.actions;
export default productWishListSlice.reducer;
export const allWishListPorducts = (state: RootState) =>
  state.addToWishList.productWishiList;
