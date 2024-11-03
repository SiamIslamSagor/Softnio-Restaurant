import Button from "./utils/Button";
import Logo from "./utils/Logo";

const Navbar = () => {
  return (
    <header className="w-full sticky top-0 bg-red700">
      <nav className="web-container flex justify-between items-center text-white py-[2rem] gap-[3.75rem]">
        <Logo />
        <div className="flex gap-10 text-base capitalize font-medium">
          {pages?.map((page, idx) => (
            <a key={page?.name + idx} href={page?.path}>
              <div>{page?.name}</div>
            </a>
          ))}
        </div>
        <div>
          <Button text="book a table" />
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
