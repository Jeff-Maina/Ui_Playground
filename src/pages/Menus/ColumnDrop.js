import { motion } from "framer-motion";
import styles from "../../styles/ColumnDrop.module.css";
import { useState } from "react";

const HamburgerMenu = () => {
  const [isMenuActive, setMenuActive] = useState(false);

  return (
    <div
      onClick={() => {
        setMenuActive(!isMenuActive);
      }}
      className="w-full h-full relative"
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
              duration: 0.3,
              delay: !isMenuActive ? 0.5 : 0,
            },
            opacity: {
              duration: 0.05,
              delay: 0.5,
            },
          }}
          className="w-3/4 h-[3px] bg-white rounded-full"
        ></motion.div>
        <motion.div
          initial={{ rotate: 0 }}
          animate={{
            rotate: isMenuActive ? 45 : 0,
          }}
          transition={{
            type: "tween",
            rotate: {
              delay: isMenuActive ? 0.6 : 0,
            },
          }}
          className="w-full h-[3px] bg-white rounded-full"
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
              duration: 0.3,
              delay: !isMenuActive ? 0.5 : 0,
            },
            opacity: {
              duration: 0.05,
              delay: 0.5,
            },
          }}
          className="w-3/4 h-[3px] bg-white rounded-full"
        ></motion.div>
      </div>
    </div>
  );
};

const ColumnDrop = () => {
  return (
    <main className="w-screen h-screen overflow-hidden bg-black">
      <nav className="h-16 w-full justify-end flex items-center">
        <div className="h-12 aspect-square relative p-1 group cursor-pointer">
          <p className="absolute text-white -left-12 font-openSans font-bold text-sm top-2/4 translate-x-3 opacity-0  group-hover:opacity-[1] group-hover:translate-x-0 transition-all ease duration-200 -translate-y-2/4">
            MENU
          </p>
          <HamburgerMenu />
        </div>
      </nav>
    </main>
  );
};

export default ColumnDrop;
