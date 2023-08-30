import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import styles from "../../styles/QINO.module.css";
import Head from "next/head";
import ComponentDetails from "@/components/ComponentDetails";

const Hamburger = ({ isMenuActive, setMenuActive }) => {
  const [isAnimationInProgress, setAnimationInProgress] = useState(false);

  const handleClick = () => {
    setAnimationInProgress(true);
    setTimeout(() => {
      setAnimationInProgress(false);
    }, 1000);
    setMenuActive(!isMenuActive);
  };

  return (
    <div className="h-full aspect-square grid place-items-center relative z-[35]">
      <button
        disabled={isAnimationInProgress}
        onClick={handleClick}
        className={`h-10 md:h-16 cursor-pointer aspect-square ${
          !isMenuActive ? "bg-white" : "bg-green-900"
        } transition-all duration-150 rounded-full flex flex-col items-center justify-center gap-[2px] group`}
      >
        <motion.div
          initial={{ rotate: "0deg", backgroundColor: "#000" }}
          animate={{
            rotate: isMenuActive ? "40deg" : "0deg",
            x: isMenuActive ? 1 : 0,
            y: isMenuActive ? -1 : 0,
            backgroundColor: isMenuActive ? "#fff" : "#000",
          }}
          transition={{
            duration: 0.2,
            type: "spring",
          }}
          className="w-4 h-[2px] bg-black group-hover:-translate-x-1 transition-all ease duration-200 origin-left"
        ></motion.div>
        <motion.div
          initial={{
            opacity: 1,
          }}
          animate={{
            opacity: isMenuActive ? 0 : 1,
          }}
          transition={{
            duration: 0.2,
            type: "tween",
            delay: isMenuActive ? 0 : 0.4,
          }}
          className="w-4 h-[2px] bg-black group-hover:translate-x-1 transition-all ease duration-200"
        ></motion.div>
        <motion.div
          initial={{ rotate: "0deg", backgroundColor: "#000" }}
          animate={{
            rotate: isMenuActive ? "-40deg" : "0deg",
            x: isMenuActive ? 1 : 0,
            y: isMenuActive ? 1.5 : 0,
            backgroundColor: isMenuActive ? "#fff" : "#000",
          }}
          transition={{
            duration: 0.2,
            type: "spring",
          }}
          className="w-4 h-[2px] bg-black group-hover:-translate-x-1 transition-all ease duration-200 origin-left"
        ></motion.div>
      </button>
    </div>
  );
};

const BlurMask = ({ isMenuActive, setMenuActive }) => {
  const maskVariants = {
    initial: {
      zIndex: -5,
      opacity: 0,
    },
    active: {
      zIndex: 5,
      opacity: 1,
      transition: {
        zIndex: { duration: 0, delay: 0 },
        opacity: { duration: 0.3, delay: 0.2 },
      },
    },
    hidden: {
      zIndex: -5,
      opacity: 0,
      transition: {
        zIndex: { duration: 0, delay: 0.5 },
        opacity: { duration: 0.3, delay: 0 },
      },
    },
  };

  return (
    <motion.section
      variants={maskVariants}
      initial="initial"
      animate={isMenuActive ? "active" : "hidden"}
      id={styles.blurmask}
      onClick={() => setMenuActive(false)}
      className={`w-screen h-screen fixed top-0 left-0`}
    ></motion.section>
  );
};

const Menu = ({ isMenuActive, setMenuActive }) => {
  const [top, setTop] = useState(0);
  const ref = useRef(null);

  const updateIndicatorPosition = ({ target }) => {
    let { top, height } = target.getBoundingClientRect();
    let containerTop = ref.current?.getBoundingClientRect().top;
    let ytranslate = top + height / 2 - 4 - containerTop;
    setTop(ytranslate);
  };

  useEffect(() => {
    let menuLinks = document.querySelectorAll(".qino-link");
    menuLinks.forEach((link) => {
      link.addEventListener("mouseenter", updateIndicatorPosition);
      link.style.cursor = "pointer";
    });
  }, []);

  const resetIndicatorPosition = () => {
    let menuLinks = document.querySelectorAll(".qino-link");
    let { top, height } = menuLinks[0].getBoundingClientRect();
    let containerTop = ref.current?.getBoundingClientRect().top;
    let ytranslate = top + height / 2 - 4 - containerTop;
    setTop(ytranslate);
  };

  const yvariants = {
    hidden: {
      y: "140%",
    },
    active: {
      y: "0%",
      transition: {
        duration: 0.3,
        delay: 0.5,
      },
    },
    inactive: {
      y: "140%",
      transition: {
        duration: 0.3,
      },
    },
  };

  const mainLinks = ["home", "about", "projects"];
  const socialLinks = [
    "News",
    "Contacts",
    "Instagram",
    "Twitter",
    "Online Shop",
  ];
  const qinoLinks = ["Soda", "Restaurant", "School"];
  return (
    <motion.section
      initial={{ zIndex: -30 }}
      animate={{
        zIndex: isMenuActive ? 30 : -30,
      }}
      transition={{
        zIndex: {
          delay: isMenuActive ? 0 : 0.8,
        },
      }}
      className="fixed top-0 h-screen right-0 w-[85%] md:w-[65%] z-[15] lg:max-w-3xl md:max-w-xl"
    >
      <motion.div
        initial={{ display: "none" }}
        animate={{
          display: isMenuActive ? "flex" : "none",
        }}
        transition={{
          display: {
            delay: isMenuActive ? 0 : 0.5,
          },
        }}
        className="w-full h-full relative bg-transparent z-30  pt-28 md:pt-44 flex items-start justify-center"
      >
        <div
          ref={ref}
          onMouseLeave={() => {
            resetIndicatorPosition();
          }}
          className="w-[75%] md:w-[90%] pl-10 font-pragma flex flex-col gap-5 lg:gap-10 group relative pb-10"
        >
          <motion.div
            initial={{ transform: "translate(0,0)", opacity: 0 }}
            animate={{
              transform: `translate(0px,${top}px)`,
              opacity: isMenuActive ? 1 : 0,
            }}
            transition={{
              transform: { duration: 0.4, type: "spring" },
              opacity: {
                duration: 0.2,
                delay: isMenuActive ? 1 : 0,
              },
            }}
            className="absolute h-2 aspect-square rounded-full bg-black top-0 left-0"
          ></motion.div>
          <div className="uppercase text-4xl md:text-[3.5rem] font-medium flex flex-col gap-3 md:gap-5 items-start">
            {mainLinks.map((link, index) => (
              <div key={index} className="qino-link overflow-hidden py-[3px]">
                <motion.div
                  variants={yvariants}
                  initial="hidden"
                  animate={isMenuActive ? "active" : "hidden"}
                >
                  {link}
                </motion.div>
              </div>
            ))}
          </div>
          <div className="text-lg lg:text-[24px] flex flex-col gap-2 items-start">
            {qinoLinks.map((link, index) => (
              <div key={index} className="qino-link overflow-hidden ">
                <motion.div
                  variants={yvariants}
                  initial="hidden"
                  animate={isMenuActive ? "active" : "hidden"}
                  className="flex items-center gap-2"
                >
                  <span className="text-xs text-zinc-400">0{index + 1}</span>
                  QINO {link}
                </motion.div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-2 items-start lg:text-[24px]">
            {socialLinks.map((link, index) => (
              <div key={index} className="qino-link overflow-hidden">
                <motion.div
                  variants={yvariants}
                  initial="hidden"
                  animate={isMenuActive ? "active" : "hidden"}
                >
                  {link}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{
          // clipPath: "polygon(25% 0, 100% 0%, 100% 100%, 0% 100%)"
          x: "100%",
          clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 40% 100%)",
        }}
        animate={{
          x: isMenuActive ? "0%" : "100%",
          clipPath: isMenuActive
            ? [
                "polygon(0% 0, 100% 0%, 100% 100%, 0% 100%)",
                "polygon(0% 0, 100% 0%, 100% 100%, 40% 100%)",
                "polygon(0% 0, 100% 0%, 100% 100%, 0% 100%)",
              ]
            : [
                "polygon(0% 0, 100% 0%, 100% 100%, 0% 100%)",
                "polygon(30% 0, 100% 0%, 100% 100%, 0% 100%)",
                "polygon(0% 0, 100% 0%, 100% 100%, 0% 100%)",
              ],
        }}
        transition={{
          x: {
            duration: 0.8,
            ease: [0.44, 0.1, 0.28, 0.96],
            // ease: [.76,0,.28,.96]
          },
          clipPath: {
            duration: 0.8,
          },
        }}
        className="w-full h-full absolute top-0 left-0 bg-[#E3EAE0]"
      ></motion.div>
    </motion.section>
  );
};

const NavigationMenu = () => {
  const [isMenuActive, setMenuActive] = useState(false);

  return (
    <main className="w-screen h-screen">
      <Head>
        <title>QINO | navmenu</title>
      </Head>
      <img
        src="https://images.unsplash.com/photo-1470058869958-2a77ade41c02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        className="absolute w-full h-full top-0 left-0 object-cover brightness-[0.5] z-[-2]"
        alt=""
      />
      <nav className="w-full h-20 md:h-32 flex items-center justify-between">
        <div></div>
        <Hamburger isMenuActive={isMenuActive} setMenuActive={setMenuActive} />
        <BlurMask isMenuActive={isMenuActive} setMenuActive={setMenuActive} />
        <Menu isMenuActive={isMenuActive} setMenuActive={setMenuActive} />
      </nav>
      <ComponentDetails
        font={"openSans"}
        website={"QINO"}
        websiteLink={"https://qino.jp/"}
        date={"23.08.2023"}
        textColor={"#fff"}
        componentType={"Nav menu"}

      />
    </main>
  );
};

export default NavigationMenu;

//! to do;

// blur effect;
// clip path;
// menu content animation;
