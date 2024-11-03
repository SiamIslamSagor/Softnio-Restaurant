import Button from "./utils/Button";
import heroBannerImg from "../assets/heroBannerImg.png";

const HeroBanner = () => {
  return (
    <div className="px-[30px]">
      <div className="web-container sm:py-10 pb-10 sm:pb-20 lg:py-32 max-lg:space-y-10 lg:flex items-center justify-between">
        <div className="space-y-[32px] sm:space-y-[38px]">
          <div className="space-y-4 text-white">
            <h2 className="z-50 font-beba-neue text-[48px] sm:text-[5rem] lg:text-[120px] bg-red w-fit max-sm:tracking-tight lg:pr-10 leading-[108.333%] absolute bg-opacity-50">
              Taste the authentic
              <br /> Saudi cuisine
            </h2>
            <div className="min-h-[104px] sm:min-h-[173px] lg:min-h-[260px]" />
            <h6 className="text-xl lg:text-2xl">
              Among the best Saudi chefs in the world, serving <br /> you
              something beyond flavor.
            </h6>
          </div>
          <div>
            <Button text="explore menu" />
          </div>
        </div>

        <div className="relative">
          <div className="absolute max-sm:scale-75 max-sm:-top-5 max-sm:-right-2 -top-9 -right-7 -z-1">
            <WhiteFlowerSvg />
          </div>

          <div className="z-10">
            <img
              src={heroBannerImg}
              alt="hero banner image"
              className="max-lg:size-full"
              loading="lazy"
            />
          </div>

          <div className="max-sm:scale-50 sm:size-[120px] bg-yellow ring-8 ring-yellow rounded-full flex items-center justify-center absolute -bottom-4 sm:bottom-6 md:bottom-8 2xl:bottom-2 -right-4 sm:right-6 md:right-8 2xl:-right-12 shadow-[500px]">
            <div className="rounded-full flex items-center justify-center p-3 border-2 border-dashed border-red">
              <p className="font-beba-neue text-4xl leading-[100%] font-bold text-text-primary p-2">
                today <br />
                offer
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const WhiteFlowerSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="49"
      height="49"
      viewBox="0 0 49 49"
      fill="none"
    >
      <path
        d="M24.4995 24.5914C24.4995 24.5914 27.6425 29.8451 33.8558 32.8899C40.069 35.9356 47 35.6189 47 35.6189C47 35.6189 43.858 30.3643 37.6448 27.3195C31.4315 24.2747 24.4995 24.5914 24.4995 24.5914ZM24.4995 24.5914C24.4995 24.5914 17.5685 24.2747 11.3552 27.3195C5.142 30.3643 2 35.6189 2 35.6189C2 35.6189 8.93101 35.9356 15.1442 32.8899C21.3575 29.8451 24.4995 24.5914 24.4995 24.5914ZM24.4995 24.4086C24.4995 24.4086 21.3575 19.1549 15.1442 16.1101C8.93101 13.0644 2 13.3819 2 13.3819C2 13.3819 5.142 18.6357 11.3552 21.6813C17.5685 24.7261 24.4995 24.4086 24.4995 24.4086ZM24.4995 24.4086C24.4995 24.4086 31.4315 24.7261 37.6448 21.6813C43.858 18.6357 47 13.3819 47 13.3819C47 13.3819 40.069 13.0644 33.8558 16.1101C27.6425 19.1549 24.4995 24.4086 24.4995 24.4086ZM28.2885 35.9725C28.2885 42.0629 24.4995 47 24.4995 47C24.4995 47 20.7105 42.0629 20.7105 35.9725C20.7105 29.882 24.4995 24.9441 24.4995 24.9441C24.4995 24.9441 28.2885 29.882 28.2885 35.9725ZM20.7105 13.0275C20.7105 6.93793 24.4995 2 24.4995 2C24.4995 2 28.2885 6.93793 28.2885 13.0275C28.2885 19.118 24.4995 24.055 24.4995 24.055C24.4995 24.055 20.7105 19.118 20.7105 13.0275Z"
        stroke="white"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
    </svg>
  );
};

export default HeroBanner;
