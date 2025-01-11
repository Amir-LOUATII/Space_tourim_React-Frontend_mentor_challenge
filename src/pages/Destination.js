import React, { useEffect, useState } from "react";
import classes from "./destination.module.css";
import useFetch from "../hooks/useFetch";
import Loading from "../UI/Loading";
import Hero from "../components/Hero";
import Image from "../components/destination/Image";
import Description from "../components/destination/Description";
import Error from "../UI/Error";
import usePreloadImages from "../hooks/usePreloadImages";
import LoadingPage from "./LoadingPage";

import DestinationBgDesktop from "../assets/destination/background-destination-desktop.jpg";
import DestinationBgTablet from "../assets/destination/background-destination-tablet.jpg";
import DestinationBgMobile from "../assets/destination/background-destination-mobile.jpg";

const Destination = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { isLoading, isError, data } = useFetch("destinations");

  // Image URLs for preloading
  const imageUrls = [
    DestinationBgDesktop,
    DestinationBgTablet,
    DestinationBgMobile,
  ];

  const { allLoaded } = usePreloadImages(imageUrls);

  if (!allLoaded) {
    return <LoadingPage />;
  }

  if (isLoading) {
    return (
      <main className={classes.main}>
        <Hero title={"PICK YOUR DESTINATION"} index={1} />
        <Loading />
      </main>
    );
  }

  if (isError.error) {
    return (
      <main className={classes.main}>
        <Hero title={"PICK YOUR DESTINATION"} index={1} />
        <Error message={isError.errorMsg} />
      </main>
    );
  }

  // Main content
  return (
    <main className={classes.main}>
      <Hero title={"PICK YOUR DESTINATION"} index={1} />
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
