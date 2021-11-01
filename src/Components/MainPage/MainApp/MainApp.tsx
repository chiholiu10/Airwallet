import { FC, useContext } from "react";
import { Context } from "../../../Context/context";
import { Modal } from "../../Modal/Modal/Modal";
import { Footer } from "../Footer/Footer";
import { MainButton } from "../MainButton/MainButton";
import { Nav } from "../Nav/Nav";
import { MainContainer, MainPage } from "./MainApp.styles";

export const MainApp: FC = () => {
    const context = useContext(Context);
    const openModal = () => context.dispatch({ type: "openModal" });

    return (
        <MainContainer>
            <Nav/>
            <MainPage>
                <MainButton onClick={openModal}>Open Modal</MainButton>
            </MainPage>
            <Modal />
            <Footer />
        </MainContainer>
    )
};