import { useEffect } from "react";
import Logo from "./utils/Logo";
import { motion } from "framer-motion";

const Preloader = ({ isLoading, setIsLoading }) => {
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3800);
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
        transition={{ duration: 2.5, delay: 1 }}
        className="absolute w-[180px] h-[45px] bg-text-primary bg-opacity-95 scale-150 z-50"
      />
    </motion.div>
  );
};

export default Preloader;
