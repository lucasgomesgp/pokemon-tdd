import { useEffect, useState } from "react";
import { Link, useParams} from "react-router-dom";
import { PokemonInfo } from "../../types/PokemonInfo";
import { getColorOfType } from "../../utils/get-color-of-type";
import { InfoArea } from "../../components/InfoArea";
import { HeaderSecondary } from "../../components/HeaderSecondary";

export function Pokemon() {
  const params = useParams();
  const baseURL = `https://pokeapi.co/api/v2/pokemon/${params.id}`;
  const [pokemon, setPokemon] = useState<PokemonInfo>();

  async function getPokemonChoosed() {
    const data = await fetch(baseURL);
    const pokemon = await data.json();
    setPokemon(pokemon);
  }

  useEffect(() => {
    getPokemonChoosed();
  }, []);
  return (
    <>
      <HeaderSecondary />
      {pokemon?.name ? (
        <div className="flex flex-wrap items-center justify-center gap-10  w-full mt-10">
          <div className="flex flex-col items-center gap-2">
            <p className="font-bold capitalize text-3xl">{pokemon?.name}</p>
            <div className="flex gap-2">
              {pokemon?.types.map(({ type }) => (
                <div
                  className={getColorOfType(type.name, true)}
                  key={type.name + type.url}
                >
                  <img src={`/assets/icons/${type.name}.svg`} alt={type.name} />
                  <p>{type.name}</p>
                </div>
              ))}
            </div>
          </div>
          <img
            src={pokemon?.sprites.other.home.front_default}
            alt={pokemon?.name}
            className="w-72 h-72 object-cover"
          />
          <div className="flex flex-col gap-4">
            {pokemon?.stats.map(({ stat, base_stat }) => (
              <InfoArea
                title={stat.name}
                fillingNumberOfBorder={base_stat}
                type={pokemon.types[0].type.name}
                key={stat.name}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4 items-center justify-center mt-20">
          <p>Pokemon não encontrado :(</p>
          <img src="/pikachu.gif" alt="Pikachu" className="w-20 h-20" />
          <p className="font-bold">
            Para voltar a página dos Pokemóns
            <Link to="/" className="ml-2 text-blue-500" data-testid="back-home">
              clique aqui!
            </Link>
          </p>
        </div>
      )}
    </>
  );
}
