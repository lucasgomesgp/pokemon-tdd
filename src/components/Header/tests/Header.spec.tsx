import { describe, it, vi } from "vitest";
import { Header } from "..";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { render, waitFor } from "../../../../test/test-utils";

describe("Header component", () => {
  it("Should be able to show image with icon of PokeDex", async () => {
    const handleFilter = vi.fn();
    const { getByAltText } = render(
          <Header handleFilterPokemons={handleFilter} />
    );
    const image = getByAltText("PokeAPI logo") as HTMLImageElement;
    const src = "/logo.svg";

    expect(image.src).toContain(src);
  });

  it("Should be able to show input element for show specific Pokemons", async () => {
    const handleFilter = vi.fn();
    const { getByPlaceholderText } = render(
          <Header handleFilterPokemons={handleFilter} />
    );
    const inputElement = getByPlaceholderText("Ex:. Pikachu, Bulbasaur");

    userEvent.type(inputElement, "Pikachu");

    expect(inputElement).toHaveAttribute(
      "placeholder",
      "Ex:. Pikachu, Bulbasaur"
    );
    await waitFor(() => {
      expect(inputElement).toHaveAttribute("value", "Pikachu");
    });
  });

  it("Should be able to function of search Pokemon works", async () => {
    const handleFilter = vi.fn();
    const { getByText, getByPlaceholderText } = render(
          <Header handleFilterPokemons={handleFilter} />
    );
    const inputElement = getByPlaceholderText("Ex:. Pikachu, Bulbasaur");
    const buttonElement = getByText("Search");

    userEvent.type(inputElement, "Pikachu");
    userEvent.click(buttonElement);

    await waitFor(() => {
      expect(handleFilter).toHaveBeenCalledTimes(1);
    });
  });
});
