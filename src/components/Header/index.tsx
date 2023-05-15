import { MagnifyingGlass } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { HeaderProps } from "./types";

export function Header({ handleFilterPokemons }: HeaderProps) {
 
  const [pokemon, setPokemon] = useState("");

  useEffect(() => {
    handleFilterPokemons(pokemon);
  }, [pokemon]);
  return (
    <header className="flex justify-between items-center py-2 px-4 bg-red-600">
      <img src="/logo.svg" alt="PokeAPI logo" className="max-w-[10rem]" />
      <div className="flex gap-2">
        <div className="relative">
          <input
            type="text"
            placeholder="Ex:. Pikachu, Bulbasaur"
            value={pokemon}
            className="p-2 px-8 outline-none rounded-sm font-poppins w-64"
            onChange={(event) => {
              setPokemon(event.target.value)
            }}
          />
          <MagnifyingGlass
            color="#DDDDDF"
            size={25}
            className="absolute top-2 left-0"
          />
        </div>
        <button
          className="bg-green-500 text-white p-2 rounded-3xl font-bold px-4"
          onClick={() => {handleFilterPokemons(pokemon)}}
        >
          Search
        </button>
      </div>
    </header>
  );
}
