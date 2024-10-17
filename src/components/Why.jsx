import React from "react";
import styles from "../style";
import { motion } from "framer-motion";
import { whyUs } from "../constants";
import { Link } from "react-router-dom";

const Why = () => {
  return (
    <>
      <section
        class={`${styles.padding} ${styles.paddingX} mt-[2rem] flex flex-col w-full ${styles.limeBg}`}
      >
        <h1 className=" text-xl font-bold md:text-4xl ">Why Choose Us</h1>

        <div className="container  w-full  pt-[2rem] ">
          <div className="grid grid-cols-1 gap-4 lg:gap-[9rem] sm:grid-cols-2  lg:grid-cols-4 w-full">
            {whyUs.map((why) => {
              return (
                <motion.div
                  whileInView={{ y: [80, 0], opacity: [0, 1] }}
                  transition={{ duration: 0.5, delay: why.delay }}
                  className={`p-4 bg-white shadow-xl gap-5  w-[100%]  items-center flex flex-col  rounded-xl md:w-[300px] md:h-[350px] h-[280px] ${styles.greyBg} `}
                >
                  <p></p>
                  <i
                    className={`${why.icon} text-2xl bg-[lime] border-[2px] border-black shadow-2xl  p-3 rounded-full h-[50px] w-[50px] flex items-center justify-center `}
                  ></i>

                  <p className=" mt-[1rem] text-center">{why.items}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.section
          whileInView={{ y: [80, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5, delay: 1 }}
          className={` flex w-full gap-4 item-center  mt-5 justify-center  sm:text-2xl  `}
        >
          <Link to={'bookings'}
            className={` shadow-lg [...] transition-colors-black duration-300 ease-in-out delay sm:px-[28px]  bg-[white] ${styles.btnPadding} hover:border-[2px] hover:border-black sm:p-4 text-xl sm:px-[20px] px-[15px] `}
          >
            Book Now
          </Link>
          <Link to={"contactUs"}
            className={` shadow-lg [...] transition-colors-black items-center flex duration-300 ease-in-out delay bg-[white] ${styles.btnPadding} hover:border-[2px] hover:border-black  px-[15px] sm:px-[20px] `}
          >
            Contact Us
          </Link>
        </motion.section>
      </section>
    </>
  );
};

export default Why;
