import { FC } from "react";
import { Form } from "./Form/Form/Form";
import { Thankyou } from "./Thankyou/Thankyou";

interface PageNumber {
    pageNumber: number;
}

export const Content: FC<PageNumber> = ({ pageNumber }) => {
    switch (pageNumber) {
        case 0:
            return (
                <Form />
            );
        case 1:
            return (
                <Thankyou />
            );
        default:
            return <Form />;
    }
};