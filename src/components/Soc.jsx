import { React, useState } from "react";
import { motion } from "framer-motion";

const Soc = () => {
  const [toggleSoc, setToggleSoc] = useState(false);

  return (
    <>
      <section className=" fixed flex flex-col items-end  gap-3 z-[100] bottom-[2rem] right-[1rem] ">
        <div className={` ${toggleSoc ? "flex" : "hidden"} flex-col text-[19px]  gap-2`}>
          <motion.a
            href=" https://wa.me/2349041589381"
            whileInView={{ y: [80, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className=" card  p-2 text-center flex items-center gap-1 bg-none "
          >
            {" "}
            <i className=" fa-brands text-green-600 fa-whatsapp"></i> Whatsapp
          </motion.a> 

          <motion.a
            href=" https://www.instagram.com/low.key_dev?igsh=MWl4NXk5OTJ2aXBmNw%3D%3D&utm_source=qr"
            whileInView={{ y: [80, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className=" card  p-2 text-center flex items-center gap-1 bg-none "
          >
            {" "}
            <i className=" fa-brands text-orange-600 fa-instagram"></i>{" "}
            Instagram
          </motion.a>
        </div>

        <i
          className={`${
            toggleSoc ? "fa-xmark" : "fa-message "
          } fa-solid  bg-[lime] w-[60px] flex cursor-pointer items-center justify-center h-[60px] rounded-full text-2xl animate-pulse `}
          onClick={() => setToggleSoc(!toggleSoc)}
        ></i>
      </section>
    </>
  );
};

export default Soc;
