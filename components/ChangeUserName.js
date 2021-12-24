import React from "react";
import { useMoralis } from "react-moralis";

function ChangeUserName() {
  const { setUserData, isUserUpdating, userError, user } = useMoralis();

  const updateName = () => {
    const username = prompt(
      `Enter your new username (current username:${user?.getUsername()})`
    );

    if (!username) return;
    setUserData({ username });
  };

  return (
    <div className="text-sm absolute top-5 right-5 hover:text-pink-700">
      <button onClick={updateName} disabled={isUserUpdating}>
        Change your username
      </button>
    </div>
  );
}

export default ChangeUserName;
