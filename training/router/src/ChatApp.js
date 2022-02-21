import React, { useRef } from "react";
import socketIOClient from "socket.io-client";
import "./App.css";

const socket = socketIOClient("http://192.168.100.188:5000");
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

function ChatApp() {
  const scroll = React.useRef();
  const executeScroll = () => scrollToRef();

  const [message, setMessage] = React.useState("");
  const [message_list, setMessageList] = React.useState([]);
  const handleSend = () => {
    socket.emit("chat", {
      username: "Muthu",
      message,
    });
  };

  React.useEffect(() => {
    socket.on("chat", function (data) {
      setMessageList((current) => [...current, data]);
    });
  }, []);

  return (
    <>
      <div className="App">
        <h1>Chat</h1>
        <header className="App-header">
          <div className="Message">
            {message_list.map((msg, index) => {
              return (
                <p>
                  {msg.username} : {msg.message}
                </p>
              );
            })}
          </div>

          <button onClick={executeScroll}> Click to scroll </button>
          <div className="Chat">
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={handleSend}>Chat</button>
          </div>
          <p></p>
        </header>
      </div>
    </>
  );
}

export default ChatApp;
