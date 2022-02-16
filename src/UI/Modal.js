import React from "react";
import classes from "./modal.module.css";
import ReactDOM from "react-dom";

const BackDrop = (props) => {
  return <div className={classes.overlay}>{props.children}</div>;
};
const Modal = ({ children }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop>{children}</BackDrop>,
        document.getElementById("overlays")
      )}
    </>
  );
};

export default Modal;
