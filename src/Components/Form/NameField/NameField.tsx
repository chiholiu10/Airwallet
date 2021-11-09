import { FC } from "react";
import { FieldBlock, Input, Error } from "../../../styles/General.styles";

interface NameFieldProps {
    nameValidator: Function;
    checkNameLength: Function;
    errorName: boolean;
    value: string;
}

export const NameField: FC<NameFieldProps> = ({ nameValidator, checkNameLength, errorName, value }) => (
    <FieldBlock>
        <Input
            type="text"
            name="name"
            value={value}
            placeholder="Name"
            onBlur={(e) => checkNameLength(e.target.value)}
            onChange={(e) => nameValidator(e.target.value)}
            required
        /> {errorName && <Error>Min 3 characters </Error>}
    </FieldBlock>
);