import { describe, it } from "vitest";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Card } from ".";

describe("Card", () =>{
    it("Should be able to show infos of Pokemons", () =>{
        const {getByText} = render(<Card />);
        
        expect(getByText("Strength")).toBeInTheDocument();
        expect(getByText("Speed")).toBeInTheDocument();
        expect(getByText("Weight")).toBeInTheDocument();
        expect(getByText("Skill")).toBeInTheDocument();
    });
});