import React from "react";
import About from "./About";
import Board from "./Board";
import Home from "./Home";
import Portfolio from "./Portfolio";
import { Route } from "react-router-dom";

const Section = () => {
  return (
    <>
      <Route path="/" exact>
        <Home />
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
    </>
  );
};

export default Section;
