import { FC } from "react";
import { Navbar } from "./Nav.styles";

export const Nav: FC = () => {
    return (
        <Navbar data-testid="navbar">
            Broccoli &amp; Co
        </Navbar>
    )
}