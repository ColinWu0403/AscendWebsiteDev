const CustomButton = ({
  button_text,
  link,
}: {
  button_text: string;
  link: string;
}) => {
  const handleRedirect = () => {
    const targetUrl = { link };
    window.open(targetUrl.link, "_blank");
  };

  // original button styles
  const buttonStyles =
    "font-semibold w-40 h-12 bg-primary text-white rounded-none border-none flex items-center justify-center";

  // Transition styles
  const transitionStyles = "transition-all duration-300 ease-in";

  // Hover styles
  const hoverStyles = "group hover:bg-[#ffb845] hover:text-brownish";

  return (
    <button
      onClick={handleRedirect}
      className={`${buttonStyles} ${transitionStyles} ${hoverStyles}`}
    >
      {button_text}
    </button>
  );
};

export default CustomButton;
