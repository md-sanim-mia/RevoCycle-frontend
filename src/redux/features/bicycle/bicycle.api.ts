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
      query: (arge) => {
        let search;
        let filter;
        let priceRange;
        let stock;
        if (arge.name === "filter") {
          filter = arge.value;
          console.log(filter);
        }
        if (arge.name === "search") {
          search = arge.value;
        }
        if (arge.name === "price") {
          priceRange = arge.value;
        }
        if (arge.name === "stock") {
          stock = arge.value;
        }

        return {
          url: `/bicycles/products?search=${search}&&filter=${filter}&&priceRange=${priceRange}&&stock=${stock}`,
          method: "GET",
        };
      },
      providesTags: ["bicycle"],
    }),
    getSingleBicycle: builder.query({
      query: (id) => ({
        url: `/bicycles/products/${id}`,
        method: "GET",
      }),
      providesTags: ["bicycle"],
    }),
    getAllCategoryBicycle: builder.query({
      query: () => ({
        url: `/bicycles/category`,
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
  useGetAllCategoryBicycleQuery,
} = bicycleBaseApi;
