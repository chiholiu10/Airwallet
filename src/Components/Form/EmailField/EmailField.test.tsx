import { EmailField } from "./EmailField";
import { mount, shallow } from 'enzyme';

let props = {
  errorEmail: false,
  checkEmailRegex: jest.fn(),
  getSecondEmail: jest.fn(),
  checkEmailConfirmation: false,
  valueFirstName: "",
  valueSecondName: ""
}

let event = {
  preventDefault() {},
  target: { value: 'test@gmail.com' }
};

test('no email error showing', () => {
  const wrapper = mount(<EmailField {...props} />);
  expect(wrapper.find({"data-testid": "mail-error"}).exists()).toBe(false);
});

test('no email match error showing', () => {
  const wrapper = mount(<EmailField {...props} />);
  expect(wrapper.find({"data-testid": "mail-error-match"}).exists()).toBe(false);
});

test('onchange method email', () => {
  const wrapper = shallow(<EmailField {...props}/>);
  wrapper.find({"data-testid": "email-input"}).simulate("change", event);
  expect(props.checkEmailRegex).toBeCalledWith("test@gmail.com");
});

test('onchange method confirm email', () => {
  const wrapper = shallow(<EmailField {...props}/>);
  wrapper.find({"data-testid": "confirm-email-input"}).simulate("change", event);
  expect(props.getSecondEmail).toBeCalledWith("test@gmail.com");
});