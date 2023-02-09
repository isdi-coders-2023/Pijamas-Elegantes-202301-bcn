import React from "react";
import { createContext } from "vm";
import { GenreStructure } from "../../../data/types";
import { GenreAction } from "../../actions/genre/types";

export interface GenreContextStructure {
  store: {
    genre: GenreStructure;
    dispatch: React.Dispatch<GenreAction>;
  };
}

export const GenreContext = createContext({} as GenreContextStructure);
