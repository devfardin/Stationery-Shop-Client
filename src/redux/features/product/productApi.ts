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
        getSingleProduct: builder.query({
            query: (id) => ({
                url: `/products/${id}`,
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
        productDelete: builder.mutation({
            query: (id) => ({
                url: `/products/${id}`,
                method: 'DELETE',
            })
        }),
    })
})
export const { useAddProductMutation, useGetProductsQuery, useGetSingleProductQuery, useUpdateProductMutation, useProductDeleteMutation } = productManagementApi;