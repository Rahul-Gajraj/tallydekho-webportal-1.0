import { combineReducers, configureStore } from "@reduxjs/toolkit";

import PreferenceSlice from "./preferenceSlice";

const reducers = combineReducers({
  preferences: PreferenceSlice,
});

export const store = configureStore({
  reducer: reducers,
});

export default store;
