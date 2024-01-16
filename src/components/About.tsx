import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { cardData } from "../constants";
import { fadeIn, fadeInFromTopVariants } from "../utils/motion";

const About = () => {
  return (
    <div className="">
      <CoreValues />
    </div>
  );
};

const CoreValues = () => {
  return (
    <div className="bg-[#ffffff] py-16 text-[#686768]">
      <div className="container mx-auto">
        <div className="text-center">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInFromTopVariants}
            transition={{ duration: 0.5 }}
            className="text-[#f09400] text-4xl font-medium mb-4 relative inline-block"
          >
            Our Core Values
            <span className="block w-12 h-1 bg-[#f09400] mx-auto mt-2 font-bold mb-4"></span>
          </motion.h1>
        </div>

        <div className="justify-center flex">
          {/* Map through cardData and render each CoreValuesCard */}
          {cardData.map((data, index) => (
            <CoreValuesCard key={index} {...data} />
          ))}
        </div>
      </div>
    </div>
  );
};

const CoreValuesCard = ({
  image,
  headtext,
  bodytext,
}: {
  image: string;
  headtext: string;
  bodytext: string;
}) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("show"); // Use 'show' instead of 'visible'
  }, [controls]);

  return (
    <div className="bg-[#fff8ee] p-6 rounded-lg shadow-md max-w-[300px] w-full mx-2">
      {/* Image */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInFromTopVariants}
        transition={{ duration: 0.5 }}
        className="flex justify-center mt-4 mb-4"
      >
        <img
          src={image}
          alt="Card Image"
          className="justify-center mb-4 md:w-16 md:h-16 w-12 h-12 object-cover"
        />
      </motion.div>

      {/* Text */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={fadeIn("down", "in", 0, 0.7)}
      >
        {/* Heading Text */}
        <h2 className="text-center md:text-xl text-med font-bold mb-2">
          {headtext}
        </h2>

        {/* Body Text */}
        <p className="text-center md:text-base leading-[1.5] text-xs md:h-40 h-55 overflow-hidden">
          {bodytext.split("\n").map((item, index) => (
            <React.Fragment key={index}>
              {item}
              <br />
            </React.Fragment>
          ))}
        </p>
      </motion.div>
    </div>
  );
};

export default About;
