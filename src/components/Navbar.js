import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/shared/logo.svg";
import classes from "./Navbar.module.css";
import { FaBars } from "react-icons/fa";
import { useSidebarContext } from "../context/SidebarContext";

const Navbar = () => {
  const { openSidebar } = useSidebarContext();
  return (
    <header className={classes.header}>
      <div className={` container ${classes.container}`}>
        <img src={logo} alt="logo" className={classes.logo} />

        <div className={classes.line}></div>
        <nav className={classes["nav-center"]}>
          <ul className={classes.links}>
            <li>
              <NavLink
                to="/"
                className={(linkData) =>
                  linkData.isActive ? classes.active : null
                }
              >
                <span className={classes.span}>00</span> Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/destination"
                className={(linkData) =>
                  linkData.isActive ? classes.active : null
                }
              >
                <span className={classes.span}>01</span> Destination
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/crew"
                className={(linkData) =>
                  linkData.isActive ? classes.active : null
                }
              >
                <span className={classes.span}>02</span> Crew
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/technology"
                className={(linkData) =>
                  linkData.isActive ? classes.active : null
                }
              >
                <span className={classes.span}>03</span> Technology
              </NavLink>
            </li>
          </ul>
        </nav>
        <button
          typeof="button"
          onClick={openSidebar}
          className={classes.button}
        >
          <FaBars />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
