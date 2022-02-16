import React, { useEffect, useState } from "react";
import classes from "./techonoly.module.css";
import useFetch from "../hooks/useFetch";
import Hero from "../components/Hero";
import Loading from "../UI/Loading";
import TechnologySlider from "../components/technology/TechnologySlider";
import TechnologyImage from "../components/technology/TechnologyImage";
import TechnologyLanding from "../components/technology/TechnologyLanding";

const Technology = () => {
  const { data, isError, isLoading } = useFetch("technology");
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let counter = setInterval(() => {
      setActiveIndex((prevIndex) => {
        let newIndex = parseInt(prevIndex) + 1;

        if (newIndex > data.length - 1 && data.length > 0) {
          newIndex = 0;
        }
        return newIndex;
      });
      console.log(activeIndex);
    }, 4000);

    return () => {
      clearInterval(counter);
    };
  }, [activeIndex]);
  if (isLoading)
    return (
      <main className={classes.main}>
        <Hero title={" SPACE LAUNCH 101"} index={3} />
        {isLoading && <Loading />}
      </main>
    );
  if (isError.error)
    return (
      <main className={classes.main}>
        <Hero title={" SPACE LAUNCH 101"} index={3} />
        <h1>{isError.errorMsg}</h1>
      </main>
    );
  return (
    <main className={classes.main}>
      <section className={classes.section}>
        <Hero title={" SPACE LAUNCH 101"} index={3} />
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
