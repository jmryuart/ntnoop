import React from "react";
import { auth } from "../fbase";

const UserInfo = ({ setNickName }) => {
  const logOut = () => {
    const ok = window.confirm("로그아웃 하시겠습니까?");
    if (ok) {
      auth.signOut();
      setNickName(null);
    }
  };
  return (
    <div>
      <button onClick={logOut}>로그아웃</button>
      UserInfo
    </div>
  );
};

export default UserInfo;
