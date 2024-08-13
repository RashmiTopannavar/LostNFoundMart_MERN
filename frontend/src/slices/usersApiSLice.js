import { USERS_URL } from '../constants'; // Import the USERS_URL constant which stores the base URL for user-related API endpoints.
import { apiSlice } from './apiSlice';    // Import the base apiSlice, which provides the foundation for defining API endpoints.

export const usersApiSlice = apiSlice.injectEndpoints({
    // Inject new endpoints into the existing apiSlice
    endpoints: (builder) => ({
        login: builder.mutation({
            // Define a mutation for the login functionality
            query: (data) => ({
                // Configure the API request
                url: `${USERS_URL}/auth`, // Endpoint URL for login
                method: 'POST', // HTTP method for the request
                body: data, // The data to be sent in the body of the POST request
            }),
        }),
    }),
});

// Export the useLoginMutation hook
// This hook is used in React components to trigger the login mutation and handle the response.
export const { useLoginMutation } = usersApiSlice;
