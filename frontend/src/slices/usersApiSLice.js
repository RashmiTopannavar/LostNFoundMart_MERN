import {USERS_URL} from '../constants';
import { apiSlice } from './apiSlice';

export const usersApiSLice = apiSlice.injectEndpoints({
    endpoints : (builder) =>({
        login: builder.mutation({
            query: (data) =>({
                url: USERS_URL/authSlice,
                method: 'POST',
                body: data,
            })
        })
    })
});
export const { useLoginMutation } = usersApiSLice