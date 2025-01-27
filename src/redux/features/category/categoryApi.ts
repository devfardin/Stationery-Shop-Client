import { baseApi } from "../../api/baseApi";

const categoryManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        addCategory: builder.mutation({
            query: (data) => ({
                url: '/category/create',
                method: 'POST',
                body: data,
            })
        })
    })
})
export const { useAddCategoryMutation } = categoryManagementApi