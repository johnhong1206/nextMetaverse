import React from "react";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import TimeAgo from "timeago-react"; // var TimeAgo = require('timeago-react');

function Message({ key, message }) {
  const { user, logout } = useMoralis();
  const isUserMessage = message.get("ethAddress") === user.get("ethAddress");

  return (
    <div
      className={`flex items-end space-x-2 relative ${
        isUserMessage && "justify-end"
      }`}
    >
      <div className={`relative h-8 w-8 ${isUserMessage && "order-last ml-2"}`}>
        <Avatar username={user.getUsername()} />
      </div>
      <div
        className={`flex space-x-4 p-3 rounded-lg ${
          isUserMessage
            ? "rounded-br-none bg-pink-300"
            : "rounded-bl-none bg-blue-400"
        }`}
      >
        <p>{message.get("message")}</p>
      </div>
      <TimeAgo
        className={`text-[10px] italic text-gray-400 ${
          isUserMessage && "order-first pr-1"
        }`}
        datetime={message.createdAt}
      />
      <p
        className={`absolute -bottom-5 text-sm ${
          isUserMessage ? "text-pink-300" : "text-blue-300"
        }`}
      >
        {message.get("username")}
      </p>
    </div>
  );
}

export default Message;
