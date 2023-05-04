import { describe, it } from "vitest";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Card } from ".";

describe("Card", () => {
  it("Should be able to show title and type of Pokemons", () => {
    const url =
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png";
    const { getByText, getByTestId } = render(
      <Card
        title="Pikachu"
        type="Eletric"
        skill={10}
        speed={100}
        strength={10}
        url={url}
        weight={10}
      />
    );
    const imgPokemon = getByTestId("img-pokemon");

    expect(getByText("Pikachu")).toBeInTheDocument();
    expect(getByText("Eletric")).toBeInTheDocument();
    expect(imgPokemon).toHaveAttribute("src", url);
  });
});
