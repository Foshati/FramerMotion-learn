import React from "react";
import { motion } from "framer-motion";

const FramerMotionComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }} // Initial state (hidden and scaled down)
      animate={{ opacity: 1, scale: 1 }} // Animate to (visible and normal size)
      transition={{ duration: 0.5 }} // Animation duration
      whileHover={{ scale: 1.2 }} // Scale up on hover
      whileTap={{ scale: 0.9 }} // Scale down on tap/click
      style={{
        width: 150,
        height: 150,
        backgroundColor: "#4CAF50",
        borderRadius: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontSize: 20,
        cursor: "pointer",
      }}
    >
      Click Me!
    </motion.div>
  );
};

export default FramerMotionComponent;