import { Spin } from "antd";
import { createContext, useState } from "react";
import "./style.scss";
import { WrapperSpin } from "./styled";
const DEFAULT_STATE = {
  isLoading: false,
};

export const LoadingContext = createContext(DEFAULT_STATE);

export const LoadingProvider = (props) => {
  const [state, setState] = useState(DEFAULT_STATE);

  document.querySelector("body").style.overflow = state.isLoading
    ? "hidden"
    : "unset";
  return (
    <LoadingContext.Provider value={[state, setState]}>
      {state.isLoading && (
        <WrapperSpin background="white">
          <Spin className="wrapper-spin" size="large" />
        </WrapperSpin>
      )}
      {props.children}
    </LoadingContext.Provider>
  );
};
