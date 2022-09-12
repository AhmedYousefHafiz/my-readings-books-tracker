import { createSlice } from "@reduxjs/toolkit";
import { IBook } from "../models/books";

export interface BooksState {
  books: IBook[];
}

const initialState: BooksState = {
  books: [],
};
const booksSlice = createSlice({
  name: "booksSlice",
  initialState,
  reducers: {
    addBook(state, action) {
      state.books = [
        ...state.books.filter((item) => item.id !== action.payload.id),
        action.payload,
      ];
    },
    appendBooks(state, action) {
      state.books = action.payload;
    },
  },
});

export const booksReducer = booksSlice.reducer;
export const booksActions = booksSlice.actions;
