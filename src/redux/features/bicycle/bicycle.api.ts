import { baseApi } from "@/redux/api/baseApi";

const bicycleBaseApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBicycleApi: builder.mutation({
      query: (userData) => ({
        url: "/bicycles/products",
        method: "POST",
        body: userData,
      }),
      invalidatesTags: ["bicycle"],
    }),
    getAllBicycle: builder.query({
      query: () => ({
        url: "/bicycles/products",
        method: "GET",
      }),
      providesTags: ["bicycle"],
    }),
    getSingleBicycle: builder.query({
      query: (id) => ({
        url: `/bicycles/products/${id}`,
        method: "GET",
      }),
      providesTags: ["bicycle"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/bicycles/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["bicycle"],
    }),
    updateProduct: builder.mutation({
      query: (id) => ({
        url: `/bicycles/products/${id}`,
        method: "PUT",
      }),
      invalidatesTags: ["bicycle"],
    }),
  }),
});

export const {
  useCreateBicycleApiMutation,
  useGetAllBicycleQuery,
  useGetSingleBicycleQuery,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = bicycleBaseApi;
