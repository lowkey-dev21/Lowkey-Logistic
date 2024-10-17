import React from "react";
import NavBar from "../../components/NavBar";
import styles from "../../style";
import { motion } from "framer-motion";
import { Footer } from "../../components";
import {
  car,
  LutonVan,
  MediumSizeVan,
  motoBike,
  CurtainSideLuton,
  smallVan,
} from "../../assets";
import Soc from "../../components/Soc";

const Fleets = () => {
  return (
    <>
      <NavBar />
      <motion.p
        initial={{ y: "-11vh" }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 50 }}
        className="text-2xl md:ml-[5.5rem] text-center  sm:ml-[2rem] sm:pt-[6rem] pt-[5rem] font-semibold md:text-4xl text-[lime] "
      >
        Our Fleets
      </motion.p>
      <section
        className={`  w-full  grid grid-cols-1 mx-auto sm:grid-cols-2 md:grid-cols-3  pb-[4rem]  ${styles.paddingX}`}
      >
        <motion.div
          whileInView={{ y: [80, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className=" fleets h-[250px] flex flex-col justify-center items-center mx-auto w-[90%] mt-7 p-4 hover:border-[2px] hover:border-[lime] duration-300 ease-in-out delay "
        >
          <img src={motoBike} className="w-[230px] h-[230px] " alt="" />
          <p>Moto Bike </p>
        </motion.div>

        <motion.div
          whileInView={{ y: [80, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className=" fleets h-[250px] flex flex-col justify-center items-center mx-auto w-[90%] mt-7 p-4 hover:border-[2px] hover:border-[lime] duration-300 ease-in-out delay "
        >
          <img src={car} className="w-[260px] h-[230px] " alt="" />
          <p>Car </p>
        </motion.div>

        <motion.div
          whileInView={{ y: [80, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className=" fleets h-[250px] flex flex-col justify-center items-center mx-auto w-[90%] mt-7 p-4 hover:border-[2px] hover:border-[lime] duration-300 ease-in-out delay"
        >
          <img src={smallVan} className="w-[260px] h-[230px] " alt="" />
          <p>Small Van </p>
        </motion.div>

        <motion.div
          whileInView={{ y: [80, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className=" fleets h-[250px] flex flex-col justify-center items-center mx-auto w-[90%] mt-7 p-4 hover:border-[2px] hover:border-[lime] duration-300 ease-in-out delay"
        >
          <img src={MediumSizeVan} className="w-[260px] h-[230px] " alt="" />
          <p>Medium Size Van </p>
        </motion.div>

        <motion.div
          whileInView={{ y: [80, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className=" fleets h-[250px] flex flex-col justify-center items-center mx-auto w-[90%] mt-7 p-4 hover:border-[2px] hover:border-[lime] duration-300 ease-in-out delay"
        >
          <img src={CurtainSideLuton} className="w-[260px] h-[230px] " alt="" />
          <p>Curtain Side Luton </p>
        </motion.div>

        <motion.div
          whileInView={{ y: [80, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className=" fleets h-[250px] flex flex-col justify-center items-center mx-auto w-[90%] mt-7 p-4 hover:border-[2px] hover:border-[lime] duration-300 ease-in-out delay"
        >
          <img src={LutonVan} className="w-[260px] h-[230px] " alt="" />
          <p>Luton Van </p>
        </motion.div>
      </section>
      <Footer/>
      <Soc/>
    </>
  );
};

export default Fleets;
