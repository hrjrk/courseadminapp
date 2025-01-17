import React from 'react';
import {NavLink} from 'react-router-dom';

function Header() {
    const activeStyle = {color:"orange"};
    return(
      <nav>
          <NavLink exact activeStyle={activeStyle} to="/">
              Home
          </NavLink>
          {" | "}
          <NavLink activeStyle={activeStyle} to="/courses">
              Courses
          </NavLink>
          {" | "}
          <NavLink activeStyle={activeStyle} to="/authors">
              Authors
          </NavLink>
          {" | "}
          <NavLink activeStyle={activeStyle} to="/about">
              About
          </NavLink>
      </nav>
    );
}

export default Header;