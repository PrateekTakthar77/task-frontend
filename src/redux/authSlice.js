import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
let initialState = {
    user: "",
    token: "",
    loading: false
}

export const loginUser = createAsyncThunk('user', async (body) => {
    // let res = await fetch("https://task-9me1.onrender.com/api/auth/login", {
    //     method: 'post',
    //     headers: {
    //         'content-type': 'application/json',
    //         Authorization: localStorage.getItem('token')
    //     },
    //     body: JSON.stringify(body)
    // })
    // return await res.json();
    try {
        const response = await axios.post('https://task-9me1.onrender.com/api/auth/login', body, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token'),
            },
        });

        console.log(response.data)
        return response.data;
    } catch (error) {
        throw error;
    }
})

const authSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addToken: (state, action) => {
            state.token = localStorage.getItem("token");
        },
        addUser: (state, action) => {
            state.user = localStorage.getItem("user");
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.token = action.payload.token;
                state.user = action.payload.user;
                console.log(action.payload.user)
                localStorage.setItem("token", JSON.stringify(action.payload.token));
                localStorage.setItem("user", JSON.stringify(action.payload.user));
            })
        // In your Redux slice
        // .addCase(loginUser.fulfilled, (state, action) => {
        //     state.loading = false;
        //     state.token = action.payload.token;
        //     state.user = action.payload.user;

        //     // Store user data in localStorage
        //     localStorage.setItem("token", JSON.stringify(action.payload.token));
        //     localStorage.setItem("user", JSON.stringify(action.payload.user));
        // })
        // .addCase(loginUser.rejected, (state) => {
        //     state.loading = false;
        // });
    },
});


export const { addToken, addUser } = authSlice.actions;
export default authSlice.reducer