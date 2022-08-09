import { Fragment, useContext } from "react";
import React from "react";
import "./App.css";
import ConnectActionCable, { CheckInContext } from "./ConnectActionCabel";

const App = () => {
  let showMessages = useContext(CheckInContext);

  return (
    <Fragment>
      {/* here we can show the message which we are acessing from context api */}
      <ConnectActionCable>{showMessages}</ConnectActionCable>
    </Fragment>
  );
};

export default App;
