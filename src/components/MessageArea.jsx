import React, { useEffect, useState } from "react";
import styled from "../css/MessageArea.module.css";
import { dbService } from "../fbase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import Message from "./Message";

const MessageArea = ({ nickName }) => {
  const [myMessage, setMyMessage] = useState([]);
  useEffect(() => {
    const q = query(
      collection(dbService, "talkWith"),
      orderBy("createdAt", "desc")
    );
    onSnapshot(q, (snapshot) => {
      const talking = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMyMessage(talking);
    });
  }, []);
  return (
    <div className={styled.messageArea}>
      {myMessage.map((list) => (
        <div key={list.id}>
          <>
            {nickName === list.creatorId ? (
              <p className="mymessage">
                <Message list={list} />
              </p>
            ) : (
              <p className="othermessage">
                <Message list={list} />
              </p>
            )}
          </>
        </div>
      ))}
    </div>
  );
};

export default MessageArea;
