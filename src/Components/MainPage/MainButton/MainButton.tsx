import { FC } from "react";
import { OpenModalButton } from "./MainButton.styles";

interface ButtonProps {
  onClick: Function;
}

export const MainButton: FC<ButtonProps> = ({ onClick }) => (
  <OpenModalButton data-testid="button-element" onClick={() => onClick()}>Open Modal</OpenModalButton>
);