import { motion, useTransform } from "framer-motion";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useSwiper } from "swiper/react";

export const SwiperNavButtons = ({
  setCursorVariant,
  scrollYProgress,
  targetRef,
}) => {
  const swiper = useSwiper();

  const xValue1 = useTransform(scrollYProgress, [0, 1], [48, 0]);

  const xValue2 = useTransform(scrollYProgress, [0, 1], [-48, 0]);

  return (
    <div
      ref={targetRef}
      className="flex max-sm:justify-center py-2 gap-8 absolute max-sm:bottom-5 max-sm:left-1/2 max-sm:-translate-x-1/2 sm:right-0 sm:top-10 lg:top-20 z-40"
    >
      {/* lg */}
      <motion.div
        className="max-sm:hidden size-16 flex items-center justify-center rounded-full group cursor-pointer active:scale-90 duration-300 hover:bg-yellow"
        style={{
          boxShadow: "0px 0px 13.636px 0px rgba(0, 0, 0, 0.10)",
          x: xValue1,
          opacity: scrollYProgress,
        }}
        onClick={() => swiper.slidePrev()}
        onMouseEnter={() => {
          setCursorVariant("pointer");
        }}
        onMouseLeave={() => {
          setCursorVariant("default");
        }}
      >
        <FaAngleLeft className="text-3xl group-hover:text-red transition" />
      </motion.div>
      <motion.div
        className="max-sm:hidden size-16 flex items-center justify-center rounded-full group cursor-pointer active:scale-90 duration-300 hover:bg-yellow"
        style={{
          boxShadow: "0px 0px 13.636px 0px rgba(0, 0, 0, 0.10)",
          x: xValue2,
          opacity: scrollYProgress,
        }}
        onClick={() => swiper.slideNext()}
        onMouseEnter={() => {
          setCursorVariant("pointer");
        }}
        onMouseLeave={() => {
          setCursorVariant("default");
        }}
      >
        <FaAngleRight className="text-3xl group-hover:text-red transition" />
      </motion.div>
      {/* sm */}
      <div
        className="sm:hidden size-16 flex items-center justify-center rounded-full group cursor-pointer active:scale-90 duration-300 hover:bg-yellow"
        style={{
          boxShadow: "0px 0px 13.636px 0px rgba(0, 0, 0, 0.10)",
        }}
        onClick={() => swiper.slidePrev()}
      >
        <FaAngleLeft className="text-3xl group-hover:text-red transition" />
      </div>
      <div
        className="sm:hidden size-16 flex items-center justify-center rounded-full group cursor-pointer active:scale-90 duration-300 hover:bg-yellow"
        style={{
          boxShadow: "0px 0px 13.636px 0px rgba(0, 0, 0, 0.10)",
        }}
        onClick={() => swiper.slideNext()}
      >
        <FaAngleRight className="text-3xl group-hover:text-red transition" />
      </div>
    </div>
  );
};
