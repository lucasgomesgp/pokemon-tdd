import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { InfoPokemons, PokemonInfo } from "./types";
import { Card } from "./components/Card";

function App() {
  const [limit, setLimit] = useState("50");
  const [pokemons, setPokemons] = useState<PokemonInfo[]>([]);
  const [pokemonsCopy, setPokemonsCopy] = useState<PokemonInfo[]>([]);
  const [notFound, setNotFound] = useState(false);

  async function getAllPokemons(limit: string, offset: string) {
    try {
      setNotFound(false);
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
      setPokemonsCopy(allPokemons);
    } catch (error) {
      console.log("Erro na busca dos pokemons");
    }
  }

  function filterPokemons(value: string) {
    const nameInLowerCase = value.toLowerCase();
    const allPokemons = pokemons.filter((pokemon) =>
      pokemon.name.includes(nameInLowerCase)
    );
    setPokemons(allPokemons);
    if (allPokemons.length === 0) {
      setNotFound(true);
    }
    if (value === "") {
      setPokemons(pokemonsCopy);
    }
  }

  useEffect(() => {
    getAllPokemons(limit, "0");
  }, [limit]);

  return (
    <div className="min-h-screen max-w-full bg-background-home">
      <Header handleFilterPokemons={filterPokemons} />
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
          <option value="50">50</option>
          <option value="150">150</option>
          <option value="200">200</option>
          <option value="300">200</option>
        </select>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-8 p-8 animate-opacity">
        {pokemons.map(({ id, name, sprites, types }) => {
          return (
            <Card
              id={id}
              key={name + "," + sprites.front_default}
              title={name}
              type={types[0].type.name}
              url={sprites.front_default}
            />
          );
        })}
        {notFound && pokemons.length === 0 && (
          <div className="flex flex-col items-center justify-center">
            <p>Infelizmente seu Pokemon não foi encontrado</p>
            <img src="/empty.svg" alt="Empty data" className="max-w-xl mt-2" />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
