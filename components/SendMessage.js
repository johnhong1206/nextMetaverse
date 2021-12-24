import React, { useState } from "react";
import { useMoralis } from "react-moralis";

function SendMessage({ endOfMessagesRef }) {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    if (!message) return;

    const Messages = Moralis.Object.extend("Messages");
    const messages = new Messages();

    messages
      .save({
        message: message,
        username: user.getUsername(),
        ethAddress: user.get("ethAddress"),
      })
      .then(
        (message) => {
          //message save
        },
        (error) => {
          console.error(error);
        }
      );
    endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    setMessage("");
  };

  return (
    <form
      onSubmit={sendMessage}
      className="flex w-11/12 fixed bottom-10 bg-black opacity-80 px-6 py-4 max-w-2xl rounded-full shadow-2xl border-4 border-blue-400"
    >
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={`enter your message ${user.getUsername()}`}
        className="flex-grow outline-none bg-transparent text-white placeholder-gray-400 pr-5"
      />
      <button
        onClick={sendMessage}
        className="font-bold text-pink-500 hover:text-pink-900"
      >
        Send
      </button>
    </form>
  );
}

export default SendMessage;
