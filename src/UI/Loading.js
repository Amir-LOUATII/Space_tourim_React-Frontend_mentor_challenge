import React from "react";
import classes from "./loading.module.css";

const Loading = () => {
  return (
    <section className={classes.section}>
      <div className={classes.loading}></div>
    </section>
  );
};

export default Loading;
