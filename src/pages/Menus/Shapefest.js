import Head from "next/head";
import styles from "../../styles/Shapefest.module.css";
import { useState } from "react";
import { motion } from "framer-motion";

const ShapeFest = () => {
  const [isMenuActive, setMenuActive] = useState(false);

  return (
    <main
      id={styles.main}
      className="w-screen h-screen bg-[#f9f6e7] overflow-hidden"
    >
      <Head>
        <title>Shapefarm Navmenu</title>
      </Head>
      <nav className="w-full h-24 border border-black flex justify-end items-center">
        <div className="h-20 aspect-square relative grid place-items-center">
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
                duration: isMenuActive ? 1.5 : 0.5,
                delay: isMenuActive ? 0 : 0.2,
              },
            }}
            id={styles.mask}
            className="absolute w-[400vh] h-[400vw] bg-[#ff5252] top-2/4 -translate-y-2/4 left-2/4 -translate-x-2/4 pointer-events-none"
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
                duration: isMenuActive ? 1.5 : 0.7,
                delay: isMenuActive ? 0.3 : 0,
              },
            }}
            id={styles.mask}
            className="absolute w-[400vh] h-[400vw] bg-[#f9f6e7] top-2/4 -translate-y-2/4 left-2/4 -translate-x-2/4 pointer-events-none"
          ></motion.div>
          <div
            className="relative h-[30px] bg-[#ff5252] aspect-square rounded-full cursor-pointer hover:h-[40px] transition-all ease duration-300"
            onClick={() => {
              setMenuActive(!isMenuActive);
            }}
          >
            {!isMenuActive ? (
              <div className="w-full h-full flex items-center justify-center gap-[2px] px-1">
                {[...Array(3).keys()].map((dot, index) => {
                  return (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{
                        scale: !isMenuActive ? 1 : 0,
                      }}
                      transition={{
                        scale: {
                          type: "spring",
                          duration: 1,
                          delay: 0.05 * index + 0.2,
                        }
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
          </div>
        </div>
      </nav>
    </main>
  );
};

export default ShapeFest;
