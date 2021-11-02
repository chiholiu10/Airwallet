import { render, screen } from "@testing-library/react";
import { Nav } from "./Nav";

test("check if nav element exists", () => {
  render(<Nav/>);  
  const navbar = screen.getByTestId("navbar");
  expect(navbar).toBeInTheDocument();
});