import { FC, useContext } from "react";
import { EmailField } from "../EmailField/EmailField";
import { NameField } from "../NameField/NameField";
import { Context } from "../../../Context/context";
import validator from 'validator';

export const Form: FC = () => {
    const context = useContext(Context);
    const {
        nameError,
        emailError,
        validateName,
        firstEmail,
        secondEmail
    } = context.state;

    const nameValidator = (nameCheck: string) => {
        if (/^\D*$/.test(nameCheck)) {
            context.dispatch({ type: "validateName", validateName: nameCheck });
        }
    };

    const checkNameLength = (currentName: string) => {
        const validName = currentName.length > 2;
        context.dispatch({ type: "nameCheck", nameError: !validName, currentName: currentName });
    };

    const checkEmailRegex = (email: string) => {
        const emailValidation = !validator.isEmail(email);
        context.dispatch({ type: "emailCheck", emailError: emailValidation, firstEmail: email });
    };

    const getSecondEmail = (emailConfirm: string) => {
        context.dispatch({ type: "secondEmail", secondEmail: emailConfirm });
    };

    return (
        <>
            <NameField
                nameValidator={nameValidator}
                checkNameLength={checkNameLength}
                errorName={nameError}
                value={validateName}
            />
            <EmailField
                checkEmailRegex={checkEmailRegex}
                errorEmail={emailError}
                valueFirstName={firstEmail}
                valueSecondName={secondEmail}
                getSecondEmail={getSecondEmail}
                checkEmailConfirmation={firstEmail !== secondEmail}
            />
        </>
    );
};
