import React from 'react';
import { NavLink } from 'react-router-dom';


const AppHeader = () => {
  return (
    <header className="app--header">
      <h1>React Modal Starter</h1>
      <nav className="app--nav">
        <NavLink to="/screen-one">Screen One</NavLink>
        <NavLink to="/screen-two">Screen Two</NavLink>
        <NavLink to="/screen-three">Screen Three</NavLink>
      </nav>
    </header>
  );
};

export default AppHeader;
