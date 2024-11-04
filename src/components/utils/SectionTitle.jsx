const SectionTitle = ({
  heading = "title here",
  subheading = "subheading here",
  subheadingColor = "#0a1425",
}) => {
  return (
    <div className="space-y-4">
      <h4 className="text-2xl font-bold flex items-center gap-2.5 text-red capitalize">
        <span className="size-[10px] block bg-red" /> {heading}
      </h4>
      <h4
        className="font-beba-neue text-[40px] sm:text-6xl leading-[48px]"
        style={{ color: subheadingColor }}
      >
        {subheading}
      </h4>
    </div>
  );
};

export default SectionTitle;
