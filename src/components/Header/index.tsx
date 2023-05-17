import { List, MagnifyingGlass } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { HeaderProps } from "./types";
import { Link } from "react-router-dom";

export function Header({ handleFilterPokemons }: HeaderProps) {
  const [pokemon, setPokemon] = useState("");
  const [menuIsOpen, setMenuIsOpen] = useState(true);

  function changeInputShowing() {
    const width = window.innerWidth;
    if (width > 600) {
      setMenuIsOpen(true);
    } else {
      setMenuIsOpen(false);
    }
  }
  window.addEventListener("resize", changeInputShowing);
  
  useEffect(() => {
    handleFilterPokemons(pokemon);
    changeInputShowing();
  }, [pokemon]);
  return (
    <header className="flex  max-[600px]:flex-col max-[600px]:gap-5 justify-between items-center py-2 px-4 bg-red-600">
      <div className="flex justify-between max-[600px]:w-full">
        <Link to="/">
          <img src="/logo.svg" alt="PokeAPI logo" className="max-w-[10rem]" />
        </Link>
        <button
          className="hidden max-[600px]:inline"
          onClick={() => {
            setMenuIsOpen(!menuIsOpen);
          }}
        >
          <List size={32} color="white" />
        </button>
      </div>
      {menuIsOpen && (
        <div className="flex flex-wrap max-sm:justify-center gap-2 max-[600px]:pb-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Ex:. Pikachu, Bulbasaur"
              value={pokemon}
              className="p-2 px-8 outline-none rounded-sm font-poppins w-64"
              onChange={(event) => {
                setPokemon(event.target.value);
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
            onClick={() => {
              handleFilterPokemons(pokemon);
            }}
          >
            Search
          </button>
        </div>
      )}
    </header>
  );
}
