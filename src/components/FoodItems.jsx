import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import "swiper/css";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import burgerImg from "../assets/burgerImg.png";
import chickenFriesImg from "../assets/chickenFriesImg.png";
import frenchFriesImg from "../assets/frenchFriesImg.png";
import pizzaImg from "../assets/pizzaImg.png";
import saladPlate from "../assets/saladImg.png";
import { useCursorContext } from "../hoc/CursorContextProvider";
import { generateShortUUID } from "../utils";
import SectionTitle from "./utils/SectionTitle";
import { SwiperNavButtons } from "./utils/SwiperNavButtons";

const FoodItems = () => {
  const targetRef = useRef(null);
  const { setCursorVariant } = useCursorContext();

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["200px end", "400px end"],
    // offset: ["start end", "400px end"],
  });

  return (
    <div className="bg-[#FBF7F2] px-[30px] max-sm:pt-[120px] sm:pb-[120px] relative">
      <motion.div
        className="h-2 w-full bg-red rounded-[50%] scale-x-0 max-lg:hidden"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="web-container ">
        <div className=" absolute top-10 sm:top-20 z-10">
          <SectionTitle
            heading="crispy, every bite
            taste"
            subheading="POPULAR FOOD ITEMS"
          />
        </div>

        <Swiper
          modules={[Autoplay, Navigation, Pagination, A11y]}
          spaceBetween={30}
          slidesPerView={"auto"}
          className="max-sm:!pb-[8rem] max-sm:!pt-[3rem] sm:!pt-[15rem]"
          watchOverflow={false}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          {foods?.map(food => (
            <SwiperSlide
              key={food?.id}
              onMouseEnter={() => {
                setCursorVariant("hidden");
              }}
              onMouseLeave={() => {
                setCursorVariant("default");
              }}
              className="bg-white p-8  cursor-grab max-w-[310px]"
            >
              <SwiperSlideItem food={food} />
            </SwiperSlide>
          ))}

          <SwiperNavButtons
            targetRef={targetRef}
            scrollYProgress={scrollYProgress}
            setCursorVariant={setCursorVariant}
          />
        </Swiper>
      </div>

      <div className="absolute select-none bottom-0 -left-[308px] -rotate-[50deg] max-xl:hidden">
        <motion.img
          initial={{
            x: -150,
          }}
          whileInView={{
            x: 0,
          }}
          transition={{ duration: 0.5, delay: 0.5 }}
          src={saladPlate}
          alt="salad's plate"
        />
      </div>
    </div>
  );
};

const SwiperSlideItem = ({ food }) => {
  return (
    <>
      <div className="bg-white flex items-center justify-center w-full max-h-44 overflow-hidden">
        <img
          src={food?.img}
          alt={food?.name}
          className="max-h-[120px] object-cover"
        />
      </div>
      <div className="min-w-16 mx-auto w-fit h-1 bg-red my-6" />
      <div className="text-center">
        <h4 className="text-2xl font-bold font-beba-neue tracking-wider leading-[150%]">
          {food?.name}
        </h4>
        <p className="text-base  leading-[200%]">{food?.description}</p>
      </div>
    </>
  );
};

const foods = [
  {
    id: generateShortUUID(),
    name: "vegetables burger",
    description: "Barbecue Italian cuisine pizza",
    img: burgerImg,
  },
  {
    id: generateShortUUID(),
    name: "Spacial Pizza ",
    description: "Barbecue Italian cuisine pizza",
    img: pizzaImg,
  },
  {
    id: generateShortUUID(),
    name: "Spacial French fries",
    description: "Barbecue Italian cuisine",
    img: frenchFriesImg,
  },
  {
    id: generateShortUUID(),
    name: "Cuisine Chicken",
    description: "Japanese Cuisine Chicken",
    img: chickenFriesImg,
  },
  /* -------------------------------------------- */
  {
    id: generateShortUUID(),
    name: "vegetables burger",
    description: "Barbecue Italian cuisine pizza",
    img: burgerImg,
  },
  {
    id: generateShortUUID(),
    name: "Spacial Pizza ",
    description: "Barbecue Italian cuisine pizza",
    img: pizzaImg,
  },
  {
    id: generateShortUUID(),
    name: "Spacial French fries",
    description: "Barbecue Italian cuisine",
    img: frenchFriesImg,
  },
  {
    id: generateShortUUID(),
    name: "Cuisine Chicken",
    description: "Japanese Cuisine Chicken",
    img: chickenFriesImg,
  },
];

export default FoodItems;
