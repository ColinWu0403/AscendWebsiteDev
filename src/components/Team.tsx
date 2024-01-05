import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import { boardData, officerData } from "../constants";
import { fadeIn, fadeInFromTopVariants } from "../utils/motion";

const Team = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("show"); // Use 'show' instead of 'visible'
  }, [controls]);

  return (
    <div className="bg-[#fff] py-16 text-[#686768]">
      <div className="container mx-auto max-w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInFromTopVariants}
          transition={{ duration: 0.3 }}
          className="text-center mt-8 mb-4"
        >
          <h1 className="text-[#f09400] text-4xl font-medium mb-4 relative inline-block">
            Board Members
            <span className="block w-12 h-1 bg-[#f09400] mx-auto mt-2 font-bold mb-4"></span>
          </h1>
        </motion.div>

        <div className="mb-4">
          {/* Map through cardData and render each TeamCard */}
          {boardData.map((data, index) => (
            <BoardCard key={index} {...data} />
          ))}
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInFromTopVariants}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-[#f09400] text-4xl font-medium mb-4 relative inline-block">
            Officers
            <span className="block w-12 h-1 bg-[#f09400] mx-auto mt-2 font-bold mb-4"></span>
          </h1>
        </motion.div>

        <div className="mb-4">
          {/* Map through cardData and render each TeamCard */}
          {officerData.map((data, index) => (
            <OfficerCard key={index} {...data} />
          ))}
        </div>
      </div>
    </div>
  );
};

const BoardCard = ({
  position,
  name,
  major,
  hometown,
  fun_fact,
  introduction,
  image,
  linkedIn,
}: {
  position: string;
  name: string;
  major: string;
  hometown: string;
  fun_fact: string;
  introduction: string;
  image: string;
  linkedIn: string;
}) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("show"); // Use 'show' instead of 'visible'
  }, [controls]);

  return (
    <div className="bg-[#ffe1b7] p-12 flex w-full">
      <div className="flex flex-row h-full w-screen">
        {/* Image with LinkedIn icon */}
        <motion.img
          initial="hidden"
          animate={controls}
          variants={fadeIn("down", "in", 0, 0.5)}
          src={image}
          alt="Team Member Image"
          className="md:w-[250px] md:h-[250px] w-[187.5px] h-[187.5px] object-cover rounded-md mb-4"
        />

        {/* Text content */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeIn("down", "in", 0, 0.7)}
          className="ml-8"
        >
          {/* Position */}
          <h2 className="md:text-3xl text-2xl font-bold mb-2">{position}</h2>

          {/* Name */}
          <p className="md:text-xl text-lg font-medium mb-4">{name}</p>

          {/* Major, Hometown, Fun Fact */}
          <div className="mb-4 md:text-base text-med">
            <p className="mb-1">
              <span className="font-bold">Major:</span> {major}
            </p>
            <p className="mb-1">
              <span className="font-bold">Hometown:</span> {hometown}
            </p>
            <p className="mb-1">
              <span className="font-bold">Fun Fact:</span> {fun_fact}
            </p>
          </div>

          {/* Introduction */}
          <p className="mb-2 md:text-med text-sm">{introduction}</p>

          {/* LinkedIn Link */}
          {linkedIn && (
            <a
              href={linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#0e76a8] hover:text-[#26b9ff] transition duration-300"
            >
              LinkedIn
            </a>
          )}
        </motion.div>
      </div>
    </div>
  );
};

const OfficerCard = ({
  committee,
  name,
  major,
  hometown,
  fun_fact,
  introduction,
  image,
  linkedIn,
}: {
  committee: string;
  name: string;
  major: string;
  hometown: string;
  fun_fact: string;
  introduction: string;
  image: string;
  linkedIn: string;
}) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("show"); // Use 'show' instead of 'visible'
  }, [controls]);

  return (
    <div className="bg-[#ffe1b7] p-12 flex w-full">
      <div className="flex flex-row h-full w-screen">
        {/* Image with LinkedIn icon */}
        <motion.img
          initial="hidden"
          animate={controls}
          variants={fadeIn("down", "in", 0, 0.7)}
          src={image}
          alt="Team Member Image"
          className="md:w-[250px] md:h-[250px] w-[187.5px] h-[187.5px] object-cover rounded-md mb-4"
        />

        {/* Text content */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeIn("down", "in", 0, 0.7)}
          className="ml-8"
        >
          {/* Position */}
          <h2 className="md:text-3xl text-2xl font-bold mb-2">
            {committee} Committee
          </h2>

          {/* Name */}
          <p className="md:text-xl text-lg font-medium mb-4">{name}</p>

          {/* Major, Hometown, Fun Fact */}
          <div className="mb-4 md:text-base text-med">
            <p className="mb-1">
              <span className="font-bold">Major:</span> {major}
            </p>
            <p className="mb-1">
              <span className="font-bold">Hometown:</span> {hometown}
            </p>
            <p className="mb-1">
              <span className="font-bold">Fun Fact:</span> {fun_fact}
            </p>
          </div>

          {/* Introduction */}
          <p className="mb-2 md:text-med text-sm">{introduction}</p>

          {/* LinkedIn Link */}
          {linkedIn && (
            <a
              href={linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#0e76a8] hover:text-[#26b9ff] transition duration-300"
            >
              LinkedIn
            </a>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Team;
