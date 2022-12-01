import { configureStore } from '@reduxjs/toolkit'
import themeSlice from "./features/theme/uiSlice"
import authSlice from './features/auth/authSlice'
export const store = configureStore({
    reducer: {
        theme: themeSlice,
        auth : authSlice
        // comments: commentsReducer,
        // users: usersReducer,
    },
    // devTools: process.env.REACT_APP_DEBUG || true
    // middleware: getDefaultMiddleware => getDefaultMiddleware(),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch