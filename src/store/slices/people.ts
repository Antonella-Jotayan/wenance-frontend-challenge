import { createSlice } from "@reduxjs/toolkit";
import { Person } from "../../types/person";
import { peopleApi } from "../api/peopleApi";
import { createSelector } from "reselect";

type InitialState = { people: Person[]; search: string };

const initialState: InitialState = { people: [], search: "" };

const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    removePerson: (state, action) => {
      const newArray = state.people.filter(
        (person) => person.id !== action.payload
      );
      return (state = { ...state, people: newArray });
    },
    updateSearch: (state, action) => {
      return (state = { ...state, search: action.payload });
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      peopleApi.endpoints.getPeople.matchFulfilled,
      (state, action) => {
        return (state = { ...state, people: action.payload });
      }
    );
  },
});

export const peopleSelector = (state) => state.people.people;
export const searchSelector = (state) => state.people.search;

export const filteredPeopleSelector = createSelector(
  [peopleSelector, searchSelector],
  (people, search) =>
    people.filter((person) =>
      person.name.toLowerCase().includes(search.toLowerCase().trim())
    )
);

export const { removePerson, updateSearch } = peopleSlice.actions;
export default peopleSlice.reducer;
