import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const ScrollCountUp = ({ end, duration }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
    rootMargin: "-100px 0px",
    
  });

  return (
    <div ref={ref} className="countup-container en">
      {inView ? (
        <CountUp end={end} duration={duration} className="countup-number" />
      ) : (
        <span className=" en countup-number">0</span>
      )}
    </div>
  );
};

export default ScrollCountUp;