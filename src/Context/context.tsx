import { createContext, Dispatch } from "react";

export const initialState: State = { 
    currentPage: 0,
    openModal: false,
    validated: false,
    currentName: "",
    nameError: false,
    emailError: false,
    validateName: "",
    firstEmail: "",
    secondEmail: ""
};

export interface State {
    currentPage: number;
    openModal: boolean;
    validated: boolean;
    currentName: string;
    nameError: boolean;
    emailError: boolean;
    firstEmail: string;
    secondEmail: string;
    validateName: string;
};

export interface Actions {
    type: 
    'increment' 
    | "openModal" 
    | "closeModal"
    | "nameCheck" 
    | "emailCheck" 
    | "secondEmail"
    | "fetchStatus"
    | "validateName"

    currentPage?: number;
    openModal?: boolean;
    validated?: boolean;
    currentName?: string;
    nameError?: boolean;
    emailError?: boolean;
    firstEmail?: string;
    secondEmail?: string;
    validateName?: string;
};

export const reducer = (state: any, action: any) => {
    switch(action.type) {
        case "increment":
            return {
                ...state, 
                currentPage: state.currentPage < 1 ? state.currentPage + 1 : state.currentPage
            }
        case "openModal":
            return {
                ...state, 
                openModal: true
            }
        case "closeModal":
            return initialState
        case "nameCheck":
            return {
                ...state,
                nameError: action.nameError,
                currentName: action.currentName,
            }
        case "emailCheck": 
            return {
                ...state,
                emailError: action.emailError,
                firstEmail: action.firstEmail,
            }
        case "secondEmail":
            return {
                ...state,
                secondEmail: action.secondEmail
            }
        case "validateName": 
            return {
                ...state, 
                validateName: action.validateName
            }
        case "fetchStatus": 
            return {
                ...state,
                fetchStatus: action.fetchStatus,
            }
        default: 
            return state;
    }
}

export interface ContextProps {
    state: State;
    dispatch: Dispatch<Actions>;
};

export const Context = createContext<ContextProps>({
    state: initialState,
    dispatch: () => {}
});
