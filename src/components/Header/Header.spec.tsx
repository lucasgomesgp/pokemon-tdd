import { describe, it } from "vitest";
import { Header } from ".";
import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

describe("Header component", () => {
  it("Should be able to show image with icon of PokeDex", async () => {
    const { getByAltText } = render(<Header />);
    const image = getByAltText("PokeAPI logo") as HTMLImageElement;
    const src = "/logo.svg";

    expect(image.src).toContain(src);
  });

  it("Should be able to show input element for show specific Pokemons", async () => {
    const { getByPlaceholderText } = render(<Header />);
    const inputElement = getByPlaceholderText("Ex:. Pikachu, Bulbasaur");

    userEvent.type(inputElement, "Pikachu");

    expect(inputElement).toHaveAttribute("placeholder","Ex:. Pikachu, Bulbasaur");
    await waitFor(() => {
      expect(inputElement).toHaveAttribute("value", "Pikachu");
    });
  });
});
