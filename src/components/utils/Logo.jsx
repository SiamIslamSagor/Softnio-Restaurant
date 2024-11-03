import LogoImg from "../../assets/logo.svg";

const Logo = () => {
  return (
    <div className="text-[1.75rem] flex items-center  gap-[6px]">
      <img src={LogoImg} alt="logo" className="size-[2.25rem]" />
      <h1 className="font-roboto">
        <strong>Restaurant</strong>
      </h1>
    </div>
  );
};

export default Logo;
