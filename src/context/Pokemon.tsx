import { createContext, Dispatch, SetStateAction } from "react";

interface IPokemonContext {
  pokemonSearched: string;
  setPokemonSearched: (value: SetStateAction<string>) => void;
}

const defaultState = {
  pokemonSearched: "",
  setPokemonSearched: (pokemonSearched: string) => {},
} as IPokemonContext;

export const PokemonSearchedContext = createContext<IPokemonContext>(
  {} as IPokemonContext
);
