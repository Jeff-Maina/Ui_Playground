import { Inter } from "next/font/google";
import FancyCursor from "@/components/cursorSqueeze";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Modal from "@/components/modal";
import { useState } from "react";

export default function Home() {
  const pages = [
    {
      pageName: "Magnetic cursor effect",
      link: "/MagnetCursor",
      type: "internal",
      image: "/Images/magneticCursor.jpeg",
      bg: "#999",
    },
    {
      pageName: "Mask cursor effect",
      link: "/MaskCursorEffect",
      type: "internal",
      image: "/Images/maskCursor.png",
      bg: "red"
    },
    {
      pageName: "Framer playground",
      link: "https://framer-playground-rho.vercel.app/",
      type: "external",
      image: "/Images/magneticCursor.jpeg",
      bg: "#999"
    },
    {
      pageName: "Column drop navigation menu",
      link: "/Menus/ColumnDrop",
      type: "internal",
      image: "/Images/columndrop.png",
      bg: "#000"
    },
    {
      pageName: "Shapefarm navigation menu",
      link: "/Menus/Shapefest",
      type: "internal",
      image: "/Images/shapefarm.png",
      bg:"#fff"
    },
  ];

  const [isModalActive, setModalActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <AnimatePresence>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        tranisiton={{
          duration: 1,
        }}
        className="w-screen min-h-screen flex flex-col items-center"
      >
        <FancyCursor />
        <section className="lg:h-[40vh] h-[20vh] max-w-7xl w-[90%]  justify-center flex flex-col">
          <h1 className="font-openSans text-4xl font-black">UI Playground</h1>
          <p className="font-openSans text-lg mt-5">
            A collection of recreations and ui concepts
          </p>
        </section>
        <section
          onMouseEnter={() => {
            setModalActive(true);
          }}
          onMouseLeave={() => {
            setModalActive(false);
          }}
          className="min-w-[400px] max-w-7xl w-[90%] flex flex-col gap-10 justify-self-center relative"
        >
          <Modal
            isModalActive={isModalActive}
            pages={pages}
            activeIndex={activeIndex}
          />
          {pages.map((page, index) =>
            page.type === "internal" ? (
              <Link key={index} href={`${page.link}`}>
                <div
                  data-hover="true"
                  onMouseEnter={() => setActiveIndex(index)}
                  className="w-full h-14 component flex items-center"
                >
                  <h1 className="md:text-[40px] text-[30px] truncate max-w-full absolute pointer-events-none font-openSans font-black text-[#444] active-h1">
                    {page.pageName}
                  </h1>
                  <h1 className="md:text-[40px] text-[30px] truncate max-w-full font-openSans font-black text-[#222] absolute pointer-events-none hidden-h1">
                    {page.pageName}
                  </h1>
                </div>
              </Link>
            ) : (
              <a key={page.link} href={`${page.link}`}>
                <div
                  onMouseEnter={() => setActiveIndex(index)}
                  data-hover="true"
                  className="w-full h-14 component flex items-center"
                >
                  <h1 className="md:text-[40px] text-[30px] truncate max-w-full absolute pointer-events-none font-openSans font-black text-[#444] active-h1">
                    {page.pageName}
                  </h1>
                  <h1 className="md:text-[40px] text-[30px] truncate max-w-full font-openSans font-black text-[#222] absolute pointer-events-none hidden-h1">
                    {page.pageName}
                  </h1>
                </div>
              </a>
            )
          )}
        </section>
      </motion.main>
    </AnimatePresence>
  );
}
