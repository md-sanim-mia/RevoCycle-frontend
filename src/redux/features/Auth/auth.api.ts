import { baseApi } from "@/redux/api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (bulder) => ({
    login: bulder.mutation({
      query: (userData) => ({
        url: "/auth/login",
        method: "POST",
        body: userData,
      }),
    }),
    chengePassword: bulder.mutation({
      query: (userData) => ({
        url: "/auth/chenge-password",
        method: "POST",
        body: userData,
      }),
    }),
  }),
});

export const { useLoginMutation, useChengePasswordMutation } = authApi;
