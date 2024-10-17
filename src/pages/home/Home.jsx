import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  NavBar,
  Hero,
  About,
  ServicesH,
  Why,
  Get,
  Footer,
  OurCompany,
} from "../../components";
import Soc from "../../components/Soc";

import styles from "../../style";

const Home = () => {
  return (
    <>
      <section className={`${styles.section}`}>
        <NavBar />

        <div id="/">
          <Hero />
        </div>

        {/* Our company */}
        <div>
          <OurCompany />
        </div>

        <ServicesH />
        <Why />
        <Get />
        <Footer/>
        <Soc/>

      </section>
    </>
  );
};

export default Home;
