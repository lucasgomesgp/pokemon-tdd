import { beforeEach, describe, it } from "vitest";
import { Card } from "..";
import "@testing-library/jest-dom";
import { render, screen } from "../../../../test/test-utils";

describe("Card", () => {
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
  beforeEach(() => {
    render(
          <Card
            title={pokemon.title}
            id={pokemon.id}
            types={pokemon.types}
            url={pokemon.url}
            key={pokemon.title}
          />
    );
  });
  it("Should be able to show title and type of Pokemons", () => {
    const imgPokemon = screen.getByTestId("img-pokemon");

    expect(screen.getByText("bulbasaur")).toBeInTheDocument();
    expect(screen.getByAltText("grass")).toBeInTheDocument();
    expect(imgPokemon).toHaveAttribute("src", pokemon.url);
  });

  it("Should be able to redirect after click on card", () => {
    const linkElement = screen.getByTestId("link");
    expect(linkElement).toHaveAttribute("href", `/pokemon/${pokemon.id}`);
  });
});
