import React from "react";
import Lottie from "react-lottie";
import animationData from "../../Lotties/not-found.json";
import classes from "../Styles/NotFound.module.css";

function Loading() {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <div className={classes.lottie_container}>
        <Lottie options={lottieOptions} height={200} width={200} />
        <div className={classes.text_align}>
          <p>
            The Summoner you are looking for has not played a match in the past
            30 days.
          </p>
        </div>
      </div>
    </>
  );
}

export default Loading;
