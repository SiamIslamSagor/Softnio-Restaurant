import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "swiper/css";
import {
  A11y,
  Autoplay,
  EffectCreative,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import birianyImg from "../assets/image.png";
import tomatoSliceImg from "../assets/tomatoSliceImg.png";
import { generateShortUUID } from "../utils";
import SectionTitle from "./utils/SectionTitle";

const Testimonials = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["200px end", "400px end"],
    // offset: ["start end", "400px end"],
  });

  return (
    <div className="bg-[#FBF7F2] px-[30px] max-sm:pt-[120px] sm:pb-[120px] relative">
      <div className="web-container ">
        <div className=" absolute top-10 sm:top-20 z-10">
          <SectionTitle
            heading="crispy, every bite
            taste"
            subheading="What Some of my Customers Say"
          />
        </div>

        <Swiper
          modules={[Autoplay, Navigation, Pagination, A11y, EffectCreative]}
          spaceBetween={30}
          slidesPerView={1}
          className="max-sm:!pb-[8rem] max-sm:!pt-[4rem] sm:!pt-[15rem] duration-1000"
          watchOverflow={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          speed={1000}
          loop={true}
          ////////////////////////
          grabCursor={true}
          effect={"creative"}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -700],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
        >
          {reviews?.map(rev => (
            <SwiperSlide
              key={rev?.id}
              className="bg-yellow cursor-grab min-w-full"
            >
              <SwiperSlideItem rev={rev} />
            </SwiperSlide>
          ))}

          <SwiperNavButtons
            targetRef={targetRef}
            scrollYProgress={scrollYProgress}
          />
        </Swiper>
      </div>

      <div className="absolute top-44 -left-[144px]  max-xl:hidden">
        <motion.img
          initial={{
            x: -140,
            y: 150,
          }}
          whileInView={{
            x: 0,
            y: 0,
          }}
          transition={{ duration: 0.5, delay: 0.5 }}
          src={tomatoSliceImg}
          alt="tomato's slice"
        />
      </div>
    </div>
  );
};

const SwiperNavButtons = ({ scrollYProgress, targetRef }) => {
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

const SwiperSlideItem = ({ rev }) => {
  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row">
        <div className="relative lg:max-w-[455px] xl:max-w-[555px]  p-5 sm:p-10 lg:p-10 xl:p-16 flex-col overflow-hidden">
          <div className="h-[calc(100%-69px)]">
            <div className="relative">
              <div className="absolute -top-2 sm:-left-5">
                <CoteSvg />
              </div>
              <h4 className="mt-2 text-xl leading-[170%]">{rev?.review}</h4>
            </div>{" "}
          </div>
          <div>
            <TestimonialFooter rev={rev} />
            <hr className="mt-4 border-text-primary" />
          </div>
          <div className="absolute left-0 bottom-10 max-sm:-bottom-10">
            <FlowerSvg />
          </div>
        </div>
        <div className="relative">
          <img
            src={birianyImg}
            alt="biriyani image"
            className="xl:min-h-[555px] xl:min-w-[764px]"
          />
          <div className="absolute z-20 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <div className="ring-8 ring-yellow ring-opacity-30 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
              >
                <path
                  d="M25.2196 0.0168457C11.542 0.0168457 0.454163 11.1957 0.454163 24.9856C0.454163 38.7754 11.542 49.9543 25.2196 49.9543C38.8971 49.9543 49.985 38.7754 49.985 24.9856C49.9705 11.2019 38.8911 0.0315803 25.2196 0.0168457ZM35.6493 25.7811C35.4778 26.1279 35.1991 26.409 34.8551 26.5818V26.5907L20.7034 33.7247C19.8295 34.1649 18.7671 33.8076 18.3303 32.9265C18.2061 32.676 18.1422 32.3995 18.1437 32.1195V17.8517C18.1433 16.8667 18.9349 16.0679 19.9119 16.0673C20.1867 16.0672 20.4577 16.1316 20.7034 16.2554L34.8551 23.3894C35.7295 23.8287 36.0851 24.8996 35.6493 25.7811Z"
                  fill="#FFC900"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const TestimonialFooter = ({ rev }) => {
  return (
    <div className="flex justify-between items-center max-lg:mt-10">
      <div>
        <h3 className="font-beba-neue text-xl">{rev?.name}</h3>
        <p className=""> {rev?.country}</p>
      </div>
      <div>
        <div className="size-12 rounded-full overflow-hidden">
          <img
            className="rounded-full size-full"
            src={rev?.profileImg}
            alt="reviewer image"
          />
        </div>
      </div>
    </div>
  );
};

const CoteSvg = () => {
  return (
    <svg
      width="16"
      height="12"
      viewBox="0 0 16 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.9216 5.8571C12.7206 5.8571 13.3997 6.13675 13.959 6.69605C14.5183 7.25535 14.798 7.9345 14.798 8.7335C14.798 9.5325 14.5183 10.2316 13.959 10.8309C13.3997 11.3902 12.7006 11.6698 11.8616 11.6698C11.0227 11.6698 10.3435 11.3902 9.8242 10.8309C9.30485 10.2716 9.00522 9.51253 8.92532 8.55372C8.72557 6.91577 9.12507 5.33775 10.1238 3.81965C11.1226 2.30155 12.6407 1.18294 14.6781 0.463844L15.1575 1.36272C13.2799 1.84212 12.0015 2.78095 11.3223 4.1792C11.0027 5.138 11.2025 5.6973 11.9216 5.8571ZM4.07139 5.8571C4.8704 5.8571 5.54955 6.13675 6.10885 6.69605C6.66815 7.25535 6.9478 7.9345 6.9478 8.7335C6.9478 9.5325 6.66815 10.2316 6.10885 10.8309C5.54955 11.3902 4.85042 11.6698 4.01147 11.6698C3.17252 11.6698 2.49337 11.3902 1.97402 10.8309C1.45467 10.2716 1.15504 9.51253 1.07514 8.55372C0.875393 6.91577 1.27489 5.33775 2.27364 3.81965C3.27239 2.30155 4.7905 1.18294 6.82795 0.463844L7.30735 1.36272C5.4297 1.84212 4.15129 2.78095 3.47214 4.1792C3.15254 5.138 3.35229 5.6973 4.07139 5.8571Z"
        fill="#0A1425"
      />
    </svg>
  );
};

const FlowerSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="78"
      viewBox="0 0 40 78"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7943 77.4766L23.3448 61.5335L39.1592 54.9292L32.6086 38.9862L39.1592 23.042L23.3448 16.4377L16.7943 0.494644L0.108093 7.46306V38.6221L0.108144 39.2361L0.108093 39.8652V70.5082L16.7943 77.4766ZM1.85178 36.8641V8.63771L15.8506 2.79156L21.6491 16.9042L1.85178 36.8641ZM22.8821 18.1473L36.8809 23.9934L31.0824 38.1072H3.08475L22.8821 18.1473ZM3.08586 39.8652H31.0824L36.8809 53.9778L22.8821 59.8239L3.08586 39.8652ZM21.6491 61.067L15.8506 75.1796L1.85178 69.3335V41.1071L21.6491 61.067Z"
        fill="#243054"
      />
      <path
        d="M27.3183 28.7669C27.3183 30.1194 26.2299 31.2156 24.8885 31.2156C23.5481 31.2156 22.4598 30.1194 22.4598 28.7669C22.4598 27.4145 23.5481 26.3183 24.8885 26.3183C26.2299 26.3183 27.3183 27.4145 27.3183 28.7669Z"
        fill="#243054"
      />
      <path
        d="M13.5512 14.0744C13.5512 15.4269 12.464 16.5242 11.1225 16.5242C9.78109 16.5242 8.69385 15.4269 8.69385 14.0744C8.69385 12.722 9.78109 11.6258 11.1225 11.6258C12.464 11.6258 13.5512 12.722 13.5512 14.0744Z"
        fill="#243054"
      />
      <path
        d="M13.5512 62.3497C13.5512 63.7022 12.464 64.7983 11.1225 64.7983C9.78109 64.7983 8.69385 63.7022 8.69385 62.3497C8.69385 60.9972 9.78109 59.9011 11.1225 59.9011C12.464 59.9011 13.5512 60.9972 13.5512 62.3497Z"
        fill="#243054"
      />
      <path
        d="M27.3183 48.357C27.3183 49.7095 26.2299 50.8057 24.8885 50.8057C23.5481 50.8057 22.4598 49.7095 22.4598 48.357C22.4598 47.0046 23.5481 45.9084 24.8885 45.9084C26.2299 45.9084 27.3183 47.0046 27.3183 48.357Z"
        fill="#243054"
      />
    </svg>
  );
};

const reviews = [
  {
    id: generateShortUUID(),
    name: "Khalid Al Dawsry",
    country: "Jeddah, Saudi Arabia",
    profileImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIWNTiq9IDokwKAKD68rWcfvb_790X2MOxIA&s",
    vdo: birianyImg,
    review:
      "You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.",
  },
  {
    id: generateShortUUID(),
    name: "Amira Al Rashid",
    country: "Riyadh, Saudi Arabia",
    profileImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKb5B_aLbXOpeHLmqaP8jOqMOfwVal7TXQsQ&s",
    vdo: birianyImg,
    review:
      "You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.",
  },
  {
    id: generateShortUUID(),
    name: "Sara Haddad",
    country: "Doha, Qatar",
    profileImg:
      "https://w7.pngwing.com/pngs/4/736/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png",
    vdo: birianyImg,
    review:
      "You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.",
  },
  {
    id: generateShortUUID(),
    name: "Omar Zayed",
    country: "Abu Dhabi, UAE",
    profileImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIWNTiq9IDokwKAKD68rWcfvb_790X2MOxIA&s",
    vdo: birianyImg,
    review:
      "You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.",
  },
  {
    id: generateShortUUID(),
    name: "Noura Fayyad",
    country: "Cairo, Egypt",
    profileImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIWNTiq9IDokwKAKD68rWcfvb_790X2MOxIA&s",
    vdo: birianyImg,
    review:
      "You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.",
  },
];

export default Testimonials;
