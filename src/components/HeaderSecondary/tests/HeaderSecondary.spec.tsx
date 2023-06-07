import { describe, expect, it } from "vitest";
import { HeaderSecondary } from "..";
import "@testing-library/jest-dom";
import { render } from "../../../../test/test-utils";

describe("HeaderSecondary", () => {
  it("Should be able to click for return home", () => {
    const { getByTestId } = render(
          <HeaderSecondary />
    );
    const icon = getByTestId("arrow-back");
    const logo = getByTestId("logo-back");

    expect(icon).toHaveAttribute("href", "/");
    expect(logo).toHaveAttribute("href", "/");
  });
});
