import React from "react";
import classes from "./description.module.css";

const Description = ({ data, activeIndex, setActiveIndex }) => {
  return (
    <section className={classes.desc}>
      <header className={classes.tabs}>
        {data.map((item, index) => {
          return (
            <button
              className={
                index == activeIndex
                  ? `${classes.btn} ${classes.active}`
                  : classes.btn
              }
              type="button"
              key={item.id}
              onClick={(e) => {
                setActiveIndex(e.target.dataset.index);
              }}
              data-index={index}
            >
              {item.name}
            </button>
          );
        })}
      </header>
      <section className={classes.section}>
        {data.map((item, index) => {
          return (
            <article
              className={
                index == activeIndex ? classes.activeSlide : classes.nextSlide
              }
              key={item.id}
            >
              <h1 className={classes.title}>{item.name}</h1>
              <p className={classes.description}>{item.description}</p>
              <div className={classes.info}>
                <div className={classes.distance}>
                  <span className={classes.span}>AVG. DISTANCE</span>
                  <span className={classes.value}>{item.distance}</span>
                </div>
                <div className={classes.travel}>
                  <span className={classes.span}>Est. travel time</span>
                  <span className={classes.value}>{item.travel}</span>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </section>
  );
};

export default Description;
