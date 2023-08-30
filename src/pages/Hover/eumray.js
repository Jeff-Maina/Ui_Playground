import { motion } from "framer-motion";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ComponentDetails from "@/components/ComponentDetails";

const Image = ({ activeImage, animateModal }) => {
  const handleMouseMove = ({ clientX, clientY }) => {
    const moveContainerY = gsap.quickTo(ref.current, "top", {
      duration: 0.8,
      ease: "power3",
    });
    const moveContainerX = gsap.quickTo(ref.current, "left", {
      duration: 0.8,
      ease: "power3",
    });

    let { height, width } = ref.current?.getBoundingClientRect();

    moveContainerX(clientX - width / 2);
    moveContainerY(clientY - height / 2);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{
        opacity: animateModal ? 1 : 0,
      }}
      className="absolute h-72 md:h-96 lg:h-[34rem] xl:h-[42rem] aspect-[1/1.2] rotate-[5deg] pointer-events-none top-0 left-0"
    >
      <svg
        viewBox="0 0 1728 852"
        fill="none"
        height="100%"
        width="100%"
        preserveAspectRatio="xMidYMin slice"
        className="zIndex-[-1] absolute w-full h-full"
      >
        <defs>
          <filter id="displacementfilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.05"
              numOctaves="2"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="500"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
          <mask id="circleMask">
            <motion.circle
              initial={{
                r: "10%",
              }}
              animate={{
                r: animateModal ? "50%" : "10%",
              }}
              transition={{
                duration: animateModal ? 1 : 0,
              }}
              cx="50%"
              cy="50%"
              r="50%"
              fill="white"
              className="displacement"
            />
          </mask>
        </defs>

        <image
          href={activeImage}
          alt=""
          mask="url(#circleMask)"
          height="100%"
          width="100%"
          className="w-full h-full object-cover pointer-events-none"
        />
      </svg>
    </motion.div>
  );
};

const Link = ({ link, setAnimateModal, setActiveImage, setMousePosition }) => {
  const { title, details, image } = link;

  return (
    <div className="w-full flex flex-col md:flex-row md:gap-5 md:py-10  border-b-2 border-black py-5 items-start cursor-pointer">
      <div
        onMouseEnter={() => {
          setAnimateModal(true);
          setActiveImage(image);
        }}
        onMouseLeave={() => setAnimateModal(false)}
        className="text-[3.8rem] leading-[3.8rem]  md:text-[4.6rem] md:leading-[4.6rem] lg:text-[7rem] lg:leading-[7rem] xl:text-[172px] xl:leading-[170px] lg:tracking-tighter  tracking-tight min-w-fit"
      >
        {title}
      </div>
      <div className="flex font-openSans gap-2 md:flex-col md:gap-0 md:font-avenir md:text-lg lg:font-openSans lg:font-bold">
        {details.map((detail, index) => (
          <>
            <p>{detail}</p>
            <span className="md:hidden">/</span>
          </>
        ))}
      </div>
    </div>
  );
};

const Eumray = () => {
  const links = [
    {
      title: "aLAGENCY",
      details: ["IMC agency", "UX/UI Web development", "2023. 03"],
      image:
        "https://images.unsplash.com/photo-1615790469537-7c9d8e95c047?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80",
    },
    {
      title: "Luminous seoul",
      details: ["Studio", "UX/UI Web development", "2023. 03"],
      image:
        "https://images.unsplash.com/photo-1542684377-0b875fde9563?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=659&q=80",
    },
    {
      title: "CODING BOOK",
      details: ["IMC agency", "UX/UI Web development", "2023. 03"],
      image:
        "https://images.unsplash.com/photo-1492112007959-c35ae067c37b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=684&q=80",
    },
  ];

  const [activeImage, setActiveImage] = useState("");
  const [animateModal, setAnimateModal] = useState(false);

  return (
    <main className="font-avenir text-[#282828] overflow-hidden h-screen w-screen relative">
      <Head>
        <title>Hover effect | eumRay</title>
      </Head>
      <nav className="w-full h-32"></nav>
      <section className="w-full flex flex-col">
        {links.map((link) => {
          return (
            <Link
              link={link}
              setAnimateModal={setAnimateModal}
              setActiveImage={setActiveImage}
            />
          );
        })}
      </section>{" "}
      <Image activeImage={activeImage} animateModal={animateModal} />
      <ComponentDetails
        font={"avenir"}
        website={"Eumray"}
        websiteLink={"https://eumray.com/?ref=godly"}
        date={"24.08.2023"}
        textColor={"#282828"}
        componentType={"Image hover effect"}
      />
    </main>
  );
};

export default Eumray;
