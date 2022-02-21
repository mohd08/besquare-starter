import React from "react";
import { io } from "socket.io-client";
import Bubble from "./Bubble";
import "./App.css";

function App() {
  const socket = io("http://192.168.100.182:5000");
  const [username, setUsername] = React.useState("");
  const [message, setMessage] = React.useState("");
  // const scroll = React.useRef();
  const [messages, setMessages] = React.useState([
    { username: "Muthu", messages: "Hello World!" },
  ]);

  React.useEffect(() => {
    socket.on("chat", (data) => {
      setMessages((current) => [...current, data]);
      // scroll.current.scrollIntoView();
    });

    return () => socket.close();
  }, []);

  const sendMessage = () => {
    socket.emit("chat", {
      username: username,
      message: message,
    });
  };
  return (
    <div className="App">
      <div id="besquare-chat">
        <div id="chat-window">
          {messages.map((element, index) => {
            return (
              <Bubble
                key={index}
                username={element.username}
                message={element.message}
              />
            );
            // <p ref={scroll}></p>;
          })}
        </div>

        <input
          type="text"
          id="username"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        ></input>

        <input
          type="text"
          id="message"
          placeholder="Message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        ></input>

        <button id="Send" onClick={sendMessage}>
          SEND
        </button>
      </div>
    </div>
  );
}

export default App;
