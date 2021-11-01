import styled from "styled-components";
import theme from "../../../styles/Theme";

export const ModalButton = styled.button`
  padding: 10px 0;
  border-radius: 10px;
  box-shadow: 3px 3px 5px rgb(0 0 0 / 30%);
  &:disabled {
    opacity: 0.5;
    box-shadow: none;
  }
  width: 200px;
  text-align: center;
  height: 40px;
  padding: 0;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  background-color: ${theme.colors.black};
  color: ${theme.colors.white};
  font-weight: ${theme.fontWeights.normal};
`;

