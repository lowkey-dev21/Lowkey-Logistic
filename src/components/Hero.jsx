import React, { useState, useEffect, Suspense } from "react";
import styles from "../style";
import { motion } from "framer-motion";
import heroTruck from "../assets/heroTruck.png";
import IntoBtns from "./IntoBtns";

const Hero = () => {
  const Placeholder = () => <div className="placeholder"></div>;

  const ImageComponent = ({ src, alt }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 500);

      return () => clearTimeout(timer);
    }, []);

    return isVisible ? (
      <motion.img
        src={src}
        alt={alt}
        className="truck-animation h-auto"
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      />
    ) : null;
  };

  return (
    <>
      <section
        id="home"
        className={`${styles.paddingX} sm:pt-[5rem] pt-[4rem]`}
      >
        <section
          className={`${styles.heroPaddingY} flex flex-col items-center md:flex-row `}
        >
          {/* Phase one */}
          <section className="w-full md:w-1/2 lg:w-2/3 xl:w-3/4">
            <motion.div
              initial={{ y: "-10vh" }}
              animate={{ y: 0 }}
              transition={{ type: "spring", stiffness: 50 }}
              className={`text-[15px] sm:text-xl font-medium`}
            >
              Welcome to <span className="text-[lime] font-bold">LOWKEY</span>{" "}
              Logistics
            </motion.div>
            <motion.div
              initial={{ y: "3vh" }}
              animate={{ y: 0 }}
              transition={{ type: "spring", stiffness: 50 }}
              className={`${styles.boldText150} sm:text-4xl xl:w-[70%] lg:w-[95%] lg:text-6xl mt-3`}
            >
              Transparent Courier & Logistics Designed to Help Grow Your
              Business.
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="mt-2 sm:w-full text-slate-600 lg:w-[90%] xl:w-[70%]"
            >
              Your partner for exceptional logistics and courier services. Get
              transparent pricing, peace of mind, accelerated business growth,
              and 60-minute collection anywhere in the UK – request a quote now.
            </motion.p>

            {/* Into Buttons */}
            <section className={`w-full ${styles.hidden2} md:hidden`}>
              <IntoBtns />
            </section>
            <section className={`w-full ${styles.hidden}  md:block`}>
              <IntoBtns />
            </section>
          </section>

          {/* Phase 2 */}
          {/* Truck Image Container */}
          <div className="App w-full md:w-1/2 lg:w-1/2 xl:w-1/3">
            
              <img
                className="h-auto"
                src={heroTruck}
                alt="Your Image"
              />
            
          </div>
        </section>
      </section>
    </>
  );
};

export default Hero;
