import React from "react";
import classes from "./crew-description.module.css";
import { useEffect } from "react";

const CrewDescription = ({ data, activeIndex, setActiveIndex }) => {
  return (
    <section className={classes.section}>
      <div className={classes.content}>
        {data.map((item, index) => {
          return (
            <article
              key={item.id}
              className={
                index == activeIndex
                  ? classes.active
                  : index == activeIndex - 1
                  ? classes.last
                  : classes.next
              }
            >
              <h1 className={classes.role}>{item.role}</h1>
              <h2 className={classes.name}>{item.name}</h2>
              <p className={classes.bio}>{item.bio}</p>
            </article>
          );
        })}
      </div>
      <div className={classes["index-container"]}>
        {data.map((item, index) => {
          return (
            <span
              key={index}
              onClick={(e) => {
                setActiveIndex(e.target.dataset.index);
              }}
              className={
                index == activeIndex
                  ? `${classes.span} ${classes["active-slide"]}`
                  : classes.span
              }
              data-index={index}
            ></span>
          );
        })}
      </div>
    </section>
  );
};

export default CrewDescription;
