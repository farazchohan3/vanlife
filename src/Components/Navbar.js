import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
export default function Navbar() {
  return (
    <div className={classes.container}>
      <div>
        <h1 className={classes.title}>
          <NavLink to="/" className={classes.logoLink}>
            #VanLife
          </NavLink>
        </h1>
        <p className={classes.subTitle}>A Platform for Luxury Van</p>
      </div>
      <nav className={classes.containerNav}>
        <ul>
          <li>
            <NavLink className={classes.navLink} to="host">
              Host
            </NavLink>
          </li>
          <li>
            <NavLink className={classes.navLink} to="about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className={classes.navLink} to="vans">
              Vans
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
