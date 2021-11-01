import { render, screen } from "@testing-library/react";
import { Button } from "./Button";
import { shallow } from "enzyme";

test("check if button element exists", () => {
  const callBack = jest.fn();
  render(<Button postData={callBack} disabled={false} />)
  const button = screen.getByTestId("button-test");
  expect(button).toBeInTheDocument();
});

test("check if button fires onclick", () => {
  const callBack = jest.fn();
  const wrapper = shallow(<Button postData={callBack} disabled={false} />)
  wrapper.find("button").simulate("click");
  expect(callBack).toHaveBeenCalledTimes(1)
})