import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { InfoPokemons, PokemonInfo } from "./types";
import { InfoArea } from "./components/InfoArea";
import clsx from "clsx";
import { getColorOfPokemonCircle } from "./utils/get-color-of-pokemon-circle";

function App() {
  const [limit, setLimit] = useState("0");
  const [pokemons, setPokemons] = useState<Array<PokemonInfo>>([]);
  const infoPokemon = ["Strength", "Speed", "Weight", "Skill"];
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
  }, [limit, pokemons.length]);

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
          <div
            className="flex flex-col bg-background-home shadow-lg p-2 items-center justify-center w-72 rounded-2xl border-2 hover:opacity-80 cursor-pointer transition-opacity "
            key={pokemon.sprites.front_default}
          >
            <div className="flex bg-white rounded-full p-2 mb-2 relative">
              <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                key={pokemon.name}
                className="w-40 h-40"
              />
              <svg
                width="159"
                height="182"
                viewBox="0 0 159 182"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 -left-1"
              >
                <g filter="url(#filter0_i_102_754)">
                  <path
                    d="M121.784 166.561C123.745 171.373 121.441 176.915 116.452 178.368C103.303 182.199 89.4158 183.023 75.8314 180.727C59.1445 177.906 43.5749 170.488 30.8719 159.305C18.1689 148.123 8.83584 133.62 3.92137 117.426C-0.993105 101.231 -1.29426 83.9873 3.05173 67.6312C7.39773 51.2751 16.2187 36.455 28.5235 24.8359C40.8283 13.2169 56.1293 5.25943 72.7075 1.8575C89.2857 -1.54442 106.484 -0.255969 122.37 5.5781C135.303 10.3275 146.949 17.9362 156.463 27.789C160.072 31.5273 159.321 37.4812 155.23 40.6857C151.14 43.8902 145.264 43.1189 141.555 39.4793C134.272 32.3324 125.529 26.7851 115.883 23.2429C103.282 18.6152 89.6402 17.5932 76.4903 20.2917C63.3404 22.9901 51.2035 29.302 41.4432 38.5183C31.683 47.7346 24.6862 59.49 21.2389 72.4637C17.7917 85.4375 18.0305 99.1155 21.9287 111.961C25.8269 124.806 33.2299 136.31 43.306 145.18C53.3821 154.05 65.732 159.934 78.9682 162.172C89.0998 163.885 99.4433 163.409 109.314 160.82C114.34 159.501 119.823 161.748 121.784 166.561Z"
                    className={getColorOfPokemonCircle(pokemon.types[0].type.name)}
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_i_102_754"
                    x="0"
                    y="0"
                    width="164.782"
                    height="187"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="6" dy="5" />
                    <feGaussianBlur stdDeviation="3.5" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.29 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_102_754"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <p className="capitalize text-black font-poppins font-bold text-xl">
              {pokemon.name}
            </p>
            <p className="font-montserrat mb-11">
              {pokemon.types[0].type.name}
            </p>

            <div className="flex flex-col items-start">
              {infoPokemon.map((info) => (
                <InfoArea title={info} fillingNumberOfBorder={50} key={info} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
