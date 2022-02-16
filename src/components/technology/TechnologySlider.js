import React from "react";
import classes from "./technology-slider.module.css";

const TechnologySlider = ({ data, activeIndex, setActiveIndex }) => {
  return (
    <section className={classes.section}>
      <div className={classes["index-container"]}>
        {data.map((item, index) => {
          return (
            <button
              onClick={(e) => {
                setActiveIndex(e.target.dataset.index);
              }}
              className={
                index == activeIndex
                  ? `${classes.active} ${classes.btn}`
                  : classes.btn
              }
              key={index}
              data-index={index}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
      <div className={classes.text}>
        {data.map((item, index) => {
          const { id, name, description, portrait, landscape } = item;
          return (
            <article
              key={item.id}
              className={
                index == activeIndex
                  ? classes["text-active"]
                  : index == activeIndex - 1
                  ? classes["text-last"]
                  : classes["text-next"]
              }
            >
              <h1 className={classes.title}>THE TECHNOLOGY</h1>
              <h2 className={classes.name}>{name}</h2>
              <p className={classes.description}>{description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default TechnologySlider;
