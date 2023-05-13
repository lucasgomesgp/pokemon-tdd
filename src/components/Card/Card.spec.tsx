import { describe, it } from "vitest";
import {  render } from "@testing-library/react";
import { Card } from ".";
import "@testing-library/jest-dom";

describe("Card", () => {
  it("Should be able to show title and type of Pokemons", () => {
    const pokemon = {
      id: "1",
      url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
      title: "bulbasaur",
      types: [
        {
          type: {
            name: "grass",
            url: "https://pokeapi.co/api/v2/type/12/",
          },
        },
        {
          type: {
            name: "poison",
            url: "https://pokeapi.co/api/v2/type/12/",
          },
        },
      ],
    };
    const { getByText,getByAltText, getByTestId } = render(
      <Card
        title={pokemon.title}
        id={pokemon.id}
        types={pokemon.types}
        url={pokemon.url}
        key={pokemon.title}
      />
    );
    const imgPokemon = getByTestId("img-pokemon");

    expect(getByText("bulbasaur")).toBeInTheDocument();
    expect(getByAltText("grass")).toBeInTheDocument();
    expect(imgPokemon).toHaveAttribute("src", pokemon.url);
  });
});
