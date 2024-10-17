import React from "react";
import styles from "../style";
import { deliveryImg } from "../assets";

const OurCompany = () => {
  return (
    <>
      <section
        className={`relative flex flex-col sm:flex-row bg-cover bg-center w-full h-auto ${styles.padding} py-[2rem] ${styles.paddingX}`}
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 255, 0, 0.292), rgba(0, 255, 0, 0.297)), url(${deliveryImg})`,
        }}
      >
        <section
          className={` ${styles.paddingY} card2 flex md:gap-[30px] md:p-[6rem] gap-2 items-center flex-col w-full h-auto p-[40px] py-[30px] `}
        >
          <p className={`${styles.boldText100}  text- mt-[5px] `}>
            {" "}
            About <span className="text-[white] font-bold ">LOWKEY</span>{" "}
            Logistics
          </p>

          <p className=" md:w-[80%] md:text-xl text- md:text-left mt-1 text-[13px] ">
            We are an experienced and established logistics company in the
            United Kingdom. Our commitment to delivering outstanding service is
            a driving force behind our success and our company’s continued
            growth and prosperity. <br /> <br className=" hidden md:block " />{" "}
            <span className="hidden sm:block ">
              This made us have a customer base that is very stable with a lot
              of extremely long-term customer relationship that is based on our
              constant ability to provide exceptional service.
            </span>
          </p>

          <button
            className={`${styles.btnPadding}  mt-[20px] bg-[lime] md:p-5 font-medium md:text-2xl md:font-bold `}
          >
            Know More
          </button>
        </section>
      </section>
    </>
  );
};

export default OurCompany;
