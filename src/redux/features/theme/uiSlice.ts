import { createSlice } from "@reduxjs/toolkit";


interface UiState {
    sidebarCollapsed: boolean
    theme: string
    direction: string

}
let state: UiState;

let themeStringFromLS : string | null = localStorage.getItem("theme")


let themeObjectFromLS : UiState = JSON.parse(String(themeStringFromLS))


if (themeStringFromLS) {
    state = themeObjectFromLS

} else {
    state = {
        sidebarCollapsed: false,
        theme: "light",
        direction: "ltr",
    }
}
const initialState: UiState = state

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            localStorage.setItem("theme", JSON.stringify({
                ...state,
                sidebarCollapsed: !state.sidebarCollapsed
            }))

            state.sidebarCollapsed = !state.sidebarCollapsed
        },
        setSidebar: (state, action) => {
            localStorage.setItem("theme", JSON.stringify({
                ...state,
                sidebarCollapsed: action.payload
            }))
            state.sidebarCollapsed = action.payload
        },
        setTheme: (state, action) => {
            localStorage.setItem("theme", JSON.stringify({
                ...state,
                theme: action.payload
            }))
            state.theme = action.payload
        },
        setDirection: (state, action) => {
            localStorage.setItem("theme", JSON.stringify({
                ...state,
                direction: action.payload
            }))
            state.direction = action.payload
        },
    }
})


export const { toggleSidebar, setSidebar, setTheme, setDirection } = themeSlice.actions
export default themeSlice.reducer