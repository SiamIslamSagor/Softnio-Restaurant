import heroBg from "../assets/heroBg.png";
import HeroBanner from "./HeroBanner";

const NavWithHero = () => {
  return (
    <div
      className="w-full bg-[#BD1F17] min-h-screen "
      style={{
        backgroundImage: `url(${heroBg}) `,
      }}
    >
      <HeroBanner />
    </div>
  );
};

export default NavWithHero;
