import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "swiper/css";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { v4 as uuidV4 } from "uuid";
import burgerImg from "../assets/burgerImg.png";
import chickenFriesImg from "../assets/chickenFriesImg.png";
import frenchFriesImg from "../assets/frenchFriesImg.png";
import pizzaImg from "../assets/pizzaImg.png";
import saladPlate from "../assets/saladImg.png";

const FoodItems = () => {
  return (
    <div className="bg-[#FBF7F2] px-[30px] max-sm:pt-[120px] sm:pb-[120px] relative">
      <div className="web-container ">
        <div className="space-y-4 absolute top-10 z-10">
          <h4 className="text-2xl font-bold flex items-center gap-2.5 text-red">
            <span className="size-[10px] block bg-red" /> Crispy, Every Bite
            Taste
          </h4>

          <h4 className="font-beba-neue text-[40px] sm:text-6xl leading-[48px] ">
            POPULAR FOOD ITEMS
          </h4>
        </div>

        <Swiper
          modules={[Autoplay, Navigation, Pagination, A11y]}
          spaceBetween={30}
          slidesPerView={"auto"}
          className="max-sm:!pb-[8rem] max-sm:!pt-[3rem] sm:!pt-[12rem]"
          watchOverflow={false}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          {foods?.map(food => (
            <SwiperSlide key={food?.id} className="bg-white p-8  max-w-[310px]">
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
            </SwiperSlide>
          ))}

          <SwiperNavButtons />
        </Swiper>
      </div>

      <div className="absolute bottom-0 -left-[308px] -rotate-[50deg] max-xl:hidden">
        <img src={saladPlate} alt="salad's plate" />
      </div>
    </div>
  );
};

const SwiperNavButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flex max-sm:justify-center py-2 gap-8 absolute max-sm:bottom-5 max-sm:left-1/2 max-sm:-translate-x-1/2 sm:right-0 sm:top-14 z-40">
      <div
        className="size-16 flex items-center justify-center rounded-full group cursor-pointer active:scale-90 duration-300 hover:bg-yellow"
        style={{
          boxShadow: "0px 0px 13.636px 0px rgba(0, 0, 0, 0.10)",
        }}
        onClick={() => swiper.slidePrev()}
      >
        <FaAngleLeft className="text-3xl group-hover:text-red transition" />
      </div>
      <div
        className="size-16 flex items-center justify-center rounded-full group cursor-pointer active:scale-90 duration-300 hover:bg-yellow"
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

const generateShortUUID = () => uuidV4().slice(0, 8);

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
