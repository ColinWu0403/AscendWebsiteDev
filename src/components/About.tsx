import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import { CustomButton } from "../components";
import { cardData } from "../constants";
import { fadeIn, fadeInFromTopVariants } from "../utils/motion";

const About = () => {
  return (
    <div className="">
      <WhoWeAre />
      <CoreValues />
    </div>
  );
};

const WhoWeAre = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("show"); // Use 'show' instead of 'visible'
  }, [controls]);

  return (
    <>
      <div className="bg-[#e7e7e7] py-16 text-[#686768]">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInFromTopVariants}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <h1 className="text-[#f09400] text-4xl font-medium mb-4 relative inline-block">
              Who We Are
              <span className="block w-12 h-1 bg-[#f09400] mx-auto mt-2 font-bold mb-4"></span>
            </h1>
          </motion.div>

          <motion.p
            initial="hidden"
            animate={controls}
            variants={fadeIn("down", "in", 0, 0.5)}
            className="text-center mx-auto max-w-4xl text-base leading-[1.5]"
          >
            Ascend is the largest Pan-Asian business professional membership
            organization in North America.
            <br />
            <br />
            Our mission is to drive workplace and societal impact by developing
            and elevating all Asian and Pacific Island (API) business leaders
            and empowering them to become catalysts for change.
            <br />
            <br />
            Ascend Purdue Chapter was initiated by a group of Purdue students in
            the summer of 2012. We focus on providing professional development
            and networking opportunities for students of all backgrounds and
            majors at Purdue University.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInFromTopVariants}
            transition={{ duration: 0.7 }}
            className="flex justify-center mt-8"
          >
            <CustomButton
              button_text={"Learn More"}
              link={"https://www.ascendleadership.org/ourstory"}
            />
          </motion.div>
        </div>
      </div>
    </>
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
