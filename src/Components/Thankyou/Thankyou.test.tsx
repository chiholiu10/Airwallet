import { render, screen } from "@testing-library/react";
import { Thankyou } from "./Thankyou";

test("check if Thankyou element exists", () => {
  render(<Thankyou/>);  
  const thankyou = screen.getByTestId("thank-you");
  expect(thankyou).toBeInTheDocument();
})