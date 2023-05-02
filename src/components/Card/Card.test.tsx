import "@testing-library/react";
import { render } from "@testing-library/react";
import { describe, test } from "vitest";
import { Card } from ".";

describe("Card Component", () => {
  test("Should be able to show image of the pokemon on screen", () => {
    const { getByTestId } = render(<Card />);
    const image = getByTestId("pokemon") as HTMLImageElement;

    expect(image.src).toContain("front_default.png");
  });

  test("Should be able to show the title of Pokemon", () => {
    const { getByTestId } = render(<Card title="Bulbasour" />);

    expect(getByTestId("title")).toHaveTextContent("Bulbasour");
  });
});
