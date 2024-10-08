import { PRODUCTS_URL, UPLOAD_URL } from "../constants"; // URL for the API endpoint
import { apiSlice } from "./apiSlice"; // Base API slice created with Redux Toolkit

// Extend the existing apiSlice with new endpoints
export const productsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // Define a new query endpoint for fetching products
        getProducts: builder.query({
            // Specify the API request details
            query: ({keyword, pageNumber}) => ({
                url: PRODUCTS_URL, // The endpoint URL to fetch products
                params:{
                    keyword,
                    pageNumber,
                },
            }),
            providesTags : ['Products'],
            keepUnusedDataFor: 5 // Cache the data for 5 seconds
        }),

        getProductDetails: builder.query({
            query : (productId) =>({
                url : `${PRODUCTS_URL}/${productId}`,
            }),
            keepUnusedDataFor: 5,
        }),

        createProduct : builder.mutation({
            query: () => ({
                url: PRODUCTS_URL,
                method: 'POST',
            }),
            invalidatesTags: ['Product']
        }),

        updateProduct: builder.mutation({
            query: (data) => ({
                url: `${PRODUCTS_URL}/${data.productId}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ['Products'],
        }),

        uploadProductImage: builder.mutation({
            query: (data) => ({
                url: UPLOAD_URL,
                method: 'POST',
                body: data,
            }),
        }),

        deleteProduct: builder.mutation({
            query: (productId) => ({
                url: `${PRODUCTS_URL}/${productId}`,
                method: 'DELETE',
            }),
        }),
        createReview: builder.mutation({
            query: (data) => ({
                url: `${PRODUCTS_URL}/${data.productId}/reviews`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Product'],
        }),

        getTopProducts : builder.query({
            query: () => ({
                url: `${PRODUCTS_URL}/top`,
            }),
            keepUnusedDataFor: 5,
        })

    }),
});

// Export the custom hook generated by apiSlice for use in components
export const { 
    useGetProductsQuery, 
    useGetProductDetailsQuery, 
    useCreateProductMutation,
    useUpdateProductMutation, 
    useUploadProductImageMutation,
    useDeleteProductMutation,
    useCreateReviewMutation,
    useGetTopProductsQuery,
} = productsApiSlice;
