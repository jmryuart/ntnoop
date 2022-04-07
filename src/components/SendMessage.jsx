import React, { useRef } from "react";
import { dbService } from "../fbase";
import { addDoc, collection } from "firebase/firestore";
import styled from "../css/SendMessage.module.css";

const SendMessage = ({ nickName }) => {
  const messageRef = useRef("");
  const onSubmit = async (event) => {
    event.preventDefault();
    await addDoc(collection(dbService, "talkWith"), {
      text: messageRef.current.value,
      createdAt: Date.now(),
      creatorId: nickName,
    }).then(() => {
      messageRef.current.value = null;
    });
  };
  setTimeout(() => {
    messageRef.current.focus();
  }, 1);
  return (
    <div className={styled.sendMessage}>
      <form onSubmit={onSubmit}>
        <span>
          <i className="icon-bubbles4"></i>
        </span>
        <input type="text" ref={messageRef} />
        <button>
          <i className="icon-compass"></i>
        </button>
      </form>
    </div>
  );
};

export default SendMessage;
