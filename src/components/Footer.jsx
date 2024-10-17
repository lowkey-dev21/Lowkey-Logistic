import React from "react";
import styles from "../style";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section
        className={` justify-between items-center  md:pt-[8rem] pt-[2rem]   flex flex-col w-full bg-[lime] ${styles.paddingX2} `}
      >
        <div className="  md:flex-row  flex justify-between w-full  ">
          {/* logo */}
          <p
            className={` hidden md:flex    items-center ${styles.boldText} ${styles.whiteBg} ${styles.blackTx} ${styles.btnPadding}`}
          >
            LOWKEY
          </p>

          {/* NavLinks */}
          {navLinks.map((navs) => {
            return (
              <Link
                className=" hidden md:flex text-xl font-semibold  hover:text-slate-500 bg-[lime] p-3 items-center justify-center rounded-full px-[2rem] "
                key={navs.id}
                to={`${navs.path}`}
              >
                {navs.title}
              </Link>
            );
          })}

          <Link
            className={` hidden md:flex  ${styles.greyBg} flex justify-center items-center text-xl font-semibold  ${styles.btnPadding}`}
          >
            Book Now
          </Link>
        </div>

        {/* Horizontal Line */}
        <div className="mt-[1rem] hidden md:flex md:mt-[70px] w-full h-[0.5px] bg-slate-200"></div>

        <div className=" md:flex md:py-[4rem] py-3 justify-between items-center ">
          <p className="  mt-3 md:mt-0 md:w-[45%] text-xl">
            <span className="text-2xl font-bold">LOWKEY Logistics</span>
            <br /> We are dedicated to providing seamless logistics solutions
            tailored to meeting your specific needs no matter the size or
            complexity of your operations
          </p>

          <p className="  md:w-[50%] mt-6 md:mt-0  text-xl">
            <span className="text-2xl w-full justify-between  font-bold">
              Get in touch
            </span>

            <p className=" w-full gap-5   mt-2 sm:flex  ">
              <div className=" flex gap-5 flex-col">
                <div className=" gap-2 flex items-center">
                  <i className=" fa-solid fa-location "></i>
                  <span>Unit 36, 416 Brixton Road, Ile-Ife Osun</span>
                </div>

                <div className=" flex items-center gap-2 ">
                  <i className="fa-solid fa-clock"></i>
                  <span>24 hours </span>
                </div>
              </div>

              <div className=" flex mt-4 sm:mt-0  flex-col gap-2">
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-phone "></i>
                  <a href="tel:+2349041589381">+2349041589381</a>
                </div>

                <div className=" flex items-center gap-2 mt-3">
                  <i className="fa-solid fa-envelope   "></i>
                  <a href="mailto:oyetolamuiz81@gmail.com">
                    oyetolamuiz81@gmail.com
                  </a>
                </div>
              </div>
            </p>
          </p>
        </div>
        {/* Horizontal Line */}
        <div className="mt-[1rem] md:mt-[70px] w-full h-[0.5px] bg-slate-100"></div>

        <div className=" sm:text-[15px] text-xs sm:flex-row gap-2 w-full justify-between flex-col items-center flex p-3 ">
          <p className=" ">
            <span className=" text-white  " >©2023 Lowkey </span>
            Logistics Copyrightr All Right Reserved
          </p>
          <p className=" ">Term and Conditions</p>
        </div>
      </section>
    </>
  );
};

export default Footer;
