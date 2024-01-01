import React from "react";
import { boardData, officerData } from "../constants";

const Team = () => {
  return (
    <div className="bg-[#fff] py-16 text-[#686768]">
      <div className="container mx-auto max-w-full">
        <div className="text-center mt-8 mb-4">
          <h1 className="text-[#f09400] text-4xl font-medium mb-4 relative inline-block">
            Board Members
            <span className="block w-12 h-1 bg-[#f09400] mx-auto mt-2 font-bold mb-4"></span>
          </h1>
        </div>

        <div className="mb-4">
          {/* Map through cardData and render each TeamCard */}
          {boardData.map((data, index) => (
            <BoardCard key={index} {...data} />
          ))}
        </div>

        <div className="text-center">
          <h1 className="text-[#f09400] text-4xl font-medium mb-4 relative inline-block">
            Officers
            <span className="block w-12 h-1 bg-[#f09400] mx-auto mt-2 font-bold mb-4"></span>
          </h1>
        </div>

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
}) => {
  return (
    <div className="bg-[#ffe1b7] p-12 flex w-full">
      <div className="flex flex-row h-full w-screen">
        {/* Image with LinkedIn icon */}
        <img
          src={image}
          alt="Team Member Image"
          className="w-[250px] h-[250px] object-cover rounded-md mb-4"
        />

        {/* Text content */}
        <div className="ml-8">
          {/* Position */}
          <h2 className="text-3xl font-bold mb-2">{position}</h2>

          {/* Name */}
          <p className="text-xl font-medium mb-4">{name}</p>

          {/* Major, Hometown, Fun Fact */}
          <div className="mb-4">
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
          <p className="mb-2">{introduction}</p>

          {/* LinkedIn Link */}
          {linkedIn && (
            <a
              href={linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0077b5] hover:text-[#0e76a8] transition duration-300"
            >
              LinkedIn
            </a>
          )}
        </div>
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
}) => {
  return (
    <div className="bg-[#ffe1b7] p-12 flex w-full">
      <div className="flex flex-row h-full w-screen">
        {/* Image with LinkedIn icon */}
        <img
          src={image}
          alt="Team Member Image"
          className="w-[250px] h-[250px] object-cover rounded-md mb-4"
        />

        {/* Text content */}
        <div className="ml-8">
          {/* Position */}
          <h2 className="text-xl font-bold mb-2">{committee} Committee</h2>

          {/* Name */}
          <p className="font-bold mb-2">{name}</p>

          {/* Major, Hometown, Fun Fact */}
          <div className="mb-2">
            <p>Major: {major}</p>
            <p>Hometown: {hometown}</p>
            <p>Fun Fact: {fun_fact}</p>
          </div>

          {/* Introduction */}
          <p className="mb-2">{introduction}</p>

          {/* LinkedIn Link */}
          {linkedIn && (
            <a
              href={linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0077b5] hover:text-[#0e76a8] transition duration-300"
            >
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Team;
