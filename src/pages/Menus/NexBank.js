import Link from "next/link";
import styles from "../../styles/NexBank.module.css";

const HamburgerIcon = () => {
  return (
    <div  id={styles.hamburger__icon} className="w-full h-2/4 flex flex-col gap-2 justify-center items-end px-2 overflow-hidden">
      <div id={styles.bar__one} className="h-[2px] bg-black w-6"></div>
      <div id={styles.bar__two} className="h-[2px] bg-black w-10"></div>
    </div>
  );
};

const NexBank = () => {
  return (
    <main className="w-screen h-screen">
      <nav className="w-full h-20 border border-black flex items-center px-8 justify-between">
        <Link href="/">
          <p className="text-black font-openSans hover:underline transition-all">
            Back
          </p>
        </Link>

        <div className="h-full aspect-square border grid place-items-center">
          <HamburgerIcon />
        </div>
      </nav>
    </main>
  );
};

export default NexBank;
