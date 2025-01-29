import { baseApi } from "../../api/baseApi";

const  cartManagementAPi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        addProductInCart: builder.mutation({
            query: (data) => ({
                url: 'cart/create-cart',
                method: 'POST',
                body: data,
            })
        }),
        getItemsBaseUser: builder.query({
            query: (email) => ({
                url: `cart/items?email=${email}`,
                method: 'GET',
            })
        })
    })
})
export const { useAddProductInCartMutation, useGetItemsBaseUserQuery } = cartManagementAPi