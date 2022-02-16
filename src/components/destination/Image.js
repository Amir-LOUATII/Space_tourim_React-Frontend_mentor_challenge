import React from "react";
import classes from "./image.module.css";

const Image = ({ data, activeIndex }) => {
  return (
    <>
      <div className={classes["img-container"]}>
        {data.map((item, index) => {
          return (
            <img
              key={index}
              className={index == activeIndex ? classes.active : classes.next}
              src={require(`../../assets/destination/${item.png}.png`)}
              alt=""
            />
          );
        })}
      </div>
    </>
  );
};

export default Image;
