import { createSlice } from "@reduxjs/toolkit";

// const initiateLogin = createAsyncThunk("auth/login")

interface AuthState {
    user?: object | null,
    email?: string,
    access?: string | null,
    refresh?: string | null
}
let initialState: AuthState;


let authStringFromLS: string | null = localStorage.getItem("auth")


let authObjectFromLS: AuthState = JSON.parse(String(authStringFromLS))


// const { access, refresh, user, email } = authObjectFromLS

if (authStringFromLS) {
    console.log("Chekc 1", authStringFromLS)
    initialState = authObjectFromLS
} else {
    initialState = {
        user: null
    }
}

console.log("initial state in theme is : ", initialState)


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLoginCredentials: (state, action) => {

            // const { access, refresh } = action.payload
            state.user = action.payload
            localStorage.setItem("auth", JSON.stringify({ user: action.payload }))
        },
        logOut: (state) => {
            state.user = null
            localStorage.removeItem("auth")
        }
    }
})


export const { setLoginCredentials, logOut } = authSlice.actions
export default authSlice.reducer
// export const selectCurrentUser = (state: RootState) => state.auth.user
// export const selectCurrentToken = (state) => state.auth.access