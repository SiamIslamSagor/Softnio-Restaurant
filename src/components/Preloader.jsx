import { useEffect } from "react";
import Logo from "./utils/Logo";
import { motion } from "framer-motion";

const Preloader = ({ isLoading, setIsLoading }) => {
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 5000);
  }, [setIsLoading]);

  return (
    <motion.div
      variants={{
        hidden: {
          y: -2000,
        },
        show: {
          y: 0,
        },
      }}
      exit={{
        opacity: 0,
        y: -2000,
      }}
      transition={{ duration: 1.5, damping: 300 }}
      animate={isLoading ? "show" : "hidden"}
      className="fixed z-[999999] min-h-screen bg-text-primary w-full flex items-center justify-center overflow-hidden"
    >
      <div className="absolute text-white scale150 z-40">
        <Logo />
      </div>
      <motion.div
        animate={{
          x: 180,
        }}
        transition={{ duration: 3, delay: 1 }}
        className="absolute w-[180px] h-[45px] bg-text-primary bg-opacity-95 scale-150 z-50"
      />
      {/* <div className="absolute after:content-[''] after:absolute after:h-[43px] after:w-full after:duration-300  after:bg-blue-900 after:w4 after:top-0 text-white scale-150">
        <Logo />
      </div> */}

      {/* <div className="w-4 overflow-hidden">
        <div className="bg-red w-max absolute opacity15 text-white scale-150 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <Logo />
        </div>
      </div> */}
    </motion.div>
  );
};

export default Preloader;
