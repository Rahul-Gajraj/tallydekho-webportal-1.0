import { createSlice } from "@reduxjs/toolkit";

const PreferenceState = {
  timezone: "Asia/Kolkata",
  country: "india",
  language: "english",
  firstDayOfWeek: "monday",
};

const CurrencyState = {
  currency: "INR",
  dateFormat: "DD/MM/YYYY",
  timeFormat: "24-hour",
  thousandSeparator: "",
  negativeFormat: "",
};

const preferenceSlice = createSlice({
  name: "preference",
  initialState: {
    preference: PreferenceState,
    currencyNumber: CurrencyState,
  },
  reducers: {
    updatePreference(state, action) {
      state.preference = { ...state.preference, ...action.payload };
    },
    updateCurrencyNumber(state, action) {
      state.currencyNumber = { ...state.currencyNumber, ...action.payload };
    },
  },
});

export default preferenceSlice.reducer;

export const { updatePreference, updateCurrencyNumber } =
  preferenceSlice.actions;
