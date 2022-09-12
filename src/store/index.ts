import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth-slice";
import { booksReducer } from "./books-slice";

const store = configureStore({
  reducer: {
    authStore: authReducer,
    bookStore: booksReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
