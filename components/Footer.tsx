import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

interface HeroProps {
  textEnter: () => void;
  textLeave: () => void;
  linkEnter: () => void;
  linkLeave: () => void;
}

const Footer: React.FC<HeroProps> = ({
  textEnter,
  textLeave,
  linkEnter,
  linkLeave,
}) => {
  return (
    <div className="flex flex-col w-full items-center footer gap-6">
      <span
        className="text-center text-lg mt-10"
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
      >
        Bilalcodes
      </span>
      <div className="flex justify-center items-center gap-4">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://x.com/Bilal1864255/"
          onMouseEnter={linkEnter}
          onMouseLeave={linkLeave}
        >
          <BsTwitterX className="cursor-pointer" size={30} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/muhammad-bilal-b74bb5306/"
          onMouseEnter={linkEnter}
          onMouseLeave={linkLeave}
        >
          <FaLinkedinIn className="cursor-pointer" size={30} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/profile.php?id=61568428174359"
          onMouseEnter={linkEnter}
          onMouseLeave={linkLeave}
        >
          <FaFacebookF className="cursor-pointer" size={30} />
        </a>
      </div>
      <span
        className="text-lg mb-12"
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
      >
        Designed by bilalcodes
      </span>
    </div>
  );
};
export default Footer;
