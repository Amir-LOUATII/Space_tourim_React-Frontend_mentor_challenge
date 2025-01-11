import React from "react";
import classes from "./error-page.module.css";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <main className={classes.main}>
      <section>
        <h1 className={classes.h1}>404</h1>
        <h3 className={classes.h3}>
          Sorry the page you tried cannot be found.
        </h3>
        <Link to="/" className={classes.btn}>
          Back Home
        </Link>
      </section>
    </main>
  );
};

export default ErrorPage;
