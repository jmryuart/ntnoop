import React from "react";
import styled from "../css/Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className={styled.hdrWrap}>
      <header>
        <h1>
          <NavLink to="/">
            <i className="icon-nt4"></i>
          </NavLink>
        </h1>
        <menu>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">진모에 대해</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio">포트폴리오</NavLink>
          </li>
          <li>
            <NavLink to="/board">자유게시판</NavLink>
          </li>
        </menu>
      </header>
    </div>
  );
};

export default Header;
