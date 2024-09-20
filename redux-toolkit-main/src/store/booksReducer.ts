import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { getBooks } from './booksAction'

const initialState = {
    books: [],
    loading: false
}

export const bookSlice = createSlice({
    name: 'books',
    initialState:initialState,
    reducers:{},
    extraReducers: builder => {
        builder.addCase(
            getBooks.fulfilled,
            (state, actions) => {
                state.books = actions.payload
                state.loading = false
            }
        ),
        builder.addCase(
            getBooks.pending,
            (state, actions) => {
                state.loading = true
            }
        ),
        builder.addCase(
            getBooks.rejected,
            (state, actions) => {
                state.loading = false
                state.books = []
            }
        )
    }
})

export default bookSlice.reducer