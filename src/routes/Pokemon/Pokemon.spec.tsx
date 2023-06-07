import { describe, expect, it } from "vitest";
import { Pokemon } from ".";
import { render } from "../../../test/test-utils";
import "@testing-library/jest-dom";

describe("Pokemon", () => {
  it("Should be able to click for return home", () => {
    const { getByTestId } = render(
        <Pokemon />
    );
    const link = getByTestId("back-home");
    expect(link).toHaveAttribute("href", "/");
  });
});
