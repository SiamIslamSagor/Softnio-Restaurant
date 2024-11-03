import Button from "./utils/Button";
import Logo from "./utils/Logo";
import heroBg from "../assets/heroBg.png";
import { Fade as Hamburger } from "hamburger-react";

const Navbar = () => {
  return (
    <header
      className="w-full sticky top-0 z-[100] backdrop-blur-md px-[30px] bg-[#BD1F17]"
      style={{
        backgroundImage: `url(${heroBg}) `,
      }}
    >
      <nav className="web-container flex justify-between items-center text-white py-[2rem] gap-[3.75rem]">
        <Logo />
        <div className="flex gap-10 text-base capitalize font-medium max-lg:hidden">
          {pages?.map((page, idx) => (
            <a key={page?.name + idx} href={page?.path}>
              <div>
                <p>{page?.name}</p>
              </div>
            </a>
          ))}
        </div>
        <div className="flex items-center justify-center gap-4">
          <div className="max-sm:hidden">
            <Button text="book a table" />
          </div>
          <div className="hidden max-lg:block">
            <Hamburger />
          </div>
        </div>
      </nav>
    </header>
  );
};

const pages = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "about",
    path: "/",
  },
  {
    name: "portfolio",
    path: "/",
  },
  {
    name: "clients",
    path: "/",
  },
  {
    name: "blog",
    path: "/",
  },
  {
    name: "contact",
    path: "/",
  },
];

export default Navbar;
