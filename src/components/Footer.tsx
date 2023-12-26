import React from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";

const Footer = () => {
  return (
    <footer
      // className={`${styles.paddingX} w-full flex item-center justify-center py-5 bottom-0 bg-primary`}
      className={`${styles.paddingX} w-full flex item-center justify-center py-5 fixed bottom-0 z-20 bg-primary pl-5 pr-5`}
    >
      <div className="justify-center">
        {/* <ul className="list-none items-center justify-center flex mb-8 mx-0"> */}
        {/* <li className="mx-5 my-0">
            <a href="https://www.linkedin.com/in/colinwu0403/" target="_blank">
              <img alt="linkedIn" src="linkedin.svg" className="w-[50px] h-[50px]" />
            </a>
          </li>
          <li className="mx-5 my-0">
            <a href="https://github.com/ColinWu0403" target="_blank">
              <img src="github.svg" className="w-[50px] h-[50px]" />
            </a>
          </li> */}
        {/* <li className="mx-5 my-0">
            <a href="https://github.com/ColinWu0403" target="_blank">
              <img src="github.svg" className="w-[50px] h-[50px]" />
            </a>
          </li>
          <li className="mx-5 my-0">
            <a href="https://github.com/ColinWu0403" target="_blank">
              <img src="github.svg" className="w-[50px] h-[50px]" />
            </a>
          </li>
          <li className="mx-5 my-0">
            <a href="https://github.com/ColinWu0403" target="_blank">
              <img src="github.svg" className="w-[50px] h-[50px]" />
            </a>
          </li> */}
        {/* </ul> */}
        <p className="items-center justify-center flex">
          Copyright &copy; 2023 by Ascend Purdue Chapter. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
