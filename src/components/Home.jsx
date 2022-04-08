import React from "react";
import styled from "../css/Home.module.css";
import Log from "./Log";
import UserInfo from "./UserInfo";

const Home = ({ logFlag, setNickName }) => {
  return (
    <>
      <div className={styled.intro}>hello</div>
      <div className={styled.login}>
        {logFlag ? (
          <UserInfo setNickName={setNickName} />
        ) : (
          <Log styled={styled} />
        )}
      </div>
    </>
  );
};

export default Home;
