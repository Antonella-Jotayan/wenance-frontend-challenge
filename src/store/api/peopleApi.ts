import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Person } from "../../types/person";
import { v4 as uuid } from "uuid";
import { PeopleResponse } from "./types";

export const peopleApi = createApi({
  reducerPath: "peopleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://swapi.dev/api",
  }),
  endpoints: (build) => ({
    getPeople: build.query<Person[], void>({
      query: () => ({ url: "/people", method: "GET" }),
      transformResponse: (response: PeopleResponse): Person[] => {
        const resultsWithId = response.results.map((person) => ({
          ...person,
          id: uuid(),
        }));
        return resultsWithId;
      },
    }),
  }),
});

export const { useGetPeopleQuery } = peopleApi;
