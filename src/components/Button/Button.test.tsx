import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { describe, test, vi } from "vitest";
import { Button } from ".";

const buttonTestID = "button";
describe("Button", () => {
  test("Should be able to render the button", () => {
    const { getByTestId } = render(<Button>Hey, click on me</Button>);
    expect(getByTestId(buttonTestID)).toBeInTheDocument();
  });

  test("Should be able to render based on the children prop", () => {
    const { getByTestId } = render(<Button>Hey, click on me</Button>);
    expect(getByTestId(buttonTestID)).toHaveTextContent("Hey, click on me");
  });

  test("Should be able to fire event", () => {
    const handleClick = vi.fn();
    const { getByTestId } = render(
      <Button onClick={handleClick}>Hey, click on me</Button>
    );
    fireEvent.click(getByTestId(buttonTestID));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("Should be able to have default style", () =>{
    const { getByTestId } = render(<Button>Hey, click on me</Button>);

    expect(getByTestId(buttonTestID)).toHaveStyle({
        width: "100%",
        maxWidth: "380px",
        height:"40px",
        backgroundColor: "#B6E06B",
        color: "#222222",
    });
  });
//   test("Should be able to have style with background color blue",() =>{
//     const {getByTestId} = render(<Button>Clicar aqui</Button>);
//     expect(getByTestId(buttonTestID)).toHaveStyle({
//         backgroundColor: "blue",
//     })
//   });
  test("Should be able to click on the button",() =>{
    const handleClick = vi.fn();
    const {getByTestId} = render(<Button onClick={handleClick}>Clicar aqui</Button>);
    
    fireEvent.click(getByTestId(buttonTestID));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
