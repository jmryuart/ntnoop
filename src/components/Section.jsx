import React from "react";
import About from "./About";
import Board from "./Board";
import Home from "./Home";
import Portfolio from "./Portfolio";
import { Route } from "react-router-dom";
import Join from "./Join";

const Section = ({ logFlag ,setNickName }) => {
  return (
    <>
      <Route path="/" exact>
        <Home logFlag={logFlag} setNickName={setNickName} />
      </Route>
      <Route path="/about" exact>
        <About />
      </Route>
      <Route path="/portfolio" exact>
        <Portfolio />
      </Route>
      <Route path="/board" exact>
        <Board />
      </Route>
      <Route path="/join" exact>
        <Join />
      </Route>
    </>
  );
};

export default Section;
