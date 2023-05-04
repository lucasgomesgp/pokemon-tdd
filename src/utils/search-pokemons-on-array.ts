import { CardProps } from "../components/Card/types";

export function searchPokemonsOnArray(allPokemons: Array<CardProps>, inputResponse: string){
    const filteredPokemons = allPokemons.filter((current) => current.title.includes(inputResponse));
    return filteredPokemons;
}