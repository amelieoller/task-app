import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <NavLink to="/" className="navbar-brand">
      My Tasks
    </NavLink>
    <button className="navbar-toggler" type="button" data-toggle="collapse">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/tasks" className="nav-link">
            Tasks
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/projects" className="nav-link">
            Projects
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
