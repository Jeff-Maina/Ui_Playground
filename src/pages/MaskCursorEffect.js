import Link from "next/link";
import styles from "../styles/MaskCursorEffect.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
const MaskCursorEffect = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const [isHovering, setIsHovering] = useState(false);

  const maskSize = isHovering ? 500 : 40;

  const handleMouseMove = ({ clientX, clientY }) => {
    setMouseX(clientX);
    setMouseY(clientY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-screen min-h-screen bg-[#111]"
      >
        <nav className="h-16 w-full border-b border-[#222] flex items-center justify-between px-3 fixed bg-[#111] z-50">
          <Link
            href="/"
            onClick={() => {
              document.removeEventListener("mousemove", handleMouseMove);
            }}
          >
            <div className="border border-[#333] p-2">
              <p className="font-openSans pointer-events-none text-white">
                Back to menu
              </p>
            </div>
          </Link>

          <div className="w-10 h-10 border border-[#333] rounded-full grid place-items-center hover:bg-[#222] group transition-all">
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

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            opacity: {
              duration: 0.4,
              delay: 0.2,
            },
          }}
          className="w-screen h-screen flex items-center justify-center leading-[79px]"
        >
          <p
            onMouseEnter={() => {
              setIsHovering(true);
              console.log("enter");
            }}
            onMouseLeave={() => {
              setIsHovering(false);
            }}
            className="text-[#b7ab98] font-avant xl:text-[89px] text-[60px] tracking-tighter font-black md:max-w-[90%] px-4 md:px-0"
          >
            Être ou ne pas être, telle est la question.
          </p>
          <div className="absolute bottom-0 right-0 p-3 px-5">
            <p className="font-openSans font-bold text-sm text-[#b7ab98]">
              07.07.2023
            </p>
          </div>
        </motion.div>
        <motion.div
          id={styles.mask}
          animate={{
            WebkitMaskPosition: `${mouseX - maskSize / 2}px ${
              mouseY - maskSize / 2
            }px`,
            WebkitMaskSize: `${maskSize}px`,
          }}
          transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
          className="w-screen h-screen flex items-center justify-center  top-0 left-0 leading-[79px] absolute mask pointer-events-none"
        >
          <p className="font-avant xl:text-[89px] text-[60px] font-black md:max-w-[90%] px-4 md:px-0 tracking-tighter">
            To be or not to be, that is the question.
          </p>
          <div className="absolute bottom-0 right-0 p-3 px-5">
            <p className="font-openSans font-bold text-sm text-[#111]">
              07.07.2023
            </p>
          </div>
        </motion.div>
      </motion.main>
    </AnimatePresence>
  );
};
export default MaskCursorEffect;
