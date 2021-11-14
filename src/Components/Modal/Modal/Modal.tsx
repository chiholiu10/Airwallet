import { FC, useContext, useEffect, useState } from "react";
import { Context } from "../../../Context/context";
import { Content } from "../../Content";
import { Button } from "../Button/Button";
import { LoaderBlock, ModalBlock, OpenModal } from "./Modal.styles";
import Loader from "react-loader-spinner";

export const Modal: FC = () => {
    const context = useContext(Context);
    const [loader, setLoader] = useState<boolean>(false);
    const [allValidation, setAllValidation] = useState<boolean>(false);
    const { nameError, emailError, currentName, firstEmail, secondEmail, openModal, currentPage } = context.state;
    const validation = (!nameError && currentName.length > 0) && (!emailError && firstEmail.length > 0) && (firstEmail === secondEmail);

    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            "name": currentName,
            "email": firstEmail
        })
    };

    useEffect(() => {
        setAllValidation(validation);
    }, [validation]);

    const postData = async () => {
        setLoader(true);
        try {
            const response = await fetch("https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth", requestOptions);
            setLoader(false);
            return response.status;
        } catch (error) {
            console.error(error);
        }
    };

    return (
        openModal ?
            (<OpenModal>
                <ModalBlock>
                    {!loader ?
                        <>
                            <Content pageNumber={currentPage} />
                            <Button
                                disabled={!allValidation}
                                postData={postData}
                            />
                        </>
                        : (<LoaderBlock>
                            <Loader
                                type="Puff"
                                color="#00BFFF"
                                height={100}
                                width={100}
                                timeout={3000} //3 secs
                            />
                        </LoaderBlock>
                        )}
                </ModalBlock>

            </OpenModal>) : (<></>)
    );
};