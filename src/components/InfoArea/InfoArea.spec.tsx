import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { InfoArea } from ".";

describe("InfoArea", () => {
  it("Should be able to show title", () => {
    const { getByText } = render(
      <InfoArea title="Speed" fillingNumberOfBorder={10} type="normal" />
    );

    expect(getByText("Speed")).toBeInTheDocument();
  });
});
