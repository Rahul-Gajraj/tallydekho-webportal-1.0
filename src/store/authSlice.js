import { createSlice } from "@reduxjs/toolkit";

const AuthState = {
  fullName: "John Doe",
  email: "johndoe@gmail.com",
  mobile: "9876543210",
};

const authSlice = createSlice({
  name: "auth",
  initialState: AuthState,
  reducers: {
    updateAuth(state, action) {
      state = { ...state, ...action.payload };
      return state;
    },
  },
});

export default authSlice.reducer;

export const { updateAuth } = authSlice.actions;
