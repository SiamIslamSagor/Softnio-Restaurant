const Button = ({ text = "Click me" }) => {
  return (
    <button className="flex flex-col item-center justify-center py-4 px-6 bg-yellow text-text-primary text-lg font-bold uppercase leading-6 w-max">
      {text}
    </button>
  );
};

export default Button;
