import { FC, useContext } from "react";
import { Context } from "../../../Context/context";
import { ModalButton } from "./Button.styles";

interface ButtonProps {
    postData: Function;
    disabled: boolean;
}

export const Button: FC<ButtonProps> = ({ disabled, postData }) => {
    const context = useContext(Context);
    const { currentPage } = context.state;
    const lastModalPage = currentPage === 1;

    const call = (fetchStatus: number) => {
        if (fetchStatus === 200) {
            context.dispatch({ type: "increment" });
        }
        if (lastModalPage) {
            context.dispatch({ type: "closeModal" });
        }
    };

    const nextPage = async () => {
        try {
            const response = await postData(postData);
            call(response);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <ModalButton data-testid="button-test" disabled={disabled} onClick={nextPage}>{lastModalPage ? "Close modal" : "Request an invite"}</ModalButton>
    );
};