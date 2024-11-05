import { motion } from "framer-motion";
import { Fade as Hamburger } from "hamburger-react";
import heroBg from "../assets/heroBg.png";
import Button from "./utils/Button";
import Logo from "./utils/Logo";
import { useCursorContext } from "../hoc/CursorContextProvider";

const Navbar = ({ isBannerHidden }) => {
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
            <Hamburger />
          </div>
        </div>
      </nav>
    </motion.header>
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
