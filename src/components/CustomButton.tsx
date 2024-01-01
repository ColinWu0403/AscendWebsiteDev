import React from "react";

const CustomButton = () => {
  const handleRedirect = () => {
    const targetUrl = "https://www.ascendleadership.org/ourstory";
    window.open(targetUrl, "_blank");
  };

  // original button styles
  const buttonStyles =
    "font-semibold w-40 h-12 bg-primary text-white rounded-none border-none flex items-center justify-center";

  // Transition styles
  const transitionStyles = "transition-all duration-300 ease-in";

  // Hover styles
  const hoverStyles = "group hover:bg-[#ffb845] hover:text-gray-600";

  return (
    <button
      onClick={handleRedirect}
      className={`${buttonStyles} ${transitionStyles} ${hoverStyles}`}
    >
      Learn More
    </button>
  );
};

export default CustomButton;
