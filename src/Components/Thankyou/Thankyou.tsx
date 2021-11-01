import { FC } from "react";
import { ThankyouComponent } from "./Thankyou.styled";

export const Thankyou: FC = () => {
  return (
    <ThankyouComponent data-testid="thank-you">
      Thank you!
    </ThankyouComponent>
  )
}