import { baseApi } from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        registration: builder.mutation({
            query: (userData) => ({
                url: '/users/create-user',
                method: 'POST',
                body: userData,
            })
        })
    })
})

export const { useRegistrationMutation } = userApi