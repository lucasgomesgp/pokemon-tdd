import { describe, expect, it } from "vitest";
import App from "./App";
import { render } from "../test/test-utils";
import "@testing-library/jest-dom";

describe("App", () => {
  it("Should be render loading animation when page loading", () => {
    const { getByTestId } = render(<App />);
    const loadingElement = getByTestId("loading");
    expect(loadingElement).toBeVisible();
  });
  
});
