import React from "react";
import classes from "./hero.module.css";

function Hero({ title, index }) {
  return (
    <div className="container">
      {" "}
      <article className={classes.article}>
        <span className={classes.span}>0{index}</span>
        <h1 className={classes.h1}>{title}</h1>
      </article>
    </div>
  );
}

export default Hero;
