import { TResponseRedux } from "../../../types/global";
import { baseApi } from "../../api/baseApi";
import { TUserInfo } from "../auth/authSlice";

const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        registration: builder.mutation({
            query: (userData) => ({
                url: '/users/create-user',
                method: 'POST',
                body: userData,
            })
        }),
        getMe:builder.query({
            query: (userId) => ({
                url: `/users/${userId}`,
                method: 'GET',
            }),
            transformResponse: (response: TResponseRedux<TUserInfo>) => {
                return {
                    data: response.data,
                }
            }
        }),
    })
})

export const { useRegistrationMutation, useGetMeQuery } = userApi