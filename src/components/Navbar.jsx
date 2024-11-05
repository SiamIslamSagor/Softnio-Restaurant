import { AnimatePresence, motion } from "framer-motion";
import { Fade as Hamburger } from "hamburger-react";
import heroBg from "../assets/heroBg.png";
import Button from "./utils/Button";
import Logo from "./utils/Logo";
import { useCursorContext } from "../hoc/CursorContextProvider";
import { useState } from "react";

const Navbar = ({ isBannerHidden }) => {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const { setCursorVariant } = useCursorContext();
  const animationVariants = {
    haveBg: {
      opacity: 1,
    },
    transparentBg: {
      opacity: 1,
      backgroundImage: `url(${heroBg}) `,
      backgroundColor: "rgb(189 31 23)",
      boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
    },
  };

  return (
    <motion.header
      className="w-full fixed top-0 z-[100] backdrop-blur-md px-[30px]"
      variants={animationVariants}
      animate={isBannerHidden ? "transparentBg" : "haveBg"}
      transition={{ duration: 0.5 }}
    >
      <nav className="web-container flex justify-between items-center text-white py-[2rem] gap-[3.75rem]">
        <div className="flex items-center gap-16">
          <Logo />
          <motion.div className="flex gap-10 text-base capitalize font-medium max-lg:hidden">
            {pages?.map((page, idx) => (
              <a
                key={page?.name + idx}
                href={page?.path}
                onMouseEnter={() => {
                  setCursorVariant("pointer");
                }}
                onMouseLeave={() => {
                  setCursorVariant("default");
                }}
              >
                <motion.div
                  initial={{
                    y: 20,
                    opacity: 0,
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  transition={{ delay: 0.1 * (idx / 2) }}
                >
                  <p className="py-2 hover:text-yellow transition">
                    {page?.name}
                  </p>
                </motion.div>
              </a>
            ))}
          </motion.div>
        </div>
        <div className="flex items-center justify-center gap-4">
          <div className="max-sm:hidden">
            <Button text="book a table" />
          </div>
          <div className="hidden max-lg:block">
            <Hamburger
              toggled={sideBarOpen}
              onToggle={() => setSideBarOpen(!sideBarOpen)}
            />
          </div>
        </div>

        <SideBar sideBarOpen={sideBarOpen} />
      </nav>
      {/* backdrop black overlay */}
      <AnimatePresence mode="wait">
        {sideBarOpen && (
          <motion.div
            onClick={() => {
              setSideBarOpen(!sideBarOpen);
              console.log("out side clk");
            }}
            initial={{
              opacity: 0,
              backgroundColor: "black",
            }}
            animate={{
              opacity: 0.8,
              backgroundColor: "black",
            }}
            exit={{
              opacity: 0,
            }}
            className="bg-black absolute min-h-screen w-[calc(100vw)] left-0 top-0 -z-10 lg:!hidden"
          />
        )}
      </AnimatePresence>
    </motion.header>
  );
};

const SideBar = ({ sideBarOpen = false }) => {
  return (
    <motion.div
      variants={{
        show: {
          x: 0,

          borderRadius: "0",
        },
        hidden: {
          x: -288,
          borderRadius: "0% 80% 80% 0% / 0% 50% 50% 0%",
        },
      }}
      transition={{
        duration: 0.6,
        type: "tween",
      }}
      animate={sideBarOpen ? "show" : "hidden"}
      style={{
        backgroundImage: `url(${heroBg}) `,
      }}
      className="absolute px-5 py-20 bg-red left-0 top-0 min-w-72 min-h-screen lg:!hidden"
    >
      <Logo />
      <div className="mt-5">
        {pages?.map((page, idx) => (
          <a key={page?.name + idx} href={page?.path}>
            <motion.div
              initial={{
                x: -100,
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
              transition={{ delay: 0.1 * (idx / 2), duration: 0.5 }}
              className="w-full text-2xl capitalize pl-10"
            >
              <p className="py-2 hover:text-yellow transition font-medium tracking-wider">
                {page?.name}
              </p>
            </motion.div>
          </a>
        ))}
      </div>
    </motion.div>
  );
};

const pages = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "about",
    path: "/",
  },
  {
    name: "portfolio",
    path: "/",
  },
  {
    name: "clients",
    path: "/",
  },
  {
    name: "blog",
    path: "/",
  },
  {
    name: "contact",
    path: "/",
  },
];

export default Navbar;
