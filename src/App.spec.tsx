import { describe, expect, it } from "vitest";
import App from "./App";
import { render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("App", () => {
  it("Should be able to show image of Pokemon", async () => {
    const { getByAltText } = render(<App />);
    const url =
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png";

    await waitFor(() => {
      expect(getByAltText("bulbasaur")).toHaveAttribute("src", url);
    });
  });

  it("Should be able to show info name of Pokemon", async () => {
    const { getByText } = render(<App />);

    await waitFor(() => {
      expect(getByText("bulbasaur")).toBeInTheDocument();
    });
  });
});
