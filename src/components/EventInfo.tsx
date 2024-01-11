import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { EventInfoProps } from "../constants/types";

import { fadeIn } from "../utils/motion";

const EventInfo = ({
  big_event,
  big_pictures,
  professional_event,
  social_event,
}: EventInfoProps) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("show"); // Use 'show' instead of 'visible'
  }, [controls]);

  const renderBigEvent = () => {
    if (big_event) {
      return (
        <div className="md:mt-8 md:mx-24 md:p-6 mt-4 mx-8 rounded-md">
          {/* Card Title */}
          <div className="bg-[#ffc572] flex items-center">
            {/* Image */}
            <div className="w-1/4 md:mr-4 mr-2">
              <img
                src="https://static.wixstatic.com/media/39a6d4_6a70cc781015426a80b4338018137294~mv2.jpg/v1/fill/w_636,h_672,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/39a6d4_6a70cc781015426a80b4338018137294~mv2.jpg"
                alt="Big Event"
                className="w-3/4 h-3/4 rounded-sm"
              />
            </div>

            {/* Text content (approximately 3/4 of the width) */}
            <motion.div
              initial="hidden"
              animate={controls}
              variants={fadeIn("down", "in", 0, 0.7)}
              className="w-3/4"
            >
              <h2 className="md:text-4xl text-xl font-bold md:mb-4">
                Big Semester Event
              </h2>
              <p className="md:text-lg text-sm hidden sm:block font-base md:mr-12">
                Every semester we have a big event spanning multiple weeks.
              </p>
            </motion.div>
          </div>

          {/* Content and Pictures */}
          <div className="bg-[#fff8ee] md:pt-4 md:pb-4 pt-2 pb-2">
            {/* Check if there is a big picture available */}
            {big_pictures && big_pictures.length > 0 && (
              <div className="mt-8 flex items-center justify-center">
                <img
                  src={big_pictures[0].image}
                  alt={big_pictures[0].name}
                  className="md:w-[464px] md:h-[300px] w-[348px] h-[225px] mb-4 rounded-md"
                />
              </div>
            )}

            <motion.h2
              initial="hidden"
              animate={controls}
              variants={fadeIn("down", "in", 0, 0.7)}
              className="text-center font-medium md:text-2xl text-xl mb-4"
            >
              {big_event}
            </motion.h2>
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

  const renderProfessionalEvent = () => {
    if (professional_event) {
      return (
        <div className="md:mt-8 md:mx-24 md:p-6 mt-4 mx-8 rounded-md">
          {/* Card Title */}
          <div className="bg-[#ffc572] flex items-center">
            {/* Image */}
            <div className="w-1/4 mr-4">
              <img
                src="https://static.wixstatic.com/media/22c249_63f3d0822dbb4e24ac4cb9dcca674b9f~mv2.jpg/v1/fill/w_636,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/22c249_63f3d0822dbb4e24ac4cb9dcca674b9f~mv2.jpg"
                alt="Professional Event"
                className="w-3/4 h-3/4 rounded-sm"
              />
            </div>

            {/* Text content (approximately 3/4 of the width) */}
            <motion.div
              initial="hidden"
              animate={controls}
              variants={fadeIn("down", "in", 0, 0.7)}
              className="w-3/4"
            >
              <h2 className="md:text-4xl text-xl font-bold md:mb-4">
                Professional Event
              </h2>
              <p className="md:text-lg text-sm hidden sm:block font-base md:mr-12">
                We host various professional events throughout the semester,
                including career panels, guest speakers and helpful workshops!
              </p>
            </motion.div>
          </div>

          {/* Content and Images */}
          <div className="bg-[#fff8ee] md:pt-12 md:pb-12 md:py-12 md:px-12 pt-6 pb-6 py-6 px-6 flex md:flex-row flex-col items-center justify-center">
            {/* Professional Event Image 1 */}
            <div className="flex flex-col items-center md:mt-8 mt-4 mb-4">
              <div className="md:mr-24">
                <img
                  src={professional_event[0].image}
                  alt={professional_event[0].name}
                  className="md:w-[350px] md:h-[350px] w-[300px] h-[300px] object-cover rounded-md mb-2" // Use object-cover to maintain aspect ratio
                />
              </div>

              {/* Professional Event Title 1 */}
              <motion.div
                initial="hidden"
                animate={controls}
                variants={fadeIn("down", "in", 0, 0.7)}
                className="md:mr-24"
              >
                <h3 className="md:text-2xl text-lg font-medium">
                  {professional_event[0].name}
                </h3>
              </motion.div>
            </div>

            {/* Professional Event Image 2 */}
            <div className="flex flex-col items-center md:mt-8 mt-4 mb-4">
              <div className="md:ml-24">
                <img
                  src={professional_event[1].image}
                  alt={professional_event[1].name}
                  className="md:w-[350px] md:h-[350px] w-[300px] h-[300px] object-cover rounded-md mb-2" // Use object-cover to maintain aspect ratio
                />
              </div>

              {/* Professional Event Title 2 */}
              <motion.div
                initial="hidden"
                animate={controls}
                variants={fadeIn("down", "in", 0, 0.7)}
                className="md:ml-24"
              >
                <h3 className="md:text-2xl text-lg font-medium">
                  {professional_event[1].name}
                </h3>
              </motion.div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

  const renderSocialEvent = () => {
    if (social_event) {
      return (
        <div className="md:mt-8 md:mx-24 md:p-6 mt-4 mx-8 rounded-md">
          {/* Card Title */}
          <div className="bg-[#ffc572] flex items-center">
            {/* Image */}
            <div className="w-1/4 mr-4">
              <img
                src="https://static.wixstatic.com/media/22c249_902db03e8ee14d66bd50de8218939e0d~mv2.jpg/v1/fill/w_636,h_634,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/22c249_902db03e8ee14d66bd50de8218939e0d~mv2.jpg"
                alt="Social Event"
                className="w-3/4 h-3/4 rounded-sm"
              />
            </div>

            {/* Text content (approximately 3/4 of the width) */}
            <motion.div
              initial="hidden"
              animate={controls}
              variants={fadeIn("down", "in", 0, 0.7)}
              className="w-3/4"
            >
              <h2 className="md:text-4xl text-xl font-bold md:mb-4">
                Social Event
              </h2>
              <p className="md:text-lg text-sm hidden sm:block font-base md:mr-12">
                We want our club members to not only develop professionally but
                also to meet and socialize with other club members!
              </p>
            </motion.div>
          </div>

          {/* Content and Images */}
          <div className="bg-[#fff8ee] md:pt-12 md:pb-12 md:py-12 md:px-12 pt-6 pb-6 py-6 px-6 flex md:flex-row flex-col items-center justify-center">
            {/* Professional Event Image 0 */}
            <div className="flex flex-col items-center md:mt-8 md:mb-4 mt-4 mb-2">
              <div className="md:mr-24">
                <img
                  src={social_event[0].images[0].image}
                  alt={social_event[0].images[0].image}
                  className="w-[300px] h-[300px] object-cover rounded-md mb-2 object-cover" // Use object-cover to maintain aspect ratio
                />
              </div>

              {/* Professional Event Title 1 */}
              <motion.div
                initial="hidden"
                animate={controls}
                variants={fadeIn("down", "in", 0, 0.7)}
                className="md:mr-24"
              >
                <h3 className="text-xl font-medium">{social_event[0].name}</h3>
              </motion.div>
            </div>

            {/* Professional Event Image 1 */}
            <div className="flex flex-col items-center md:mt-8 md:mb-4 mt-4 mb-2">
              <div className="md:mr-24">
                <img
                  src={social_event[1].images[0].image}
                  alt={social_event[1].images[0].image}
                  className="w-[300px] h-[300px] object-cover rounded-md mb-2 object-cover" // Use object-cover to maintain aspect ratio
                />
              </div>

              {/* Professional Event Title 1 */}
              <motion.div
                initial="hidden"
                animate={controls}
                variants={fadeIn("down", "in", 0, 0.7)}
                className="md:mr-24"
              >
                <h3 className="text-xl font-medium">{social_event[1].name}</h3>
              </motion.div>
            </div>

            {/* Professional Event Image 2 */}
            <div className="flex flex-col items-center md:mt-8 md:mb-4 mt-4 mb-2">
              <div className="md:mr-24">
                <img
                  src={social_event[2].images[0].image}
                  alt={social_event[2].images[0].image}
                  className="w-[300px] h-[300px] object-cover rounded-md mb-2 object-cover" // Use object-cover to maintain aspect ratio
                />
              </div>

              {/* Professional Event Title 2 */}
              <motion.div
                initial="hidden"
                animate={controls}
                variants={fadeIn("down", "in", 0, 0.7)}
                className="md:mr-24"
              >
                <h3 className="text-xl font-medium word-wrap">
                  {social_event[2].name}
                </h3>
              </motion.div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="mt-8">
      {renderBigEvent()}
      {renderProfessionalEvent()}
      {renderSocialEvent()}
    </div>
  );
};

export default EventInfo;
