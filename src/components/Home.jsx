import React, { useRef } from "react";
import styled from "../css/Home.module.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../fbase";
import { NavLink, useHistory } from "react-router-dom";

const Home = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const history = useHistory();
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      ).then(() => {
        history.push("/");
      });
    } catch (error) {
      alert("E-mail 또는 비밀번호가 잘못되었습니다.");
    }
  };

  return (
    <div>
      <div className={styled.login}>
        <form onSubmit={onSubmit}>
          <div className={styled.input}>
            <h4>E-mail</h4>
            <input type="email" ref={emailRef} required />
          </div>
          <div className={styled.input}>
            <h4>Password</h4>
            <input type="password" ref={passwordRef} required />
          </div>
          <button type="submit">로그인</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
