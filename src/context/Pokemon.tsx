import { createContext } from "react";

interface IPokemonContext{
    pokemon: string,
    setPokemon: React.Dispatch<React.SetStateAction<string>>;
}
export const PokemonContext = createContext({} as IPokemonContext);