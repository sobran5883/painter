import { useEffect, useState } from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import logo from '../assets/homeScreen/Group 2981.png'

import { GoHome } from "react-icons/go";
import { CiLocationOn } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdLanguage } from "react-icons/md";
import { GrPaint } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoIosArrowBack} from "react-icons/io";
import { useMediaQuery } from "react-responsive";
import { MdMenu } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
  let isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
  const [open, setOpen] = useState(isTabletMid ? false : true);
  const sidebarRef = useRef();
  const { pathname } = useLocation();

  useEffect(() => {
    if (isTabletMid) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isTabletMid]);

  useEffect(() => {
    isTabletMid && setOpen(false);
  }, [pathname]);

  const Nav_animation = isTabletMid
    ? {
        open: {
          x: 0,
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        open: {
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: "4rem",
          transition: {
            damping: 40,
          },
        },
      };

  return (
    <div>
      <div
        onClick={() => setOpen(false)}
        className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${
          open ? "block" : "hidden"
        } `}
      ></div>
      <motion.div
        ref={sidebarRef}
        variants={Nav_animation}
        initial={{ x: isTabletMid ? -250 : 0 }}
        animate={open ? "open" : "closed"}
        className=" bg-white border-r-[2px] border-r-[#ef8cab] text-gray shadow-xl z-[999] max-w-[16rem]  w-[16rem] 
            overflow-hidden md:relative fixed
         h-screen "
      >
        <div className="flex items-center gap-2.5 font-medium py-3 mx-3">
          <img
            src={logo}
            width={45}
            alt=""
          />
          <h className="text-2xl whitespace-pre">
            <span className="text-[#4db4bd]">P</span>
            <span className="text-[#fdab21]">A</span>
            <span className="text-[#e4225f]">I</span>
            <span className="text-[#5bb089]">N</span>
            <span className="text-[#fdab21]">T</span>
            <span className="text-[#4db4bd]">E</span>
            <span className="text-[#5bb089]">R</span>
          </h>
        </div>

        <div className="flex flex-col  h-full">
          <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1  font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100   md:h-[68%] h-[70%]">
            <li>
              <NavLink to={"/home"} className="link">
                <GoHome size={23} className="min-w-max" />
                 Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/location"} className="link">
                <CiLocationOn size={23} className="min-w-max" />
                Location
              </NavLink>
            </li>
            <li>
              <NavLink to={"/notification"} className="link">
                <IoMdNotificationsOutline size={23} className="min-w-max" />
                Notifications
              </NavLink>
            </li>
            <li>
              <NavLink to={"/language"} className="link">
                <MdLanguage size={23} className="min-w-max" />
                Language
              </NavLink>
            </li>
            <li>
              <NavLink to={"/services"} className="link">
                <GrPaint size={23} className="min-w-max" />
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to={"/signin"} className="link">
                <FaRegCircleUser size={23} className="min-w-max" />
                SignIn
              </NavLink>
            </li>
          </ul>
        </div>
        <motion.div
          onClick={() => {
            setOpen(!open);
          }}
          animate={
            open
              ? {
                  x: 0,
                  y: 0,
                  rotate: 0,
                }
              : {
                  x: -10,
                  y: -200,
                  rotate: 180,
                }
          }
          transition={{ duration: 0 }}
          className="absolute w-fit h-fit md:block z-50 hidden right-2 bottom-3 cursor-pointer"
        >
          <IoIosArrowBack size={25} />
        </motion.div>
      </motion.div>
      <div className="m-3 md:hidden  " onClick={() => setOpen(true)}>
        <MdMenu size={25} />
      </div>
    </div>
  );
};

export default Sidebar;
