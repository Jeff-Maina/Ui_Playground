import Head from "next/head";
import styles from "../../styles/Shapefest.module.css";
import { useState } from "react";
import { motion } from "framer-motion";
import ComponentDetails from "@/components/ComponentDetails";
import Link from "next/link";

const MenuLink = ({ isMenuActive, menuLink, i }) => {
  return (
    <div
      id={styles.link}
      className="relative text-[4.5rem] leading-[4.5rem] md:text-[6rem] md:leading-[6rem] lg:text-[9rem] lg:leading-[9rem] group"
    >
      <div
        id={styles.textOverflow}
        className="overflow-hidden flex items-center lg:gap-16 gap-10"
      >
        <motion.div
          id={styles.primary}
          initial={{ y: "100%" }}
          animate={{
            y: isMenuActive ? "0%" : "100%",
          }}
          transition={{
            y: {
              duration: 0.5,
              ease: "linear",
              type: "tween",
              delay: isMenuActive ? 0.4 + 0.05 * i : 0.02 * i,
            },
          }}
        >
          {menuLink}
        </motion.div>
        <div className="text-[1rem] font-albraRegular text-[#b6ac7f] opacity-0 group-hover:opacity-[1] transition-all ease duration-700">
          {"0" + i}
        </div>
      </div>

      <div
        id={styles.secondary}
        className="absolute text-[#ff5252] top-0 left-0 secondary"
      >
        {menuLink}
      </div>
    </div>
  );
};

//  clipMasks for the mask effect;

const ClipMasks = ({ isMenuActive }) => {
  return (
    <>
      <motion.div
        initial={{ WebkitClipPath: "circle(0.2% at center)" }}
        animate={{
          WebkitClipPath: isMenuActive
            ? "circle(50% at center)"
            : "circle(0.2% at center)",
        }}
        transition={{
          WebkitClipPath: {
            type: "tween",
            duration: isMenuActive ? 1 : 0.5,
            delay: isMenuActive ? 0 : 0.2,
          },
        }}
        id={styles.mask}
        className="absolute w-[400vh] z-10 h-[400vw] bg-[#ff5252] top-2/4 -translate-y-2/4 left-2/4 -translate-x-2/4 pointer-events-none"
      ></motion.div>
      <motion.div
        initial={{ WebkitClipPath: "circle(0.2% at center)" }}
        animate={{
          WebkitClipPath: isMenuActive
            ? "circle(50% at center)"
            : "circle(0.2% at center)",
        }}
        transition={{
          WebkitClipPath: {
            type: "tween",
            duration: isMenuActive ? 1 : 0.7,
            delay: isMenuActive ? 0.5 : 0,
          },
        }}
        id={styles.mask}
        className="absolute w-[400vh] h-[400vw] bg-[#f9f6e7] top-2/4 -translate-y-2/4 left-2/4 -translate-x-2/4 pointer-events-none z-20"
      ></motion.div>
    </>
  );
};

// menu Container;

const Menu = ({ isMenuActive }) => {
  const menuLinks = ["Home", "About", "Games", "Careers", "Contacts"];

  return (
    <motion.div
      initial={{ opacity: 0, z: -2 }}
      animate={{
        opacity: isMenuActive ? 1 : 0,
        zIndex: isMenuActive ? 40 : -2,
      }}
      transition={{
        opacity: {
          duration: 0.3,
          delay: isMenuActive ? 1 : 0,
        },
        zIndex: {
          duration: 0.1,
          delay: isMenuActive ? 1 : 0.3,
        },
      }}
      className="fixed h-screen w-screen top-0 left-0 z-[10] grid place-items-center"
    >
      <div className="w-full h-3/4 px-8 py-10 lg:py-0 lg:px-16 flex flex-col lg:flex-row-reverse lg:justify-between  justify-center gap-4 xl:px-30">
        <div
          id={styles.menu}
          className="flex flex-col gap-2 font-albra items-start lg:items-end"
        >
          {menuLinks.map((menuLink, i) => (
            <MenuLink isMenuActive={isMenuActive} i={i} menuLink={menuLink} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: isMenuActive ? 1 : 0,
          }}
          transition={{
            opacity: {
              duration: 0.7,
              type: "tween",
              delay: isMenuActive ? 1 : 0,
            },
          }}
          className="font-albraRegular flex flex-col leading-tight lg:justify-center"
        >
          <motion.span
            initial={{ x: -10, opacity: 0 }}
            animate={{
              x: isMenuActive ? 0 : -10,
              opacity: isMenuActive ? 1 : 0,
            }}
            transition={{
              x: {
                duration: 0.5,
                type: "tween",
                delay: isMenuActive ? 0.6 : 0,
              },
              opacity: {
                duration: 0.6,
                type: "tween",
                delay: isMenuActive ? 0.6 : 0,
              },
            }}
            className="text-[#ff5252] text-lg"
          >
            + + +
          </motion.span>
          <span>3f Mitaka Takagi Building, 1-51</span>
          <span>5 Nakacho, Musashino-shi, Tokyo</span>
          <span>180-0056 Japan</span>
          <span className="underline cursor-pointer">info@shapefarm.net</span>
        </motion.div>
      </div>
    </motion.div>
  );
};

const MenuBtn = ({ setMenuActive, isMenuActive }) => {
  const [isAnimationInProgress, setAnimationInProgress] = useState(false);

  const handleClick = () => {
    setAnimationInProgress(true);
    setTimeout(() => {
      setAnimationInProgress(false);
    }, 1000);
    setMenuActive(!isMenuActive);
  };

  return (
    <button
      disabled={isAnimationInProgress}
      className="relative h-[30px] bg-[#ff5252] aspect-square rounded-full cursor-pointer hover:h-[40px] transition-all ease duration-300 menu-btn z-[100]"
      onClick={handleClick}
    >
      {!isMenuActive ? (
        <div className="w-full h-full flex items-center justify-center gap-[2px] px-1">
          {[...Array(3).keys()].map((dot, index) => {
            return (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                animate={{
                  scale: !isMenuActive ? 1 : 0,
                }}
                transition={{
                  scale: {
                    type: "spring",
                    duration: 1,
                    delay: 0.05 * index + 0.2,
                  },
                }}
                className="h-1 aspect-square bg-[#f9f6e7] rounded-full"
              ></motion.div>
            );
          })}
        </div>
      ) : (
        <div className="relative w-full h-full grid place-items-center">
          <div className="flex justify-between h-3 aspect-square translate-y-[1px]">
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: isMenuActive ? 15 : 0 }}
              transition={{
                height: {
                  duration: 0.3,
                  delay: 0.4,
                },
              }}
              className="h-[15px]  w-[2px] bg-[#f9f6e7] origin-top-left -rotate-45"
            ></motion.div>
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: isMenuActive ? 15 : 0 }}
              transition={{
                height: {
                  duration: 0.3,
                  delay: 0.2,
                },
              }}
              className="h-[15px]  w-[2px] bg-[#f9f6e7]  origin-top-right rotate-45"
            ></motion.div>
          </div>
        </div>
      )}
    </button>
  );
};

const ShapeFest = () => {
  const [isMenuActive, setMenuActive] = useState(false);

  return (
    <main
      id={styles.main}
      className="w-screen h-screen bg-[#f9f6e7] overflow-hidden relative"
    >
      <Head>
        <title>Shapefarm Navmenu</title>
      </Head>
      <nav className="w-full h-24  flex justify-between items-center pl-6">
        <div className="text-black font-albraRegular cursor-pointer">
          <Link href="/">
            <span className="hover:underline">Back</span>
          </Link>
        </div>
        <div className="h-20 aspect-square relative grid place-items-center">
          <ClipMasks isMenuActive={isMenuActive} />
          <Menu isMenuActive={isMenuActive} />
          <MenuBtn isMenuActive={isMenuActive} setMenuActive={setMenuActive} />
        </div>
      </nav>
      <p className="font-albra text-[12rem] leading-[12rem] absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 border border-black p-10 z-[2]">
        Elegance
      </p>

      <ComponentDetails
        font={"albraRegular"}
        website={"Shapefarm.net"}
        websiteLink={"https://shapefarm.net/"}
        date={"16.08.2023"}
        textColor={"#000"}
      />
    </main>
  );
};

export default ShapeFest;
