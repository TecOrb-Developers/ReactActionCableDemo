import { createContext, Fragment, useEffect, useState } from "react";
import actionCable from "actioncable";
import React from "react";

const CableApp = {};
CableApp.cable = actionCable.createConsumer(`ACTION_CABEL_URL`);

export const CheckInContext = createContext(null);

const ConnectActionCable = ({ children }) => {
  const [chanelName, setConection] = useState("");
  const [showMessages, setMessage] = useState("");

  useEffect(() => {
    const notify = CableApp.cable.subscriptions.create(
      {
        channel: "NotifyChannel",
        roomId: `434`,
      },
      {
        connected: () => {
          // Connect the Room For Two way Communication
          console.log("Connected with room");
        },
        received: async (messages) => {
          // Recived the message from cabel
          console.log("recieved message from action cabel", messages);
          setMessage(messages);
        },
        return() {
          // Disabled or Remove the Connection
          notify && CableApp.cable.subscriptions.remove(notify);
        },
      }
    );
    setConection(notify);
  }, []);

  const sendMessage = () => {
    chanelName && chanelName.send("messages");
  };

  return (
    <Fragment>
      <CheckInContext.Provider
        value={{
          showMessages: showMessages,
        }}
      >
        {children}{" "}
        {/* here we show the message data which we recieve using Context Api*/}
      </CheckInContext.Provider>
      <button onClick={sendMessage}>Send Message</button>
    </Fragment>
  );
};
export default ConnectActionCable;
