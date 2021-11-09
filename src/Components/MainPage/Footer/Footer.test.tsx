import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

test("check if Footer element exists", () => {
  render(<Footer />);
  const footer = screen.getByTestId("footer");
  expect(footer).toBeInTheDocument();
});