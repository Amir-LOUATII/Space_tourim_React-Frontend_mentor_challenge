import React from "react";
import { Link } from "react-router-dom";
import classes from "./error.module.css";

const Error = ({ message }) => {
  return (
    <section className={classes.section}>
      <div className="container">
        <div className={classes.error}>{message}</div>
        <Link to="/" className={classes.btn}>
          Back Home
        </Link>
      </div>
    </section>
  );
};

export default Error;
