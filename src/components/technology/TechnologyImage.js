import React from "react";
import classes from "./technology-image.module.css";

const TechnologyImage = ({ data, activeIndex }) => {
  return (
    <div className={classes["img-container"]}>
      {data.map((item, index) => {
        const { portrait, id, name } = item;
        return (
          <img
            className={
              index == activeIndex
                ? `${classes.img} ${classes.active}`
                : index == activeIndex - 1
                ? `${classes.img} ${classes.last}`
                : `${classes.img} ${classes.next}`
            }
            key={id}
            src={require(`../../assets/technology/${portrait}.jpg`)}
            alt={name}
          />
        );
      })}
    </div>
  );
};

export default TechnologyImage;
