import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { InfoPokemons, PokemonInfo } from "./types";

function App() {
  const [limit, setLimit] = useState("0");
  const [pokemons, setPokemons] = useState<Array<PokemonInfo>>([]);

  async function getAllPokemons(limit: string, offset: string) {
    try {
      const baseURL = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
      const result = await fetch(baseURL);
      const pokemons = (await result.json()) as InfoPokemons;

      const allInfoOfEachPokemon = pokemons.results.map(async (pokemon) => {
        const data = await fetch(pokemon.url);
        const response = await data.json();
        return response;
      });
      const allPokemons = await Promise.all(allInfoOfEachPokemon);
      setPokemons(allPokemons);
    } catch (error) {
      console.log("Erro na busca dos pokemons");
    }
  }
  useEffect(() => {
    getAllPokemons(limit, "0");
  }, [limit]);

  return (
    <div className="min-h-screen max-w-full bg-background-home">
      <Header />
      <div className="flex items-center justify-end gap-1 mt-2 px-4 ">
        <p>Limit:</p>
        <select
          name="filterPokemons"
          className="border bg-white py-1 px-2 outline-none"
          onChange={(event) => {
            console.log(event.target.value);
            setLimit(event.target.value);
          }}
          value={limit}
        >
          <option value="0">0</option>
          <option value="50">50</option>
          <option value="150">150</option>
          <option value="200">200</option>
        </select>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-8 p-8">
        {pokemons.map((pokemon) => (
          <div className="flex flex-col items-center justify-center" key={pokemon.sprites.front_default}>
            <img
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              key={pokemon.name}
              className="w-40 h-40"
            />
            <p className="capitalize">{pokemon.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
