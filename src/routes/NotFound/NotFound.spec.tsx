import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { NotFound } from ".";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

describe("NotFound", () => {
  it("Should be able to click for return home", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
    const link = getByTestId("link-back");
    expect(link).toHaveAttribute("href", "/");
  });
});
