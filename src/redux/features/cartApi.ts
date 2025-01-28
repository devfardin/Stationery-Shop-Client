import { baseApi } from "../api/baseApi";

const  cartManagementAPi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        addProductInCart: builder.mutation({
            query: (data) => ({
                url: 'cart/create-cart',
                method: 'POST',
                body: data,
            })
        })
    })
})
export const { useAddProductInCartMutation } = cartManagementAPi