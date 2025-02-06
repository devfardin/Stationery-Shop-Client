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
                url: '/order',
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
        verifyOrder: builder.query({
            query: ({order_id}) => ({
                url: `/order/verify`,
                params: {order_id},
                method: 'GET',
            })
        }),
        updateOrderStatus: builder.mutation({
            query: (userData) => ({
                url: '/order',
                method: 'PUT',
                body: userData,
            })
        }),
    })
})
export const { useAddOrderMutation, useGetOrdersQuery, useUpdateOrdersMutation, useVerifyOrderQuery, useUpdateOrderStatusMutation } = productManagementApi;