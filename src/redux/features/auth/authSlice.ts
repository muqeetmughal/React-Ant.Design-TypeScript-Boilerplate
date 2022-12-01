import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";


// const initiateLogin = createAsyncThunk("auth/login")

interface AuthState {
    user?: object,
    email?: string,
    access?: string,
    refresh?: string
}
let initialState: AuthState;


let authStringFromLS: string = String(localStorage.getItem("auth"))

console.log(authStringFromLS)

let authObjectFromLS: AuthState = JSON.parse(String(authStringFromLS))


// const { access, refresh, user, email } = authObjectFromLS

if (authStringFromLS) {
    initialState = authObjectFromLS
} else {
    initialState= {
        user : {}
    }
}

console.log("initial state is : ", initialState)


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLoginCredentials: (state, action) => {

            // const { access, refresh } = action.payload
            state.user = action.payload
        },
        logOut: (state) => {
            state.user = {}
            localStorage.removeItem("auth")
        }
    }
})


export const { setLoginCredentials, logOut } = authSlice.actions
export default authSlice.reducer
// export const selectCurrentUser = (state: RootState) => state.auth.user
// export const selectCurrentToken = (state) => state.auth.access