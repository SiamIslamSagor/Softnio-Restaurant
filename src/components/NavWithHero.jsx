import Navbar from "./Navbar";
import heroBg from "../assets/heroBg.png";

const NavWithHero = () => {
  return (
    <div
      className="w-full bg-[#BD1F17] min-h-screen "
      style={{
        background: `url(${heroBg}) `,
      }}
    >
      <Navbar />
      <div className="min-h-96 "></div>
    </div>
  );
};

export default NavWithHero;
