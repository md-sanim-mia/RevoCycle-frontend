import { baseApi } from "@/redux/api/baseApi";

const userBaseApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createUserApi: builder.mutation({
      query: (userData) => ({
        url: "/users/createUser",
        method: "POST",
        body: userData,
      }),
      invalidatesTags: ["users"],
    }),
    getAllUsers: builder.query({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
      providesTags: ["users"],
    }),
    deleteUsers: builder.mutation({
      query: (id) => ({
        url: `/users/user-deleted/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["users"],
    }),
    activedUsers: builder.mutation({
      query: (id) => ({
        url: `/users/active-user/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["users"],
    }),
    deActivedUsers: builder.mutation({
      query: (id) => ({
        url: `/users/black-user/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const {
  useCreateUserApiMutation,
  useGetAllUsersQuery,
  useDeleteUsersMutation,
  useActivedUsersMutation,
  useDeActivedUsersMutation,
} = userBaseApi;
