import React from "react";
import classes from "./Home.module.css";
import HomeText from "../components/home/HomeText";
import Explore from "../components/home/Explore";
import usePreloadImages from "../hooks/usePreloadImages";

import desktopBackground from "../assets/home/background-home-desktop.jpg";
import mobileBackground from "../assets/home/background-home-mobile.jpg";
import tabletBackground from "../assets/home/background-home-tablet.jpg";
import Loading from "../UI/Loading";
import LoadingPage from "./LoadingPage";

const Home = () => {
  const imageUrls = [desktopBackground, mobileBackground, tabletBackground];

  const { allLoaded } = usePreloadImages(imageUrls);

  return (
    <main className={classes.main}>
      {!allLoaded ? (
        <LoadingPage />
      ) : (
        <div className="container">
          {" "}
          (
          <div className={classes.content}>
            <div className={classes.col}>
              <HomeText />
            </div>
            <div className={classes.col}>
              <Explore />
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Home;
