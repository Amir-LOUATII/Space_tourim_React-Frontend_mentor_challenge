import React from "react";
import classes from "./technology-landing.module.css";

const TechnologyLanding = ({ data, activeIndex }) => {
  return (
    <div className={classes["img-container"]}>
      {data.map((item, index) => {
        const { landscape, name, id } = item;
        return (
          <img
            key={id}
            className={
              index == activeIndex
                ? `${classes.img} ${classes.active}`
                : index == activeIndex - 1
                ? `${classes.img} ${classes.last}`
                : `${classes.img} ${classes.next}`
            }
            src={require(`../../assets/technology/${landscape}.jpg`)}
            alt={name}
          />
        );
      })}
    </div>
  );
};

export default TechnologyLanding;
