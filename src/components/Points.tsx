import { motion } from "framer-motion";

import { fadeInFromTopVariants } from "../utils/motion";

const Points = () => {
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
          <br />
          <br />

          <img
            alt="under construction"
            className="mx-auto md:w-1/3 md:h-1/3 h-3/4 w-3/4"
            src="https://smiledesigndentalgroup.com/wp-content/uploads/2022/11/pngfind.com-website-under-construction-png-6238449.png"
          />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </motion.div>
      </div>
    </div>
  );
};

export default Points;
