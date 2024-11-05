import useMouse from "@react-hook/mouse-position";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import About from "../components/About";
import BookingForm from "../components/BookingForm";
import FoodItems from "../components/FoodItems";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import Navbar from "../components/Navbar";
import Preloader from "../components/Preloader";
import Testimonials from "../components/Testimonials";
import { useCursorContext } from "../hoc/CursorContextProvider";
// import CustomCursor from "../components/utils/CustomCursor";

const Root = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isBannerHidden, setIsBannerHidden] = useState(false);

  const { cursorText, setCursorText, cursorVariant, setCursorVariant } =
    useCursorContext();

  const mainRef = useRef(null);

  const mouse = useMouse(mainRef, {
    enterDelay: 0,
    leaveDelay: 0,
  });

  let mouseXPosition = 0;
  let mouseYPosition = 0;

  if (mouse.x !== null) {
    mouseXPosition = mouse.clientX;
  }

  if (mouse.y !== null) {
    mouseYPosition = mouse.clientY;
  }

  const variants = {
    default: {
      opacity: 1,
      height: 40,
      width: 40,
      x: mouseXPosition - 20,
      y: mouseYPosition - 20,
      border: "1px solid white",
      transition: {
        type: "spring",
        mass: 0.1,
      },
      mixBlendMode: "difference",
    },
    pointer: {
      opacity: 1,
      height: 124,
      width: 124,
      x: mouseXPosition - 62,
      y: mouseYPosition - 62,
      border: "1px solid white",

      transition: {
        type: "spring",
        mass: 0.1,
      },
      mixBlendMode: "difference",
    },
    text: {
      opacity: 1,
      backgroundColor: "#e23c32",
      height: 150,
      width: 150,
      x: mouseXPosition - 75,
      y: mouseYPosition - 75,
      transition: {
        type: "spring",
        mass: 0.1,
      },
    },
    hidden: {
      scale: 0,
      opacity: 1,
      height: 40,
      width: 40,
      x: mouseXPosition - 20,
      y: mouseYPosition - 20,
      border: "1px solid white",
      transition: {
        type: "spring",
        mass: 0.1,
      },
      mixBlendMode: "difference",
    },
  };

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 28,
  };

  return (
    <div
      ref={mainRef}
      className="z-[999999999999999999999] w-full overflow-x-hidden relative"
    >
      <motion.div
        transition={spring}
        variants={variants}
        animate={cursorVariant}
        className={`max-sm:hidden fixed z-[1000000000000000000000000] flex flex-row items-center justify-center   !rounded-full pointer-events-none text-white text-center text-lg
          ${mouseXPosition == 0 && mouseYPosition == 0 && "hidden"}`}
      >
        {cursorText ? (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: "backOut",
              type: "tween",
            }}
            className="!pointer-events-none !text-xl tracking-[.4rem] uppercase font-medium"
          >
            {cursorText}
          </motion.span>
        ) : (
          <span className="size-4 !bg-red  rounded-full"></span>
        )}
      </motion.div>
      {/*  */}
      {/*  */}
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Preloader isLoading={isLoading} setIsLoading={setIsLoading} />
        ) : (
          <>
            <main>
              <Navbar isBannerHidden={isBannerHidden} />
              <HeroBanner setIsBannerHidden={setIsBannerHidden} />
              <About />
              <FoodItems />
              <BookingForm />
              <Testimonials />
            </main>
            <Footer />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Root;
