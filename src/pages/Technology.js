import React, { useEffect, useState } from "react";
import classes from "./Technology.module.css";
import useFetch from "../hooks/useFetch";
import Hero from "../components/Hero";
import Loading from "../UI/Loading";
import TechnologySlider from "../components/technology/TechnologySlider";
import TechnologyImage from "../components/technology/TechnologyImage";
import TechnologyLanding from "../components/technology/TechnologyLanding";
import usePreloadImages from "../hooks/usePreloadImages";
import LoadingPage from "./LoadingPage";

import TechnologyBgDesktop from "../assets/technology/background-technology-desktop.jpg";
import TechnologyBgTablet from "../assets/technology/background-technology-tablet.jpg";
import TechnologyBgMobile from "../assets/technology/background-technology-mobile.jpg";

const Technology = () => {
  const { data, isError, isLoading } = useFetch("technology");
  const [activeIndex, setActiveIndex] = useState(0);

  const imageUrls = [
    TechnologyBgDesktop,
    TechnologyBgTablet,
    TechnologyBgMobile,
  ];

  const { allLoaded } = usePreloadImages(imageUrls);

  useEffect(() => {
    if (!data || data.length === 0) return;

    const counter = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => {
      clearInterval(counter);
    };
  }, [data]);

  if (!allLoaded) {
    return <LoadingPage />;
  }

  if (isLoading) {
    return (
      <main className={classes.main}>
        <Hero title={"SPACE LAUNCH 101"} index={3} />
        <Loading />
      </main>
    );
  }

  if (isError.error) {
    return (
      <main className={classes.main}>
        <Hero title={"SPACE LAUNCH 101"} index={3} />
        <h1>{isError?.errorMsg}</h1>
      </main>
    );
  }

  return (
    <main className={classes.main}>
      <section className={classes.section}>
        <Hero title={"SPACE LAUNCH 101"} index={3} />
        <TechnologyLanding data={data} activeIndex={activeIndex} />
        <div className="container">
          <section className={classes.content}>
            <div className={classes.col}>
              <TechnologySlider
                data={data}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            </div>
            <div className={classes.col}>
              <TechnologyImage data={data} activeIndex={activeIndex} />
            </div>
          </section>
        </div>
      </section>
    </main>
  );
};

export default Technology;
