import styled from "styled-components";
import theme from "../../../styles/Theme";

export const FooterComponent = styled.footer`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.grey};
  color: ${theme.colors.white};
`;