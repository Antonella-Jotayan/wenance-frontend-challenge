import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { peopleApi } from "./api/peopleApi";
import peopleSlice from "./slices/people";

const reducers = combineReducers({
  people: peopleSlice,
  [peopleApi.reducerPath]: peopleApi.reducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(peopleApi.middleware),
});
