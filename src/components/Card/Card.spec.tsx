import { beforeEach, describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Card } from ".";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

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
      <BrowserRouter>
        <Card
          title={pokemon.title}
          id={pokemon.id}
          types={pokemon.types}
          url={pokemon.url}
          key={pokemon.title}
        />
      </BrowserRouter>
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
    expect(linkElement).toHaveAttribute("href",`/pokemon/${pokemon.id}`);
  });
});
