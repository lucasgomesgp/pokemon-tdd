import { toast } from "react-toastify";
import { InfoPokemons, PokemonInfo } from "../types/PokemonInfo";
import { baseURL } from "../utils/base-url";

export async function getAllPokemons(limit: number, offset: number): Promise<PokemonInfo[] | undefined> {
    try {
      const url = `${baseURL}/pokemon?limit=${limit ?? 110}&offset=${offset ?? 0}`;
      const result = await fetch(url);
      const pokemons = (await result.json()) as InfoPokemons;
      const allInfoOfEachPokemon = pokemons.results.map(async (pokemon) => {
        const data = await fetch(pokemon.url);
        const response = await data.json();
        return response;
      });
      const allPokemons = await Promise.all(allInfoOfEachPokemon);
      return allPokemons;
    } catch (error) {
      toast.error('Ocorreu um erro ao buscar os Pokémons!', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  }