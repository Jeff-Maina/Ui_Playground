import { motion } from "framer-motion";
import styles from "../../styles/ColumnDrop.module.css";
import { useState } from "react";
import Link from "next/link";

import ComponentDetails from "@/components/ComponentDetails";

const HamburgerMenu = ({ isMenuActive, setMenuActive }) => {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        setMenuActive(!isMenuActive);
      }}
      className="w-full h-full relative z-50"
    >
      <div className="w-full h-full absolute top-0 left-0 pointer-events-none gap-2 flex flex-col p-1 items-end justify-center">
        <motion.div
          initial={{ y: 0, opacity: 1 }}
          animate={{
            y: isMenuActive ? 11 : 0,
            opacity: isMenuActive ? 0 : 1,
          }}
          transition={{
            type: "tween",
            y: {
              duration: 0.2,
              delay: !isMenuActive ? 0.4 : 0,
            },
            opacity: {
              duration: 0.05,
              delay: 0.4,
            },
          }}
          className="w-3/4 h-[3px] bg-white rounded-full relative "
        ></motion.div>
        <motion.div
          initial={{ rotate: 0, backgroundColor: "#fff" }}
          animate={{
            rotate: isMenuActive ? 45 : 0,
            backgroundColor: isMenuActive ? "#000" : "#fff",
          }}
          transition={{
            type: "tween",

            rotate: {
              delay: isMenuActive ? 0.5 : 0,
            },
          }}
          className="w-full h-[3px] bg-white rounded-full relative z-50"
        ></motion.div>
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{
            y: isMenuActive ? -11 : 0,
            opacity: isMenuActive ? 0 : 1,
          }}
          transition={{
            type: "tween",
            y: {
              duration: 0.2,
              delay: !isMenuActive ? 0.4 : 0,
            },
            opacity: {
              duration: 0.05,
              delay: 0.4,
            },
          }}
          className="w-3/4 h-[3px] bg-white rounded-full relative "
        ></motion.div>
      </div>
    </div>
  );
};

const Columns = ({ isMenuActive }) => {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        return;
      }}
      className="w-full md:w-[80%] max-w-7xl fixed top-0 right-0 h-full z-10 flex lg:pb-10"
    >
      <motion.div
        initial={{ y: "-100%" }}
        animate={{
          y: isMenuActive ? "0%" : "-100%",
        }}
        transition={{
          type: "tween",
          y: {
            duration: 0.4,
            delay: !isMenuActive ? 0.2 : 0,
          },
        }}
        className="w-2/4 h-full bg-white"
      ></motion.div>
      <motion.div
        initial={{ y: "-100%" }}
        animate={{
          y: isMenuActive ? "0%" : "-100%",
        }}
        transition={{
          type: "tween",
          y: {
            duration: 0.6,
            delay: !isMenuActive ? 0.2 : 0,
          },
        }}
        className="w-2/4 h-full bg-white"
      ></motion.div>
    </div>
  );
};

const Menu = ({ isMenuActive, setMenuActive }) => {
  const FooterLinks = [
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
      height="18"
      width="18"
      id="twitter"
    >
      <path d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z"></path>
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height="18"
      width="18"
      id="instagram"
    >
      <g
        strokeWidth="1.5"
        fill="none"
        stroke="#303c42"
        strokeLinecap="round"
        strokeLinejoin="round"
        height="25"
        width="25"
        data-name="<Group>"
      >
        <rect
          width="21"
          height="21"
          x="1.5"
          y="1.5"
          data-name="<Path>"
          rx="5.48"
          ry="5.48"
        ></rect>
        <circle cx="12" cy="12" r="5.5" data-name="<Path>"></circle>
        <circle cx="18" cy="5" r=".5" data-name="<Path>"></circle>
      </g>
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
      id="facebook"
      height="20"
      width="20"
    >
      <path d="M15.12,5.32H17V2.14A26.11,26.11,0,0,0,14.26,2C11.54,2,9.68,3.66,9.68,6.7V9.32H6.61v3.56H9.68V22h3.68V12.88h3.06l.46-3.56H13.36V7.05C13.36,6,13.64,5.32,15.12,5.32Z"></path>
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      clip-rule="evenodd"
      viewBox="0 0 64 64"
      id="tiktok"
      height="20"
      width="20"
    >
      <path d="M33 7a1 1 0 0 0-1 1v34c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1c-8.28 0-15 6.721-15 15 0 8.28 6.72 15 15 15 8.279 0 15-6.72 15-15V25.494A16.927 16.927 0 0 0 49 27h2a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-2c-3.863 0-7-3.137-7-7V8a1 1 0 0 0-1-1zm1 2h6v1c0 4.967 4.033 9 9 9h1v6h-1c-2.731 0-5.292-.73-7.499-2.009a1 1 0 0 0-1.501.866V42c0 7.175-5.825 13-13 13s-13-5.825-13-13c0-6.838 5.292-12.45 12-12.962v6.033c-3.39.486-6 3.405-6 6.93 0 3.862 3.137 7 7 7s7-3.138 7-7z"></path>
    </svg>,
  ];

  const Wines = [
    {
      wine: "The boss",
      subtext: "prosecco",
    },
    {
      wine: "The boss rose",
      subtext: "prosecco rose",
    },
    {
      wine: "Link",
      subtext: "",
    },
    {
      wine: "The Lady",
      subtext: "prinot grigio",
    },
    {
      wine: "Hashtag",
      subtext: "sauvignon blanc",
    },
    {
      wine: "Gentlemen",
      subtext: "pinot nero",
    },
    {
      wine: "Hacker",
      subtext: "sangiovese",
    },
    {
      wine: "Karma",
      subtext: "",
    },
    {
      wine: "Hipster",
      subtext: "negroamard",
    },
    {
      wine: "Nerd",
      subtext: "Nero d'avola",
    },
    {
      wine: "Old",
      subtext: "vermouth",
    },
  ];

  const navLinks = [
    "About us",
    "Find us",
    "events",
    "press area",
    "hall of fame",
    "shop",
  ];

  return (
    <motion.div
      initial={{ y: "-100%", opacity: 0 }}
      animate={{
        y: isMenuActive ? "0%" : "-100%",
        opacity: isMenuActive ? 1 : 0,
      }}
      onClick={(e) => {
        e.stopPropagation();
        setMenuActive(true);
      }}
      transition={{
        type: "tween",
        ease: "linear",
        y: {
          duration: 0.4,
          delay: isMenuActive ? 0.3 : 0.2,
        },
        opacity: {
          duration: 0.4,
          delay: isMenuActive ? 0.4 : 0,
        },
      }}
      className="w-full md:w-[80%] max-w-7xl fixed top-0 right-0 h-full z-20 flex flex-col justify-end gap-10 p-6 lg:px-16 pb-0 lg:pb-10"
    >
      <div className="h-3/4 w-full flex pt-16 md:pt-0 lg:pt-4 md:flex-row  flex-col gap-4">
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{
            x: isMenuActive ? 0 : 20,
            opacity: isMenuActive ? 1 : 0,
          }}
          transition={{
            x: {
              duration: 0.3,
              delay: isMenuActive ? 0.7 : 0,
            },
            opacity: {
              duration: 0.3,
              delay: isMenuActive ? 0.7 : 0,
            },
          }}
          className="w-full h-auto md:w-2/4 2xl:w-[60%]"
        >
          <h1 className="text-[20px] ext-[40px] md:text-[40px] text-zinc-300">
            wines
          </h1>
          <ul className="w-[90%] flex md:flex- flex-wrap py-2 gap-1 md:gap-3 lg:gap-1">
            {Wines.map((wine, index) => {
              return (
                <li className="flex flex-col cursor-pointer group">
                  <div className="text-[40px] md:text-[45px] lg:text-[49px] 2xl:text-[70px] 2xl:leading-[70px] leading-[40px] flex gap-2 text-black group-hover:text-[#a9a8a8] transition-all duration-300 ease">
                    <span>{wine.wine}</span>
                    <span className="text-[#a9a8a8]">/</span>
                  </div>
                  <div className="text-sm leading-[14px]  md:text-lg md:leading-[18px] text-black group-hover:text-[#a9a8a8] transition-all duration-300 ease">
                    <span>{wine.subtext}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </motion.div>
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{
            x: isMenuActive ? 0 : 20,
            opacity: isMenuActive ? 1 : 0,
          }}
          transition={{
            x: {
              duration: 0.3,
              delay: isMenuActive ? 0.9 : 0,
            },
            opacity: {
              duration: 0.3,
              delay: isMenuActive ? 0.9 : 0,
            },
          }}
          className="h-1/4 md:w-2/4 2xl:w-1/4 md:h-full lg:h-2/4"
        >
          <ul className="grid grid-cols-2 md:grid-cols-1 flex-col justify-evenly gap-4 h-full pt-9 lg:pl-10">
            {" "}
            {navLinks.map((navlink, index) => {
              return (
                <li className="text-[20px] md:text-[30px] transition-all">
                  <span className="cursor-pointer hover:text-zinc-400 transition-all">
                    {navlink}
                  </span>
                </li>
              );
            })}
          </ul>
        </motion.div>
      </div>
      <div className="w-full h-28 md:h-24 md:border-t-2 flex flex-col md:flex-row md:items-center justify-evenly">
        <div className="w-full h-2/4 flex items-center gap-5">
          <motion.p
            initial={{ x: 20, opacity: 0 }}
            animate={{
              x: isMenuActive ? 0 : 20,
              opacity: isMenuActive ? 1 : 0,
            }}
            transition={{
              x: {
                duration: 0.3,
                delay: isMenuActive ? 1 : 0,
              },
              opacity: {
                duration: 0.3,
                delay: isMenuActive ? 1 : 0,
              },
            }}
            className=" uppercase text-sm "
          >
            social
          </motion.p>
          <motion.div
            initial={{ x: 10, opacity: 0 }}
            animate={{
              x: isMenuActive ? 0 : 10,
              opacity: isMenuActive ? 1 : 0,
            }}
            transition={{
              x: {
                duration: 0.3,
                delay: isMenuActive ? 1.1 : 0,
              },
              opacity: {
                duration: 0.5,
                delay: isMenuActive ? 1.1 : 0,
              },
            }}
            className="h-full flex items-center gap-5"
          >
            {FooterLinks.map((link, index) => {
              return (
                <div className="h-10 aspect-square rounded-full grid place-items-center border border-black relative cursor-pointer group">
                  <div className="absolute top-0 left-0 w-full h-full grid place-items-center pointer-events-none">
                    <div className="w-6 aspect-square border opacity-0 group-hover:opacity-[1] group-hover:w-14 border-black rounded-full transition-width ease duration-300 absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"></div>
                  </div>
                  {link}
                </div>
              );
            })}
          </motion.div>
        </div>
        <motion.div
          initial={{ x: 10, opacity: 0 }}
          animate={{
            x: isMenuActive ? 0 : 10,
            opacity: isMenuActive ? 1 : 0,
          }}
          transition={{
            x: {
              duration: 0.3,
              delay: isMenuActive ? 1 : 0,
            },
            opacity: {
              duration: 0.4,
              delay: isMenuActive ? 1 : 0,
            },
          }}
          className="flex items-center text-sm gap-20 md:gap-4"
        >
          <p>Jeffgichuki@gmail.com</p>
          <p>0741749015 </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ColumnDrop = () => {
  const [isMenuActive, setMenuActive] = useState(false);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.1,
      }}
      onClick={() => {
        setMenuActive(false);
      }}
      className="w-screen h-screen overflow-hidden bg-black font-bebas"
    >
      <div className="fixed left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 lg:text-[10rem] lg:leading-[10rem] text-[8rem] leading-[8rem] px-4 text-[#1e1e1e] font-black">
        <span>Navmenu</span>
        <span className="text-[#fff]">.</span>
      </div>

      <ComponentDetails
        font={"bebas"}
        website={"Wines made with love        "}
        websiteLink={"https://ferro13.it/en"}
        date={"14.08.2023"}
        textColor={"#fff"}
        componentType={"Nav menu"}
      />

      <nav
        onClick={(e) => e.stopPropagation()}
        className="h-auto w-full justify-between flex items-center p-6 fixed  z-50"
      >
        <div className="text-white cursor-pointer">
          <Link href="/">
            <span className="hover:underline">Back</span>
          </Link>
        </div>
        <div className="h-12 aspect-square relative p-1 group cursor-pointer">
          <p
            className={`absolute ${
              !isMenuActive ? "text-white" : "text-black"
            } -left-12  text-md top-2/4 translate-x-3 opacity-0  group-hover:opacity-[1] group-hover:translate-x-0 transition-all ease duration-200 -translate-y-2/4`}
          >
            {!isMenuActive ? "MENU" : "CLOSE"}
          </p>
          <HamburgerMenu
            isMenuActive={isMenuActive}
            setMenuActive={setMenuActive}
          />
        </div>
      </nav>
      <Menu isMenuActive={isMenuActive} setMenuActive={setMenuActive} />
      <Columns isMenuActive={isMenuActive} />
    </motion.main>
  );
};

export default ColumnDrop;
