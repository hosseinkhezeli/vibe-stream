import { Route } from "next";

export const APP_ROUTES = {
  root: () => "/" as Route,
  user: (id: string) => `/user/${id}` as Route,
  album: (id: string) => `/album/${id}` as Route,
  track: (id: string) => `/track/${id}` as Route,
  artist: (id: string) => `/artist/${id}` as Route,
  playlist: (id: string) => `/playlist/${id}` as Route,
  search: () => `/search` as Route,
  searchTerm: (id: string) => `/search/${id}` as Route,
  preferences: () => "/preferences" as Route,
  signup: () => "/signup" as Route,
  login: () => "/login" as Route,
};
