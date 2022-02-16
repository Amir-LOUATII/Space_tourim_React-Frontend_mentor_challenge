import React from "react";
import classes from "./Home.module.css";
import HomeText from "../components/home/HomeText";
import Explore from "../components/home/Explore";

const Home = () => {
  return (
    <main className={classes.main}>
      <div className="container">
        <div className={classes.content}>
          <div className={classes.col}>
            <HomeText />
          </div>
          <div className={classes.col}>
            <Explore />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
