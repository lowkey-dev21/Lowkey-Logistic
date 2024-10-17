import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { carAmt } from "../assets";
const CarAnimation = ({ onComplete }) => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    // Set animationComplete to true after animation duration
    const animationTimeout = setTimeout(() => {
      setAnimationComplete(true);
      onComplete(); // Call the onComplete function provided by the parent component
    }, 4000); // Adjust this value to match the animation duration
    return () => clearTimeout(animationTimeout); // Clear the timeout on component unmount
  }, [onComplete]);

  return (
    <motion.div
      initial={{ x: -100 }} // Start position (off-screen to the left)
      animate={{ x: 0 }} // End position (center)
      transition={{ duration: 1 }} // Animation duration
      onAnimationComplete={() => setAnimationComplete(true)}  className={` w-full justify-center flex   `}// Update state when animation completes
    >
      <div className=" flex justify-center w-full mt-[7rem] " >
        {/* Your car component here */}
        <img
          src={carAmt}
          alt="car"
          style={{ width: "500px", height: "auto" }}
        />
      </div>
    </motion.div>
  );
};

export default CarAnimation;
