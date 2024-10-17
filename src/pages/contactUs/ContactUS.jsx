import React from "react";
import { NavBar, Get, Message, Footer } from "../../components";
import { motion } from "framer-motion";
import styles from "../../style";
import Soc from "../../components/Soc";

const ContactUS = () => {
  return (
    <>
      <NavBar />
      <motion.p
        initial={{ y: "-11vh" }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 50 }}
        className="text-2xl md:ml-[5.5rem] text-center  sm:ml-[2rem] sm:pt-[6rem] pt-[5rem] font-semibold md:text-4xl text-[lime] "
      >
        Contact Us
      </motion.p>

      <section
        className={`  w-full    pb-[4rem]  ${styles.paddingX}`}
      >
        <Get />
      </section>
      <Soc/>
      <Footer />
    </>
  );
};

export default ContactUS;
