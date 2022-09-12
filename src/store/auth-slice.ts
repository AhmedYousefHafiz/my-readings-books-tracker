import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
};

const AuthSlice = createSlice({
  name: "authReducer",
  initialState,
  reducers: {
    toggleAuth(state) {
      state.isLoggedIn = !state.isLoggedIn;
    },
  },
});

export const authReducer = AuthSlice.reducer;
export const authActions = AuthSlice.actions;
