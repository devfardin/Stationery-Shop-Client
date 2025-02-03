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
        getProducts: builder.query({
            query: () => ({
                url: '/products',
                method: 'GET',
            })
        }),
        updateProduct: builder.mutation({
            query: (data) => ({
                    url: `/products/${data.productId}`,
                    method: 'PUT',
                    body: data,
            })
        }),
    })
})
export const { useAddOrderMutation } = productManagementApi;