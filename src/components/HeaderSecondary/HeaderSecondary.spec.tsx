import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { HeaderSecondary } from ".";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

describe("HeaderSecondary", () => {
  it("Should be able to click for return home", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <HeaderSecondary />
      </BrowserRouter>
    );
    const icon = getByTestId("arrow-back");
    const logo = getByTestId("logo-back");
    
    expect(icon).toHaveAttribute("href", "/");
    expect(logo).toHaveAttribute("href", "/");
  });
});
