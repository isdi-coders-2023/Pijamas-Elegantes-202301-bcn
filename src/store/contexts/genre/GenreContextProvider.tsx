import { useMemo, useReducer } from "react";
import genreReducer from "../../reducers/genreReducer";
import { GenreContext } from "./GenreContext";

export interface GenreContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const GenreContextProvider = ({
  children,
}: GenreContextProviderProps) => {
  const [genre, genreDispatch] = useReducer(genreReducer, "");

  const genreStore = useMemo(
    () => ({ genre, genreDispatch }),
    [genre, genreDispatch]
  );

  return (
    <GenreContext.Provider value={{ store: genreStore }}>
      {children}
    </GenreContext.Provider>
  );
};
