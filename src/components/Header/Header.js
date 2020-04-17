import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/comment-box">CommentBox</Link>
          </li>
          <li>
            <Link to="/lifecycle-methods">LifecycleMethods</Link>
          </li>
          <li>
            <Link to="/shuffle-colors">ShuffleColors</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
