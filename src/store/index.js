import { combineReducers, configureStore } from "@reduxjs/toolkit";

import PreferenceSlice from "./preferenceSlice";
import AuthSlice from "./authSlice";

const reducers = combineReducers({
  preferences: PreferenceSlice,
  auth: AuthSlice,
});

export const store = configureStore({
  reducer: reducers,
});

export default store;
