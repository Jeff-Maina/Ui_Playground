import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect } from "react";
import styles from "../styles/MagnetCursor.module.css";
import Link from "next/link";
const MagnetCursor = () => {
  return (
    <AnimatePresence>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        tranisiton={{
          duration: 1,
        }}
        className="w-screen h-screen cursor-screen"
      >
        <Cursor />
        <nav className="h-16 border flex items-center justify-between px-3">
          <Link
            href="/"
            onClick={() => {
              document.removeEventListener("mousemove", handleMouseMove);
            }}
          >
            <div data-stick="true" className="border border-zinc-400 p-2">
              <p className="font-openSans pointer-events-none">Back to menu</p>
            </div>
          </Link>

          <div
            data-stick="true"
            className="w-10 h-10 border border-zinc-400 rounded-full grid place-items-center hover:bg-[#444] group transition-all"
          >
            <div className="pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                id="github"
                height="20"
                width="20"
                fill="#444"
                className="group-hover:fill-[#fff] transition-all"
              >
                <path d="M27.106 0s-2.101 0-4.235 3.2c-1.056-1.057-4.267-1.067-5.331-1.067-1.068 0-4.277.01-5.334 1.067C10.072 0 7.976 0 7.976 0c-1.141 2.864-.248 4.807-.033 5.333C6.877 6.4 5.806 7.467 5.806 12.8s3.878 8.008 8.538 8.533c-.599.521-1.067 2.133-1.067 3.2-1.197.533-4.528 1.045-6.4-2.133 0 0-1.067-2.133-3.2-2.133 0 0-2.133-.201 0 1.067 0 0 1.067 1.067 2.133 3.2 0 0 1.629 4.456 7.467 3.2.012 1.735 0 4.267 0 4.267h8.528v-7.467c0-.844-.466-2.68-1.067-3.2 4.66-.525 8.533-3.2 8.533-8.533 0-5.333-1.067-6.4-2.133-7.467.217-.527 1.108-2.47-.032-5.334z"></path>
              </svg>
            </div>
          </div>
        </nav>
        <div className="w-full h-3/4 border flex flex-col items-center justify-center gap-3">
          <div id={styles.menu} className="w-96 h-14 grid grid-cols-4">
            <div
              id={styles.tab}
              data-stick="true"
              className="h-full w-full group overflow-hidden bg-lime-300 grid place-items-center"
            ></div>
            <div
              id={styles.tab}
              data-stick="true"
              className="h-full w-full bg-orange-500 group overflow-hidden grid place-items-center"
            ></div>
            <div
              id={styles.tab}
              data-stick="true"
              className="h-full w-full group overflow-hidden grid bg-emerald-500 place-items-center"
            ></div>
            <div
              id={styles.tab}
              data-stick="true"
              className="h-full w-full group overflow-hidden grid place-items-center bg-cyan-500"
            ></div>
          </div>
          <div className="grid grid-cols-2 h-72 w-96 gap-3">
            <div className="h-72 w-full ">
              <div data-stick="true" className="w-full h-full  border-black">
                <img
                  src="https://i.pinimg.com/564x/70/6e/fc/706efc0deaa541b96d66541da4747385.jpg"
                  className="h-full w-full object-cover pointer-events-none"
                  alt="image"
                />
              </div>
            </div>
            <div className="h-72 w-full gap-3 flex flex-col">
              <div
                data-stick="true"
                className="w-full h-2/4  border-black overflow-hidden"
              >
                <img
                  src="https://i.pinimg.com/564x/f8/ea/90/f8ea90bbe02f85be7572bb19c9eae07b.jpg"
                  className="h-full w-full object-cover pointer-events-none"
                  alt="image"
                />
              </div>
              <div
                data-stick="true"
                className="w-full h-2/4  border-black overflow-hidden"
              >
                <img
                  src="https://i.pinimg.com/736x/7f/70/01/7f7001a5dfe726bbe02b4631aa56c368.jpg"
                  className="h-full w-full object-cover pointer-events-none"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="gap-1 h-32 w-96 flex justify-start">
            <div
              data-stick="true"
              className="bg-yellow-400 h-full rounded-bl-full aspect-square"
            ></div>
            <div className="flex flex-col h-full justify-evenly gap-1">
              <div className="flex gap-1 items-center justify-evenly">
                <div
                  data-stick="true"
                  className="w-14 h-14 bg-cyan-400 rounded-full"
                ></div>
                <div
                  data-stick="true"
                  className="w-32 h-16 bg-red-400 rounded-full"
                ></div>
                <div
                  data-stick="true"
                  className="w-14 h-14 bg-amber-400 rounded-l-full"
                ></div>
              </div>
              <div className="flex justify-evenly gap-1">
                <div
                  data-stick="true"
                  className="w-36 h-16 rounded-full bg-green-500"
                ></div>
                <div
                  data-stick="true"
                  className="w-20 flex-grow h-full bg-teal-300 rounded-tl-full"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 p-3 px-5">
          <p className="font-openSans font-bold text-sm">07.07.2023</p>
        </div>
        <div className="absolute bottom-0 left-0 p-3 px-5">
          <p className="font-openSans font-bold  link">Jeff</p>
        </div>
      </motion.main>
    </AnimatePresence>
  );
};

const Cursor = () => {
  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.querySelector("body").style.cursor = "none !important";
  }, []);

  const handleMouseMove = ({ pageX, pageY, target }) => {
    const cursor = document.querySelector("#cursor");
    const bigCursor = document.querySelector("#big-cursor");

    const cursorKeyframes = {
      opacity: 1,
      transform: `translate(${pageX - 4}px, ${pageY - 4}px)`,
    };

    let animationConfig = {
      duration: 10,
      fill: "forwards",
    };

    cursor.animate(cursorKeyframes, animationConfig);

    if (target.getAttribute("data-stick") == "true") {
      const bounds = target.getBoundingClientRect();
      const { top, left, height, width } = bounds;

      const computedStyle = window.getComputedStyle(target);
      const borderRadius = computedStyle.borderRadius;

      const bigCursorKeyframes = {
        opacity: 1,
        top: `${top}px`,
        left: `${left}px`,
        height: `${height}px`,
        width: `${width}px`,
        borderRadius: borderRadius,
        borderWidth: `2px`,
      };

      animationConfig = {
        duration: 500,
        fill: "forwards",
      };
      bigCursor.animate(bigCursorKeyframes, animationConfig);
    } else {
      const bigCursorKeyframes = {
        opacity: 1,
        top: `${pageY - 30}px`,
        left: `${pageX - 30}px`,
        width: `60px`,
        height: `60px`,
        borderWidth: `2px`,
      };

      animationConfig = {
        duration: 400,
        fill: "forwards",
        easing: "ease",
      };

      const slowBorderRadiusAnimationConfig = {
        duration: 100, // Adjust this duration as needed
        fill: "forwards",
      };

      // Animate the border radius with a slower duration
      bigCursor.animate(
        { borderRadius: "50%" },
        slowBorderRadiusAnimationConfig
      );

      bigCursor.animate(bigCursorKeyframes, animationConfig);
    }
  };

  return (
    <>
      <div
        id="cursor"
        className="cursor pointer-events-none fixed h-2 w-2 bg-black rounded-full opacity-0"
      ></div>
      <div
        id="big-cursor"
        className="big-cursor fixed w-20 h-20 rounded-full border-2 border-[#444] pointer-events-none z-50 opacity-0"
      ></div>
    </>
  );
};

export default MagnetCursor;
