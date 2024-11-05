import { useLenis } from "lenis/react";
import LogoImg from "../../assets/logo.svg";
import { useCursorContext } from "../../hoc/CursorContextProvider";

const Logo = () => {
  const lenis = useLenis();
  const { setCursorVariant } = useCursorContext();

  const handleScroll = () => {
    const target = document.getElementById("home");
    if (target) {
      lenis.scrollTo(target, {
        offset: 0,
        duration: 2,
      });
    }
  };

  return (
    <div
      onClick={handleScroll}
      onMouseEnter={() => {
        setCursorVariant("pointer");
      }}
      onMouseLeave={() => {
        setCursorVariant("default");
      }}
      className="text-[1.75rem] cursor-pointer flex items-center  gap-[6px]"
    >
      <img src={LogoImg} alt="logo" className="size-[2.25rem]" />
      <h1 className="font-roboto">
        <strong>Restaurant</strong>
      </h1>
    </div>
  );
};

export default Logo;
