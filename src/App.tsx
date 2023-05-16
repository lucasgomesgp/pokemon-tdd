import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { InfoPokemons, PokemonInfo } from "./types/PokemonInfo";
import { Card } from "./components/Card";
import clsx from "clsx";

function App() {
  const [limit] = useState(110);
  const [pokemons, setPokemons] = useState<PokemonInfo[]>([]);
  const [pokemonsCopy, setPokemonsCopy] = useState<PokemonInfo[]>([]);
  const [notFound, setNotFound] = useState(false);
  const [numberPageChecked, setNumberPageChecked] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const pagination = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  async function getAllPokemons(limit: number, offset: number) {
    try {
      setNotFound(false);
      setIsLoading(true);
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
      setIsLoading(false);
    } catch (error) {
      console.log("Erro na busca dos pokemons");
    }
  }

  function filterPokemons(value: string) {
    setIsLoading(true);
    const nameInLowerCase = value.toLowerCase();
    const allPokemons = pokemons.filter((pokemon) =>
      pokemon.name.includes(nameInLowerCase)
    );
    setPokemons(allPokemons);
    setIsLoading(false);
    if (allPokemons.length === 0) {
      setNotFound(true);
    }
    if (value === "") {
      setPokemons(pokemonsCopy);
    }
  }

  useEffect(() => {
    setNumberPageChecked(1);
    getAllPokemons(limit, 0);
  }, [limit]);

  return (
    <div className="min-h-screen max-w-full bg-background-home">
      <Header handleFilterPokemons={filterPokemons} />
      <div className="flex flex-wrap items-center justify-end gap-1 mt-2 px-4 ">
        {pagination.map((page) => (
          <button
            className={clsx(
              "p-2 border bg-background-home shadow-lg text-black font-bold rounded-md",
              {
                "bg-red-600 text-white": numberPageChecked === page,
              }
            )}
            key={page}
            onClick={() => {
              const offtet = page === 1 ? 0 : limit * page;
              getAllPokemons(limit, offtet);
              setNumberPageChecked(page);
            }}
          >
            {page}
          </button>
        ))}
      </div>
      {isLoading ? (
        <p className="flex items-center justify-center font-bold">
          Carregando...
        </p>
      ) : (
        <div className="flex flex-wrap items-start justify-center gap-8 p-8 animate-opacity">
          {pokemons.map(({ id, name, sprites, types }) => {
            return (
              <Card
                id={id}
                key={name + "," + sprites.front_default}
                title={name}
                types={types}
                url={sprites.other.home.front_default}
              />
            );
          })}
          {notFound && !isLoading && pokemons.length === 0 && (
            <div className="flex flex-col items-center justify-center w-full">
              <p>Infelizmente seu Pokemon não foi encontrado</p>
              <img
                src="/empty.svg"
                alt="Empty data"
                className="max-w-[60%] mt-2"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
