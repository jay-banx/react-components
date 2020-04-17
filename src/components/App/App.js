import React from "react";
import { Route } from "react-router-dom";

import "./App.css";

import Header from "../Header";
import CommentBox from "../CommentBox";
import LifecycleMethods from "../LifecycleMethods";
import ShuffleColors from "../ShuffleColors";

const App = () => {
  return (
    <div>
      <Header />
      <Route path="/comment-box">
        <CommentBox />
      </Route>
      <Route path="/lifecycle-methods">
        <LifecycleMethods />
      </Route>
      <Route path="/shuffle-colors">
        <ShuffleColors />
      </Route>
    </div>
  );
};

export default App;
