import { baseApi } from "../../api/baseApi";

const productManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        addProduct: builder.mutation({
            query: (data) => ({
                url: '/products/create',
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
    })
})
export const { useAddProductMutation, useGetProductsQuery } = productManagementApi;