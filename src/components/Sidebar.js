import React from "react";
import { FaTimes } from "react-icons/fa";
import Modal from "../UI/Modal";
import classes from "./Sidebar.module.css";
import { Link } from "react-router-dom";
import { useSidebarContext } from "../context/SidebarContext";

const Sidebar = () => {
  const { sidebarIsOpen, closeSidebar } = useSidebarContext();
  return (
    <>
      {sidebarIsOpen && (
        <Modal>
          <aside
            className={
              sidebarIsOpen ? `${classes.aside} ${classes.show}` : classes.aside
            }
          >
            <button onClick={closeSidebar} className={classes.btn}>
              <FaTimes className={classes.icon} />
            </button>
            <ul className={classes.links}>
              <li>
                <Link to="/" onClick={closeSidebar}>
                  <span>00</span> Home
                </Link>
              </li>
              <li>
                <Link to="/destination" onClick={closeSidebar}>
                  <span>01</span> Destination
                </Link>
              </li>
              <li>
                <Link to="/crew" onClick={closeSidebar}>
                  <span>02</span> Crew
                </Link>
              </li>

              <li>
                <Link to="/technologie" onClick={closeSidebar}>
                  <span>03</span> Technologie
                </Link>
              </li>
            </ul>
          </aside>
        </Modal>
      )}
    </>
  );
};

export default Sidebar;
