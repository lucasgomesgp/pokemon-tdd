import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Pokemon } from ".";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

describe("Pokemon", () => {
  it("Should be able to click for return home", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Pokemon />
      </BrowserRouter>
    );
    const link = getByTestId("back-home");
    expect(link).toHaveAttribute("href", "/");
  });
});
