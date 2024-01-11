import { useEffect } from "react";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { CustomButton } from "../components";
import { cardData } from "../constants";
import { fadeIn, fadeInFromTopVariants } from "../utils/motion";

const Join = () => {
  const controls = useAnimation();
  useEffect(() => {
    controls.start("show"); // Use 'show' instead of 'visible'
  }, [controls]);
  return (
    <div className="bg-[#fff] py-16 text-[#686768]">
      <div className="container mx-auto max-w-full">
        <div className="text-center mt-8 mb-4">
        <motion.p
            initial="hidden"
            animate={controls}
            variants={fadeIn("down", "in", 0, 0.5)}
            className="text-center mx-auto max-w-4xl text-base leading-[1.5]">
            <h1 className="text-[#f09400] text-4xl font-medium mb-4 relative inline-block">
            Join Ascend
            <span className="block w-12 h-1 bg-[#f09400] mx-auto mt-2 font-bold mb-4"></span>
          </h1>
        </motion.p>
          <motion.p
            initial="hidden"
            animate={controls}
            variants={fadeIn("down", "in", 0, 0.5)}
            className="text-center mx-auto max-w-4xl text-base leading-[1.5]">
              Joining is easy! Just attend one of our callouts or meetings and pay the dues.
          </motion.p>
          {/*probably add a button link or some information on dates for our meetings and callouts */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInFromTopVariants}
            transition={{ duration: 0.7 }}
            className="flex justify-center mt-8">
            <CustomButton
              button_text={"Venmo"}
              link={"https://venmo.com/u/Maryam-Shakil"}
              color_styles={"bg-[#008CFF]"}
              hover_color={"hover:bg-[#32C6E6]"}
            />
          </motion.div>
          <br></br>
          <motion.p
            initial="hidden"
            animate={controls}
            variants={fadeIn("down", "in", 0, 0.5)}
            className="text-center mx-auto max-w-4xl text-base leading-[1.5]">
            <h2 className="text-center md:text-xl text-med font-bold mb-2">
            Connect with us to stay in touch for updates and news.
            </h2>
            </motion.p>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInFromTopVariants}
            transition={{ duration: 0.7 }}
            className="flex justify-center mt-8">
            <CustomButton
              button_text={"Instagram"}
              link={"https://www.instagram.com/purdueascend/"}
              color_styles={"bg-[#d62976]"}
              hover_color={"hover:bg-[#962fbf]"}
            />
            <CustomButton
              button_text={"LinkedIn"}
              link={"https://www.linkedin.com/company/ascendpurdue/"}
              color_styles={"bg-[#0077b5]"}
              hover_color={"hover:bg-[##4B7FFA]"}
            />
            <CustomButton
              button_text={"Slack"}
              link={"https://purdueascend.slack.com/join/shared_invite/zt-29r0oxclu-o7nqhLCsP2uc2mr6jVTx4A#/shared-invite/email"}
              color_styles={"bg-[#4A154B]"}
              hover_color={"hover:bg-[#E01E5A]"}
            />
            <CustomButton
              button_text={"Email List"}
              link={"https://docs.google.com/forms/d/e/1FAIpQLSfihdP3Be8zHfJvpRo4NxZbWlajaeoMsH3FiV91NqrAzbIXxA/viewform"}
              color_styles={"bg-[#2ecc71]"}
              hover_color={"hover:bg-[#27ae60]"}
            />
          </motion.p>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          
          <div>

          </div>

        </div>


        {/* Add join button + other social media link */}
      </div>
    </div>
  );
};

export default Join;
