import Image from "next/image";
import { Inter } from "next/font/google";
import FancyCursor from "@/components/cursorSqueeze";
import { reactProductionProfiling } from "../../next.config";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const pages = [{ pageName: "Magnetic Custom Cursor", link: "/MagnetCursor" }];

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
        <section className="w-full h-[40vh]"></section>
        <section className="min-w-[400px] w-3/4 flex flex-col gap-10 justify-self-center">
          {pages.map((page) => {
            return (
              <Link href={`/${page.link}`}>
                <div
                  data-hover="true"
                  className="w-full h-14 component flex items-center"
                >
                  <h1 className="text-[40px] absolute pointer-events-none font-openSans font-black text-[#222] active-h1">
                    {page.pageName}
                  </h1>
                  <h1 className="text-[40px] font-openSans font-black text-[#222] absolute pointer-events-none hidden-h1">
                    {page.pageName}
                  </h1>
                </div>
              </Link>
            );
          })}
        </section>
      </motion.main>
    </AnimatePresence>
  );
}
