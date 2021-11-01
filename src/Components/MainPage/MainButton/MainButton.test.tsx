import { MainButton } from "./MainButton";
import { shallow } from 'enzyme';

test('find button element', () => {
  const callBack = jest.fn();
  const MainButtonComponent = shallow(<MainButton onClick={callBack}/>);
  expect(MainButtonComponent.exists()).toBeTruthy();
});

test('onclick button', () => {
  const callBack = jest.fn();
  const MainButtonComponent = shallow(<MainButton onClick={callBack}/>);

  MainButtonComponent.find("button").simulate("click");
  expect(callBack.mock.calls.length).toEqual(1);
});