import { useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import { eventData } from "../constants";
import EventInfo from "./EventInfo";
import { fadeIn, fadeInFromTopVariants } from "../utils/motion";
import { socialEvent } from "../constants/types";

const Events = () => {
  const [selectedSemester, setSelectedSemester] = useState(
    eventData[0].semester
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSemesterChange = (semester: string) => {
    setSelectedSemester(semester);
    setIsDropdownOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const selectedEventData = eventData.find(
    (event) => event.semester === selectedSemester
  );

  const controls = useAnimation();

  useEffect(() => {
    controls.start("show"); // Use 'show' instead of 'visible'
  }, [controls]);

  const { big_event, big_pictures, professional_event, social_event } =
    selectedEventData || {};

  const defaultSocialEvent: socialEvent[] = [
    { name: "", images: [{ name: "", image: "" }] },
  ];

  const buttonStyles =
    "w-[140px] px-3 py-2 border border-[#d4d4d4] rounded-md font-medium text-[#ffffff] shadow-sm focus:outline-none focus:ring-2 focus:bg-[#f09400] focus:ring-[#f09400] focus:border-transparent";

  return (
    <div className="bg-[#ffffff] py-16 text-[#686768]">
      <div className="container mx-auto max-w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInFromTopVariants}
          transition={{ duration: 0.3 }}
          className="text-center mt-8 mb-4"
        >
          <h1 className="text-[#f09400] text-5xl font-medium mb-4 relative inline-block">
            {selectedSemester} Events
            <span className="block w-12 h-1 bg-[#f09400] mx-auto mt-2 font-bold mb-4"></span>
          </h1>
        </motion.div>

        {/* Dropdown menu */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeIn("down", "in", 0, 0.5)}
          className="mb-4 flex flex-row items-center justify-center"
        >
          <label
            htmlFor="semester"
            className="block text-[#686768] text-2xl font-medium mb-2 mr-4"
          >
            Select Semester:
          </label>

          {/* Dropdown Button */}
          <div className="mb-4 relative inline-block mt-3" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`${buttonStyles} ${
                isDropdownOpen ? "bg-[#c97c00]" : "bg-[#f09400]"
              }`}
            >
              {selectedSemester} <span className="ml-2">&#9662;</span>
            </button>

            {isDropdownOpen && (
              <div className="w-[140px] absolute mt-2 bg-white border border-gray-300 rounded-md shadow-md">
                {eventData.map((event) => (
                  <button
                    key={event.semester}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
                    onClick={() => handleSemesterChange(event.semester)}
                    type="button" // Add type attribute
                  >
                    {event.semester}
                  </button>
                ))}
              </div>
            )}
          </div>
        </motion.div>

        {/* Menu data */}

        <EventInfo
          big_event={big_event || "Default Big Event"}
          big_pictures={big_pictures || []}
          professional_event={professional_event || []}
          social_event={social_event || defaultSocialEvent}
        />
      </div>
    </div>
  );
};

export default Events;
