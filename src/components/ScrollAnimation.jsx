import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const ScrollAnimation = () => {
  const { scrollYProgress } = useViewportScroll();

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

  return (
    <div style={{ height: "200vh", padding: "20px" }}>
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <motion.h1
          style={{
            fontSize: "3rem",
            opacity: opacity,
            y: y,
          }}
        >
          Scroll Down to See Animation!
        </motion.h1>
      </div>
    </div>
  );
};

export default ScrollAnimation;
