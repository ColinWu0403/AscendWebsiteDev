import React from "react";
import { upcomingData } from "../constants";

const Upcoming = () => {
  return (
    <div className="bg-[#fff8ee] py-16 text-[#686768]">
      <div className="container mx-auto">
        <div className="text-center">
          <h1 className="text-[#f09400] text-4xl font-medium mb-4 relative inline-block">
            Upcoming Events
            <span className="block w-12 h-1 bg-[#f09400] mx-auto mt-2 font-bold mb-4"></span>
          </h1>
        </div>

        <div className="justify-center items-center flex flex-col">
          {/* Map through cardData and render each UpcomingCard */}
          {upcomingData.map((data, index) => (
            <UpcomingCard key={index} {...data} />
          ))}
        </div>
      </div>
    </div>
  );
};

const UpcomingCard = ({
  event_title,
  description,
  date,
  time,
  location,
  image,
}: {
  event_title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image: string;
}) => {
  return (
    <div className="bg-[#ffe1b7] p-6 shadow-md flex max-w-[800px] w-[800px] mb-4">
      {/* Left side (Text content) */}
      <div className="flex flex-col pr-4">
        {/* Title */}
        <h2 className="text-[#474747] text-3xl font-bold mb-4">
          {event_title}
        </h2>

        {/* Description */}
        <div className="mb-auto">
          <p className="text-med mb-4 overflow-hidden h-20">{description}</p>
        </div>

        {/* Date, Time, Location */}
        <div className="text-[#727272] text-med">
          <p>Date: {date}</p>
          <p>Time: {time}</p>
          <p>Location: {location}</p>
        </div>
      </div>

      {/* Right side (Image) */}
      <img
        src={image}
        alt="Event Image"
        className="w-64 h-64 object-cover ml-4 rounded-sm ml-auto"
      />
    </div>
  );
};

export default Upcoming;
