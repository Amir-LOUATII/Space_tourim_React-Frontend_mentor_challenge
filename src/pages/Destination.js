import React, { useState } from "react";
import classes from "./destination.module.css";
import useFetch from "../hooks/useFetch";
import Loading from "../UI/Loading";
import Hero from "../components/Hero";
import Image from "../components/destination/Image";
import Description from "../components/destination/Description";

const Destination = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { isLoading, isError, data } = useFetch("destinations");
  if (isLoading)
    return (
      <main className={classes.main}>
        <Hero title={" pick your destination"} index={1} />
        {isLoading && <Loading />}
      </main>
    );
  if (isError.error)
    return (
      <main className={classes.main}>
        <Hero title={" pick your destination"} index={1} />
        <h1>{isError.errorMsg}</h1>
      </main>
    );
  return (
    <main className={classes.main}>
      <Hero title={" pick your destination"} index={1} />
      <div className="container">
        <section className={classes.content}>
          <div className={classes.col}>
            <Image data={data} activeIndex={activeIndex} />
          </div>
          <div className={classes.col}>
            <Description
              data={data}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Destination;
