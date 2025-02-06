import { baseApi } from "../../api/baseApi";

const productManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        addOrder: builder.mutation({
            query: (data) => ({
                url: '/order',
                method: 'POST',
                body: data,
            })
        }),
        getOrders: builder.query({
            query: () => ({
                url: '/orders',
                method: 'GET',
            })
        }),
        updateOrders: builder.mutation({
            query: (data) => ({
                    url: `/products/${data.productId}`,
                    method: 'PUT',
                    body: data,
            })
        }),
    })
})
export const { useAddOrderMutation, useGetOrdersQuery, useUpdateOrdersMutation } = productManagementApi;