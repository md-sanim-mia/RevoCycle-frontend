import { baseApi } from "@/redux/api/baseApi";

const userBaseApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createUserApi: builder.mutation({
      query: (userData) => ({
        url: "/users/createUser",
        method: "POST",
        body: userData,
      }),
    }),
  }),
});

export const { useCreateUserApiMutation } = userBaseApi;
