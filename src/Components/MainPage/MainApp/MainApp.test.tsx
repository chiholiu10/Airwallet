import { shallow } from "enzyme";
import { MainApp } from "./MainApp";
 
test("amount of containing elements", () => {
  const mainpage = shallow(<MainApp />);
});