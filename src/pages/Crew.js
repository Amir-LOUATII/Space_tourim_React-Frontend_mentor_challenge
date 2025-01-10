import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import useFetch from "../hooks/useFetch";
import Loading from "../UI/Loading";
import classes from "./crew.module.css";
import CrewDescription from "../components/crew/CrewDescription";
import CrewImage from "../components/crew/CrewImage";

const Crew = () => {
  const { isLoading, isError, data } = useFetch("crew");
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
    }, 4000);

    return () => {
      clearInterval(counter);
    };
  }, [activeIndex]);

  if (isLoading) {
    return (
      <main className={classes.main}>
        <Hero title={"MEET YOUR CREW"} index={2} />
        <Loading />
      </main>
    );
  }
  if (isError.error) {
    return (
      <main className={classes.main}>
        <Hero title={"MEET YOUR CREW"} index={2} />
        <Loading />
        <h2>{isError.errorMsg}</h2>
      </main>
    );
  }
  return (
    <main className={classes.main}>
      <Hero title={"MEET YOUR CREW"} index={2} />
      <div className="container">
        <section className={classes.content}>
          <div className={classes.col}>
            <CrewDescription
              data={data}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          </div>
          <div className={classes.col}>
            <CrewImage data={data} activeIndex={activeIndex} />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Crew;
