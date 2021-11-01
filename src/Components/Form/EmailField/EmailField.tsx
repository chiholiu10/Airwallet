import { FC } from "react";
import { FieldBlock, Input, Error } from "../../../styles/General.styles";

interface EmailFieldProps {
    errorEmail: boolean;
    checkEmailRegex: Function;
    getSecondEmail: Function;
    checkEmailConfirmation: boolean;
    valueFirstName: string;
    valueSecondName: string;
}

export const EmailField: FC<EmailFieldProps> = ({  
    errorEmail, 
    checkEmailRegex,
    getSecondEmail,
    checkEmailConfirmation,
    valueFirstName,
    valueSecondName 
}) => (
    <>
        <FieldBlock>
            <Input data-testid="email-input"
                type="email" 
                name="email" 
                placeholder="email"
                value={valueFirstName} 
                onChange={(e) => checkEmailRegex(e.target.value)} 
                required
            /> {errorEmail && <Error data-testid="mail-error">Example test@gmail.com</Error>}
        </FieldBlock>
        <FieldBlock>
            <Input data-testid="confirm-email-input"
                type="emailConfirmation" 
                name="emailConfirmation" 
                placeholder="confirm email"
                value={valueSecondName} 
                onChange={(e) => getSecondEmail(e.target.value)} 
                required
            />{checkEmailConfirmation && <Error data-testid="mail-error-match">Email not matching</Error>}
        </FieldBlock>
    </>
)