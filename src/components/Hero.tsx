import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { AscendLogo } from "../assets";
import { fadeIn, fadeInFromTopVariants } from "../utils/motion";
import { CustomButton } from "../components";

const Hero = ({ backgroundImage }: { backgroundImage: string }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("show"); // Use 'show' instead of 'visible'
  }, [controls]);

  return (
    <div
      className="bg-cover bg-center bg-fixed h-screen md:w-full w-screen flex flex-col justify-center items-center text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        textShadow: "4px 4px 8px rgba(2.5, 0, 0, 0.5)",
      }}
    >
      <img
        alt="logo image"
        src={AscendLogo}
        className="justify-center items-center mb-2 md:w-1/4 md:h-1/4 w-1/2 h-1/2 absolute md:top-[-150px] top-[-550px] md:left-1/2 transform md:-translate-x-1/2" // Center the image horizontally on smaller screens
      />
      <motion.p
        initial="hidden"
        animate={controls}
        variants={fadeIn("down", "in", 0, 0.5)}
        className="absolute text-center mx-auto max-w-4xl sm:text-base text-med leading-[1.5] md:top-[320px] top-[290px] md:ml-4 md:mr-4 ml-8 mr-8"
      >
        Ascend is the largest Pan-Asian business professional membership
        organization in North America.
        <br />
        <br />
        Our mission is to drive workplace and societal impact by developing and
        elevating all Asian and Pacific Island (API) business leaders and
        empowering them to become catalysts for change.
        <br />
        <br />
        Ascend Purdue Chapter was initiated by a group of Purdue students in the
        summer of 2012. We focus on providing professional development and
        networking opportunities for students of all backgrounds and majors at
        Purdue University.
      </motion.p>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInFromTopVariants}
        transition={{ duration: 0.7 }}
        className="justify-center absolute top-[630px] md:top-[560px]"
      >
        <CustomButton
          button_text="Learn More"
          link="https://www.ascendleadership.org/ourstory"
          color_styles="bg-[#efa914]"
          hover_color="hover:bg-[#ffb845]"
        />
      </motion.div>
      {/* <h1 className="text-5xl font-bold brightness-200">{largeText}</h1> */}
    </div>
  );
};

export default Hero;
