import { motion, useMotionValue } from "framer-motion";
import { gsap } from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

const Modal = ({ pages, activeIndex, isModalActive }) => {
  const modalVariants = {
    initial: { scale: 0 },
    open: { scale: 1, transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
    closed: {
      scale: 0,
      transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
    },
  };

  let ref = useRef(null);

  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  const moveModal = ({ clientX, clientY }) => {
    // const moveContainerX = gsap.quickTo(ref.current, "left", {
    //   duration: 0.8,
    //   ease: "power3",
    // });
    const moveContainerY = gsap.quickTo(ref.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    let { top, left } = ref.current?.getBoundingClientRect();

    // moveContainerX(clientX - left);
    moveContainerY(clientY - top);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", moveModal);
    }
    return () => {
      window.removeEventListener("mousemove", moveModal);
    };
  }, []);

  console.log(pages);

  return (
    <motion.div
      ref={ref}
      variants={modalVariants}
      initial="initial"
      animate={isModalActive ? "open" : "closed"}
      className="absolute md:w-60 md:h-72 w-44 h-60 z-50 overflow-hidden pointer-events-none right-0"
    >
      <motion.div
        initial={{ top: "0%" }}
        animate={{ top: activeIndex * -100 + "%" }}
        transition={{
          duration: 0.3,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="absolute w-full h-full"
      >
        {pages.map((page, index) => (
          <div
            style={{ backgroundColor: page.bg }}
            className="h-full w-full grid place-items-center p-2"
          >
            <img src={page.image} className="object-cover" />
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Modal;
