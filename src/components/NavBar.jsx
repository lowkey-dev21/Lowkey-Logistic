import React, { useState } from "react";
import styles from "../style";
import { navLinks } from "../constants";
import { NavLink, Link } from "react-router-dom";


const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <section
        className={`${styles.spaceBtw} z-[150] blury  fixed w-full   ${styles.paddingY}`}
      >
        {/* logo */}
        <p
          className={`${styles.boldText} ${styles.limeBg} ${styles.blackTx} ${styles.btnPadding}`}
        >
          LOWKEY
        </p>

        {/* Nav Bar list Desktop */}
        <section
          className={`items-center flex ${styles.hidden2} md:gap-[9rem] sm:gap-[3rem] xl:gap-[11rem] `}
        >
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "lime" : "black",
              fontWeight: isActive ? "bold" : "normal",
            })}
            className="flex items-center justify-center rounded-full w-[35px] h-[35px] p-1"
          >
            Home
          </NavLink>

          <NavLink
            to="/bookings"
            style={({ isActive }) => ({
              color: isActive ? "lime" : "black",
              fontWeight: isActive ? "bold" : "normal",
            })}
            className="flex items-center justify-center rounded-full w-[35px] h-[35px] p-1"
          >
            Bookings
          </NavLink>

          <NavLink
            to="/fleets"
            style={({ isActive }) => ({
              color: isActive ? "lime" : "black",
              fontWeight: isActive ? "bold" : "normal",
            })}
            className="flex items-center justify-center rounded-full w-[35px] h-[35px] p-1"
          >
            Fleets
          </NavLink>

          <NavLink
            to="/services"
            style={({ isActive }) => ({
              color: isActive ? "lime" : "black",
              fontWeight: isActive ? "bold" : "normal",
            })}
            className="flex items-center justify-center rounded-full w-[35px] h-[35px] p-1"
          >
           Services
          </NavLink>

          <NavLink
            to="/contactUs"
            style={({ isActive }) => ({
              color: isActive ? "lime" : "black",
              fontWeight: isActive ? "bold" : "normal",
            })}
            className="flex items-center justify-center rounded-full w-[35px] h-[35px] p-1"
          >
            Contact
          </NavLink>

          {/* Add more NavLink components as needed */}
        </section>

        {/* Nav Shortcuts */}
        <div className={`flex items-center gap-6 ${styles.hidden}`}>
          <section
            className={`flex gap-1 ${styles.greyBg} p-[6px] px-2 rounded-full`}
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-[lime] flex items-center justify-center rounded-full w-[35px] h-[35px] p-1"
                  : "flex items-center justify-center rounded-full w-[35px] h-[35px] p-1"
              }
            >
              <i className="fa-solid fa-home text-xl"></i>
            </NavLink>
            <NavLink
              to="/bookings"
              className={({ isActive }) =>
                isActive
                  ? "bg-[lime] flex items-center justify-center rounded-full w-[35px] h-[35px] p-1"
                  : "flex items-center justify-center rounded-full w-[35px] h-[35px] p-1"
              }
            >
              <i className="fa-solid fa-book text-xl"></i>
            </NavLink>
            <NavLink
              to="/fleets"
              className={({ isActive }) =>
                isActive
                  ? "bg-[lime] flex items-center justify-center rounded-full w-[35px] h-[35px] p-1"
                  : "flex items-center justify-center rounded-full w-[35px] h-[35px] p-1"
              }
            >
              <i className="fa-solid fa-truck-fast text-xl"></i>
            </NavLink>
          </section>

          {/* Toggle button */}
          <i
            onClick={() => setToggle(!toggle)}
            className={`fa-solid ${
              toggle ? "fa-xmark ml-[-15px]" : "fa-ellipsis-vertical"
            } text-3xl font-extrabold ${styles.hidden}`}
          ></i>
        </div>
      </section>


      {/* Nav Bar list Mobile */}
      <section
        className={`  ${
          toggle ? "flex" : "hidden"
        } fixed flex-col  w-[170px] h-[270px] z-[150] text-2xl gap-4 justify-center items-center  flex card right-[1rem] top-[4rem] sm:hidden md:hidden  `}
      >
        <NavLink
          to="/"
          style={({ isActive }) => ({
           
            background: isActive ? " lime " : " none ",
            width: isActive ? " 80% " : " none ",
            borderRadius: isActive ? " 10px " : " none",
           padding: isActive ? " 20px " : " none",
           

          })}
          className="flex items-center justify-center rounded-full w-[35px] h-[35px] p-1"
        >
          Home
        </NavLink>

        <NavLink
          to="/bookings"
          style={({ isActive }) => ({
            background: isActive ? " lime " : " none ",
            width: isActive ? " 80% " : " none ",
            borderRadius: isActive ? " 10px " : " none",
           padding: isActive ? " 20px " : " none",
           
          })}
          className="flex items-center justify-center rounded-full w-[35px] h-[35px] p-1"
        >
          Bookings
        </NavLink>

        <NavLink
          to="/fleets"
          style={({ isActive }) => ({
            background: isActive ? " lime " : " none ",
            width: isActive ? " 80% " : " none ",
            borderRadius: isActive ? " 10px " : " none",
           padding: isActive ? " 20px " : " none",
           
          })}
          className="flex items-center justify-center rounded-full w-[35px] h-[35px] p-1"
        >
          Fleets
        </NavLink>

        <NavLink
          to="/services"
          style={({ isActive }) => ({
            background: isActive ? " lime " : " none ",
            width: isActive ? " 80% " : " none ",
            borderRadius: isActive ? " 10px " : " none",
           padding: isActive ? " 20px " : " none",
           
          })}
          className="flex items-center justify-center rounded-full w-[35px] h-[35px] p-1"
        >
          Services
        </NavLink>

        <NavLink
          to="/contactUs"
          style={({ isActive }) => ({
            background: isActive ? " lime " : " none ",
            width: isActive ? " 80% " : " none ",
            borderRadius: isActive ? " 10px " : " none",
           padding: isActive ? " 20px " : " none",
           
          })}
          className="flex items-center justify-center rounded-full w-[35px] h-[35px] p-1"
        >
          Contact
        </NavLink>

        {/* Add more NavLink components as needed */}
      </section>

      {/* overlay */}
      <div
        onPointerEnter={() => setToggle(!toggle)}
        className={`${styles.hidden} w-full h-full ${
          toggle ? "fixed z-[100]" : "hidden"
        } bg-none ${styles.hidden}`}
      ></div>
      
    </>
  );
};

export default NavBar;
