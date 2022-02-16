import React from "react";
import classes from "./crew-image.module.css";

const CrewImage = ({ data, activeIndex, setActiveIndex }) => {
  return (
    <div className={classes["img-container"]}>
      {data.map((person, index) => {
        return (
          <img
            key={index}
            className={
              index == activeIndex
                ? classes.active
                : index == activeIndex - 1
                ? classes.last
                : classes.next
            }
            src={require(`../../assets/crew/${data[index].image}.png`)}
            alt=""
          />
        );
      })}
    </div>
  );
};

export default CrewImage;
