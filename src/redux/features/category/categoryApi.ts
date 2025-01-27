import { baseApi } from "../../api/baseApi";

const categoryManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        addCategory: builder.mutation({
            query: (data) => ({
                url: '/categories/create',
                method: 'POST',
                body: data,
            })
        }),
        categories: builder.query({
            query: () => ({
                url: '/categories',
                method: 'GET',
            })
        }),
    })
})
export const { useCategoriesQuery, useAddCategoryMutation } = categoryManagementApi