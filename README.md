#### MAKE PROJECT IN REACT

STEP#1 - install npx create-react-app actionCabel

#### IMPLEMENT COntextApi IN REACT for recieve the state from another component

           for use the context api in project we have to set provider to send the data, and use useContext for
           get that state or data in whole project which we send through context api. it is called
           global state  management...


#### IMPLEMENT ACTION CABEL IN REACT

STEP#2 - install action cabel third party ===> npm i actioncable

STEP#3 - create consumer-
for that we pass the action cable url which get from backend to connect the room

### STEP#4 - Create Subscription and recieve message --

         1-  for room creation we add channel name which provide by backend and add RoomId for that

         2- then room is connected

         3- make the function and call this function when page is rendered

         4- when room is coonected the receive the message from action cabel in recieve callback function.

### STEP#5 - Send Messages -

        1- if our room is connected with action-cabel then we also send the message from action

            cabel to use "send "  function.

### STEP#6 - Recieved Messages

        1- For recieve the message we make the callback function to reacieve the messgae

### STEP#7 - Disabled or UnSubscribe the Channel

         1- when u unmount from that screen then in unmount function is rendering where we make the function
         for the disbled the connection. and your connection will be closed.

### STEP#8 - Run Server

               Run server and check in browser to check the Two way Communication through Action Cabel
