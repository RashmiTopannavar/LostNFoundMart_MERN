import { createSlice } from '@reduxjs/toolkit';

// Initial state for the auth slice, checking if 'userInfo' is stored in localStorage
const initialState = {
    userInfo: localStorage.getItem('userInfo') 
        ? JSON.parse(localStorage.getItem('userInfo'))  // Parse and set the userInfo from localStorage if available
        : null,  // If not available, set userInfo to null
};

// Creating the auth slice using createSlice function
const authSlice = createSlice({
    name: 'auth',  // The name of this slice of state
    initialState,  // Setting the initial state defined above
    reducers: {  // Reducers define how state is updated
        setCredentials: (state, action) => {
            state.userInfo = action.payload;  // Update the userInfo in state with the new data from the action payload
            localStorage.setItem('userInfo', JSON.stringify(action.payload));  // Save the updated userInfo to localStorage
        },
    }
});

export const {setCredentials}= authSlice.actions;

export default authSlice.reducer;
