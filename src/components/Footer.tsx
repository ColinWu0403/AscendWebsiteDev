import { styles } from "../styles";
import { instagram, linkedin, email, slack } from "../assets";

const Footer = () => {
  return (
    <footer
      className={`${styles.paddingX} w-full flex item-center justify-center py-5 z-20 bg-[#e48c17] pl-5 pr-5`}
    >
      <div className="justify-center">
        <ul className="list-none items-center justify-center flex mt-4 mb-8 mx-0">
          <li className="mx-5 my-0">
            <a
              href="https://www.linkedin.com/company/ascendpurdue/"
              target="_blank"
              rel="noopener"
            >
              <img
                alt="linkedIn"
                src={linkedin}
                className="w-[50px] h-[50px]"
              />
            </a>
          </li>
          <li className="mx-5 my-0">
            <a
              href="https://www.instagram.com/purdueascend/"
              target="_blank"
              rel="noopener"
            >
              <img
                alt="Instagram"
                src={instagram}
                className="w[45px] h-[45px]"
              />
            </a>
          </li>
          <li className="mx-5 my-0">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfihdP3Be8zHfJvpRo4NxZbWlajaeoMsH3FiV91NqrAzbIXxA/viewform"
              target="_blank"
              rel="noopener"
            >
              <img
                alt="Mailing List"
                src={email}
                className="w-[55px] h-[55px]"
              />
            </a>
          </li>
          <li className="mx-5 my-0">
            <a
              href="https://join.slack.com/t/purdueascend/shared_invite/zt-29r0oxclu-o7nqhLCsP2uc2mr6jVTx4A"
              target="_blank"
              rel="noopener"
            >
              <img alt="Slack" src={slack} className="w-[50px] h-[50px]" />
            </a>
          </li>
        </ul>
        <p className="items-center justify-center flex text-[#645d47] md:text-base text-med font-medium">
          Copyright &copy; 2023 by Ascend Purdue Chapter. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
