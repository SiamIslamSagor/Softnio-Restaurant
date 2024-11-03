import Button from "./utils/Button";

const HeroBanner = () => {
  return (
    <div className="">
      <div className="web-container py-32">
        <div className="space-y-[38px]">
          <div className="space-y-4">
            <h2 className="font-beba-neue text-[120px] bg-red-600 w-fit pr-10 bgop2">
              Taste the authentic <br /> Saudi cuisine
            </h2>
            <h6>
              Among the best Saudi chefs in the world, serving you something
              beyond flavor.
            </h6>
          </div>
          <div>
            <Button text="explore menu" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
