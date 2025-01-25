import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (userInfo) => ({
                url: '/auth/login',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: userInfo,
            }),
        }),
    }),
});
export const { useLoginMutation }= authApi