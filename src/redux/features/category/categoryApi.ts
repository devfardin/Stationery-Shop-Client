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
        categoryDelete: builder.mutation({
            query: (id) => ({
                url: `/categories/${id}`,
                method: 'DELETE',
            })
        }),
    })
})
export const { useCategoriesQuery, useAddCategoryMutation, useCategoryDeleteMutation } = categoryManagementApi