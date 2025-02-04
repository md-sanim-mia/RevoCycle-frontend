import { baseApi } from "@/redux/api/baseApi";
import { emitWarning } from "node:process";

const paymentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createPaymentIntent: builder.mutation({
      query: (userData) => ({
        url: "/users/create-payment-intent",
        method: "POST",
        body: userData,
      }),
      invalidatesTags: ["users"],
    }),
    createOrders: builder.mutation({
      query: (userData) => ({
        url: "/bicycles/orders",
        method: "POST",
        body: userData,
      }),
      invalidatesTags: ["users"],
    }),
    getAllOrders: builder.query({
      query: () => ({
        url: "/bicycles/get-all-orders",
        method: "GET",
      }),
      providesTags: ["bicycle"],
    }),
    getuserAllOrders: builder.query({
      query: (email) => ({
        url: `/bicycles/user-all-orders?email=${email}`,
        method: "GET",
      }),
      providesTags: ["bicycle"],
    }),
    getallSelles: builder.query({
      query: () => ({
        url: "/bicycles/totall-sell",
        method: "GET",
      }),
      providesTags: ["bicycle"],
    }),
    deleteOrderProduct: builder.mutation({
      query: (id) => ({
        url: `/bicycles/order-product/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["bicycle"],
    }),
  }),
});
export const {
  useCreatePaymentIntentMutation,
  useCreateOrdersMutation,
  useGetAllOrdersQuery,
  useGetuserAllOrdersQuery,
  useDeleteOrderProductMutation,
  useGetallSellesQuery,
} = paymentApi;
