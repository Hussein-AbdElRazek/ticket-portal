import { createSlice } from '@reduxjs/toolkit';


const initialAuthState = {
    token: localStorage.getItem("token"),
    userData: JSON.parse(localStorage.getItem("userData")),
    isLoggedIn: !!localStorage.getItem("token"),
    role: JSON.parse(localStorage.getItem("userData"))?.role,
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login(state, action)
        {

            state.token = action.payload.token;
            state.userData = action.payload.userData;
            state.role = action.payload.userData.role;
            state.isLoggedIn = true;
            localStorage.setItem("token", action.payload.token)
            localStorage.setItem("userData", JSON.stringify(action.payload.userData))
        },
        logout(state)
        {
            state.token = null;
            state.userData = null;
            state.role = null;
            state.isLoggedIn = false;
            localStorage.clear()
        },
        updateUserData(state, action)
        {
            state.userData = action.payload;
            localStorage.setItem("userData", JSON.stringify(action.payload))
        }
    }
})


export const authActions = authSlice.actions

export default authSlice.reducer;