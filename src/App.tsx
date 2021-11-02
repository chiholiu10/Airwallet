import { FC, useReducer } from "react";
import { MainApp } from "./Components/MainPage/MainApp/MainApp";
import { Context, initialState, reducer } from "./Context/context";

export const App: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const contextValues = {
    state,
    dispatch
  }

  return (
    <Context.Provider value={contextValues}>
      <MainApp />
    </Context.Provider>
  );
}

