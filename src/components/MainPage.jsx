import React, { useEffect, useRef, useState } from "react";
import styled from "../css/MainPage.module.css";
import Header from "./Header";
import MessageArea from "./MessageArea";
import Section from "./Section";
import SendMessage from "./SendMessage";
import { onAuthStateChanged } from "firebase/auth";
import { auth, dbService } from "../fbase";
import { collection, onSnapshot, query, where } from "firebase/firestore";

const MainPage = () => {
  const [logFlag, setLogFlag] = useState(false);
  const [nickName, setNickName] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user.uid);
        setLogFlag(true);
        const q = query(
          collection(dbService, "nicknameTable"),
          where("userid", "==", user.uid)
        );
        onSnapshot(q, (snapshot) => {
          const getNickname = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          console.log(getNickname[0].nickname);
          setNickName(getNickname[0].nickname);
        });
      } else {
        setLogFlag(false);
      }
    });
  }, []);
  console.log(nickName);
  const openCheatRef = useRef();
  const closeCheatRef = useRef();
  const cheatRef = useRef();
  const openCheat = () => {
    openCheatRef.current.style.display = "none";
    closeCheatRef.current.style.display = "block";
    cheatRef.current.style.right = "0px";
  };
  const closeCheat = () => {
    openCheatRef.current.style.display = "block";
    closeCheatRef.current.style.display = "none";
    cheatRef.current.style.right = "-280px";
  };
  return (
    <>
      <Header logFlag={logFlag} setLogFlag={setLogFlag} />
      <div className={styled.section}>
        <Section />
      </div>
      <div className={styled.sideCheat} ref={cheatRef}>
        <MessageArea nickName={nickName} />
        {logFlag && <SendMessage nickName={nickName} />}
        <div className={styled.cheatBtn}>
          <i
            className="icon-circle-left"
            ref={openCheatRef}
            onClick={openCheat}
          ></i>
          <span
            className="icon-circle-right"
            ref={closeCheatRef}
            onClick={closeCheat}
          ></span>
        </div>
      </div>
    </>
  );
};

export default MainPage;
