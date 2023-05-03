import { useState } from "react";

export function Header() {
  const [pokemon, setPokemon] = useState("");

  return (
    <header className="flex justify-between items-center py-2 px-4 bg-red-600">
      <img src="public/logo.svg" alt="PokeAPI logo" className="max-w-[10rem]"/>
      <input
        type="text"
        placeholder="Ex:. Pikachu, Bulbasaur"
        value={pokemon}
        className="p-2 outline-none font-poppins"
        onChange={(event) => {
          setPokemon(event.target.value);
        }}
      />
    </header>
  );
}
