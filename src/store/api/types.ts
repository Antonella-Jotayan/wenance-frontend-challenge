import { Person } from "../../types/person";

export type PeopleResponse = {
  count: number;
  next?: string;
  previous?: string;
  results: Person[];
};
