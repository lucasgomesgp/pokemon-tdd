import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { PokemonInfo } from "./types/PokemonInfo";
import { Card } from "./components/Card";
import clsx from "clsx";
import { getAllPokemons } from "./api/get-all-pokemons";
import { useQuery } from "@tanstack/react-query";

function App() {
  const [limit] = useState(110);
  const [offset, setOffset] = useState(0);
  const [numberPageChecked, setNumberPageChecked] = useState(1);
  const pagination = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const [pokemons, setPokemons] = useState<PokemonInfo[] | undefined>([]);

  const { data, isLoading, isError, refetch } = useQuery<
    PokemonInfo[] | undefined
  >({
    queryKey: ["pokemons-list"],
    queryFn: () => getAllPokemons(limit, offset),
  });

  function filterPokemons(value: string) {
    const nameInLowerCase = value.toLowerCase();
    const allPokemons = data?.filter((pokemon) =>
      pokemon.name.includes(nameInLowerCase)
    );
    if (allPokemons) {
      setPokemons(allPokemons);
    }
    if (value === "") {
      setPokemons(data);
    }
  }

  useEffect(() => {
    refetch();
    setPokemons(data);
  }, [data, numberPageChecked, refetch]);
  return (
    <div className="min-h-screen max-w-full bg-background-home">
      <Header handleFilterPokemons={filterPokemons} />
      <div className="flex flex-wrap items-center max-sm:justify-center justify-end gap-1 mt-2 px-4 ">
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
              const newOffset = page === 1 ? 0 : limit * page;
              setNumberPageChecked(page);
              setOffset(newOffset);
            }}
          >
            {page}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap items-start justify-center gap-8 p-8 animate-opacity">
        {pokemons?.length !== 0 &&
          pokemons?.map(({ id, name, sprites, types }) => {
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
        {isError ||
          (data?.length === 0 && (
            <div className="flex flex-col items-center justify-center w-full">
              <p>Erro ao buscar seu Pokémon :(</p>
              <img
                src="/empty.svg"
                alt="Empty data"
                className="max-w-[60%] mt-2"
              />
            </div>
          ))}
      </div>
      {isLoading && (
        <div className="m-auto w-20 h-20 rounded-full border-[0.5rem] border-gray-300 border-t-red-600 animate-rotate" />
      )}
    </div>
  );
}

export default App;
