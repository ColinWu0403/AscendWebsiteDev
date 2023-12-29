import React from "react";
import { CustomButton } from "../components";

const About = () => {
  return (
    <div className="bg-[#f2f2f2] py-16 text-[#686768]">
      <div className="container mx-auto">
        <h1 className="text-[#f09400] text-4xl font-medium text-center mb-4 border-b-2 border-[#f09400] pb-1 ">
          Who We Are
        </h1>

        <p className="text-center mx-auto max-w-4xl">
          Ascend is the largest Pan-Asian business professional membership
          organization in North America.
          <br />
          <br />
          Our mission is to drive workplace and societal impact by developing
          and elevating all Asian and Pacific Island (API) business leaders and
          empowering them to become catalysts for change.
          <br />
          <br />
          Ascend Purdue Chapter was initiated by a group of Purdue students in
          the summer of 2012. We focus on providing professional development and
          networking opportunities for students of all backgrounds and majors at
          Purdue University.
        </p>

        <div className="flex justify-center mt-8">
          <CustomButton />
        </div>
      </div>
    </div>
  );
};

export default About;
