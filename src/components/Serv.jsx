import React from "react";
import Footer from "./Footer";
import Soc from "./Soc";
import { motion } from "framer-motion";
import styles from "../style";
import { deliveryImg, deliverToday, nextDay, multiDrop } from "../assets";
import { Link } from "react-router-dom";

const Serv = () => {
  return (
    <>
      <motion.p
        initial={{ y: "-11vh" }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 50 }}
        className="text-2xl md:ml-[5.5rem] text-center  sm:ml-[2rem] sm:pt-[6rem] pt-[5rem] sm:mb-[2rem] font-semibold md:text-4xl text-[lime] "
      >
        Services
      </motion.p>

      <motion.section
        whileInView={{ y: [80, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`   w-full  gap-4 flex flex-col  py-[3rem]   pb-[4rem]  ${styles.paddingX}`}
      >
        <div className="gap-3 sm:gap-[2rem] sm:grid-cols-2 grid grid-cols-1 w-full   ">
          <img
            src={deliverToday}
            className=" mx-auto w-[95%] rounded-2xl shadow-lg sm:h-[500px] h-[300px]   "
            alt=""
          />
          <p className=" text-center sm:text-left  sm:text-xl flex flex-col ">
            <span className=" sm:text-3xl font-extrabold my-3 text-xl">
              Same Day Delivery
            </span>
            We provide fast and reliable same-day courier services for
            industries including aerospace, automotive, manufacturing,
            healthcare and more. Our experience and professional drivers will
            collect your consignment within the hour, delivering throughout the
            UK 24/7. You will also enjoy ultimate peace of mind with dedicated
            delivery as standard, online tracking, instant proof-of-delivery and
            a fully insured service. We have a team working to tight deadlines
            to ensure transporting your goods are delivered directly to the
            required destination in a dedicated vehicle.
            <Link
              to={`/bookings`}
              className={`${styles.btnPadding}sm:mx-0 flex sm:justify-center  sm:text-2xl sm:w-[160px] sm:py-[15px] bg-[lime] w-[120px] text-xl mx-auto mt-6 `}
            >
              Book Now
            </Link>
          </p>
        </div>
      </motion.section>

      {/* Phase "2" */}
      <motion.section
        whileInView={{ y: [80, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className={` bg-[#dddddd]  py-[3rem] w-full  gap-4 flex flex-col    pb-[4rem]  ${styles.paddingX}`}
      >
        <div className=" mt-[2rem]   gap-3 sm:gap-[2rem] sm:grid-cols-2 grid grid-cols-1 w-full   ">
          <img
            src={multiDrop}
            className=" mx-auto w-[95%] sm:order-2 rounded-2xl shadow-lg sm:h-[500px] h-[300px]   "
            alt=""
          />

          <p className=" text-center sm:order-1 sm:text-left  sm:text-xl flex flex-col ">
            <span className=" sm:text-3xl font-extrabold my-3 text-xl">
              Multi-Drop Deliveries
            </span>
            At LOWKEY Logistics we can support you when you need collection or
            deliveries to or from several locations. Our multidrop courier
            service is perfect for multi-site businesses, we provide a dedicated
            service to our customers who need to deliver several parcels on the
            same day with our specialized multi-drop courier service. Or
            multi-drop rental can be provided as a one-off on-demand service to
            help you handle busy times
            <Link
              to={`/bookings`}
              className={`${styles.btnPadding}sm:mx-0 flex sm:justify-center  sm:text-2xl sm:w-[160px] sm:py-[15px] bg-[lime] w-[120px] text-xl mx-auto mt-6 `}
            >
              Book Now
            </Link>
          </p>
        </div>
      </motion.section>

      {/* Phase "3" */}
      <motion.section
        whileInView={{ y: [80, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className={`  py-[3rem] w-full  gap-4 flex flex-col    pb-[4rem]  ${styles.paddingX}`}
      >
        <div className=" mt-[2rem]   gap-3 sm:gap-[2rem] sm:grid-cols-2 grid grid-cols-1 w-full   ">
          <img
            src={nextDay}
            className=" mx-auto w-[95%] sm:order-1 rounded-2xl shadow-lg sm:h-[500px] h-[300px]   "
            alt=""
          />

          <p className=" text-center sm:order-2 sm:text-left   sm:text-xl flex flex-col ">
            <span className=" sm:text-3xl font-extrabold my-3 text-xl">
              Overnight Delivery
            </span>
            LOWKEY logistics is always available whenever you need any parcel or
            shipment to be delivered urgently overnight. Our overnight courier
            service is a dedicated nationwide delivery service which is ready to
            respond to our customer’s rapid and critical needs to get a
            consignment delivered on time the next day within a tight deadline.
            With our couriers on standby, parcels and packages can be collected
            and dispatched any hour of the day and transported throughout the
            night, arriving at the destination at a time that suits you.
            <Link
              to={`/bookings`}
              className={`${styles.btnPadding}sm:mx-0 flex sm:justify-center  sm:text-2xl sm:w-[160px] sm:py-[15px] bg-[lime] w-[120px] text-xl mx-auto mt-6 `}
            >
              Book Now
            </Link>
          </p>
        </div>
      </motion.section>

      {/* Phase "4" */}
      <motion.section
        whileInView={{ y: [80, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className={` bg-[#dddddd]  py-[3rem] w-full  gap-4 flex flex-col    pb-[4rem]  ${styles.paddingX}`}
      >
        <div className=" mt-[2rem]   gap-3 sm:gap-[2rem] sm:grid-cols-2 grid grid-cols-1 w-full   ">
          <img
            src={deliveryImg}
            className=" object-cover mx-auto w-[95%] sm:order-2 rounded-2xl shadow-lg sm:h-[500px] h-[300px]   "
            alt=""
          />

          <p className=" text-center sm:order-1 sm:text-left  sm:text-xl flex flex-col ">
            <span className=" sm:text-3xl font-extrabold my-3 text-xl">
              Parcels Delivery
            </span>
            LOWKEY logistics have collected parcels for many years for delivery
            on the same day throughout the UK. We also assist many customers
            with parcels to be delivered nationwide to keep their reputation
            with their partners. You have several delivery options to choose
            from when sending parcels through ASL logistics, so we’re sure we
            have the right service for you regardless of your requirements and
            time constraints!
            <Link
              to={`/bookings`}
              className={`${styles.btnPadding}sm:mx-0 flex sm:justify-center  sm:text-2xl sm:w-[160px] sm:py-[15px] bg-[lime] w-[120px] text-xl mx-auto mt-6 `}
            >
              Book Now
            </Link>
          </p>
        </div>
      </motion.section>
      <Soc />
      <Footer />
    </>
  );
};

export default Serv;
