import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";
type TUsers = {
  userId: string;
  role: string;
  iat: number;
  exp: number;
};
type TAuthSlice = {
  user: null | TUsers;
  token: null | string;
};
const initialState: TAuthSlice = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      (state.token = token), (state.user = user);
    },
    logout: (state) => {
      (state.token = null), (state.user = null);
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
export const useCurrenToken = (state: RootState) => state.auth.token;
export const useCurrenUser = (state: RootState) => state.auth.user;
