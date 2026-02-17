import { createSlice } from "@reduxjs/toolkit";

const PreferenceState = {
  timezone: "Asia/Kolkata",
  country: "india",
  language: "english",
  firstDayOfWeek: "monday",
};

const preferenceSlice = createSlice({
  name: "preference",
  initialState: {
    preference: PreferenceState,
  },
  reducers: {
    updatePreference(state, action) {
      state.preference = { ...state.preference, ...action.payload };
    },
  },
});

export default preferenceSlice.reducer;

export const { updatePreference } = preferenceSlice.actions;
