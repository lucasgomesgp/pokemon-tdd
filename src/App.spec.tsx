import { describe, expect, it } from "vitest";
import App from "./App";
import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("App", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  });
  it("Should be able to show image of Pokemon", async () => {
    const url =
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png";

    await waitFor(() => {
      expect(screen.getByAltText("bulbasaur")).toHaveAttribute("src", url);
    });
  });

  it("Should be able to show info name of Pokemon", async () => {
    await waitFor(() => {
      expect(screen.getByText("bulbasaur")).toBeInTheDocument();
    });
  });
 
});
