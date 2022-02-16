import React from "react";
import classes from "./HomeText.module.css";

const HomeText = () => {
  return (
    <section className={classes.section}>
      <p className={classes.title}>SO, YOU WANT TO TRAVEL TO</p>
      <h1 className={classes.h1}>SPACE</h1>
      <p className={classes.text}>
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>
    </section>
  );
};

export default HomeText;
