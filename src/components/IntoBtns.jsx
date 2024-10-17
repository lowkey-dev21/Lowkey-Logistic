import React from "react";
import styles from "../style";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const IntoBtns = () => {
  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className={` flex w-full gap-4 item-start mt-[1rem] sm:text-2xl  `}
      >
        <Link
          to={"bookings"}
          className={` bg-[lime] ${styles.btnPadding} sm:p-[20px] text-xl sm:px-[20px] px-[15px] `}
        >
          Book Now
        </Link>
        <Link
          to={"contactUs"}
          className={` bg-[lime] ${styles.btnPadding} items-center justify-center sm:p-[20px] px-[15px] sm:px-[20px] `}
        >
          Contact Us
        </Link>
      </motion.section>
    </>
  );
};

export default IntoBtns;
