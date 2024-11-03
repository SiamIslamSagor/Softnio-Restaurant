const Button = ({ text = "Click me" }) => {
  return (
    <button className="flex flex-col item-center justify-center py-2 px-3 md:py-2.5 md:px-6 bg-yellow text-text-primary text-sm sm:text-base md:text-lg font-bold uppercase leading-6 w-max active:scale-95 duration-300">
      {text}
    </button>
  );
};

export default Button;
