const CustomButton = ({
  button_text,
  link,
  color_styles,
  hover_color,
}: {
  button_text: string;
  link: string;
  color_styles: string;
  hover_color: string;
}) => {
  const handleRedirect = () => {
    const targetUrl = { link };
    window.open(targetUrl.link, "_blank");
  };

  // original button styles
  const buttonStyles =
    "font-semibold w-40 h-12 text-white rounded-none border-none flex items-center justify-center";

  // Transition styles
  const transitionStyles = "transition-all duration-300 ease-in";

  // Hover styles
  const hoverStyles = "group hover:text-brownish";

  return (
    <button
      onClick={handleRedirect}
      className={`${buttonStyles} ${transitionStyles} ${hoverStyles} ${color_styles} ${hover_color}`}
    >
      {button_text}
    </button>
  );
};

export default CustomButton;
