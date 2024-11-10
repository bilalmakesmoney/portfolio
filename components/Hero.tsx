import React from "react";

// Define props for Hero component
interface HeroProps {
  textEnter: () => void;
  textLeave: () => void;
  linkEnter: () => void;
  linkLeave: () => void;
}

const Hero: React.FC<HeroProps> = ({
  textEnter,
  textLeave,
  linkEnter,
  linkLeave,
}) => {
  return (
    <div className="home w-full my-16 flex flex-col justify-center items-center px-4 sm:px-8 md:px-16">
      <h1 className="font-extrabold text-center text-[32px] sm:text-[48px] md:text-[60px] leading-snug">
        <span
          className="highlight"
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          We Transform Your Designs
        </span>
        <br />
        <span onMouseEnter={textEnter} onMouseLeave={textLeave}>
          into Captivating Visual
        </span>
        <br />
        <span onMouseEnter={textEnter} onMouseLeave={textLeave}>
          Experiences 🔥
        </span>
      </h1>
      <p
        className="text-center text-sm sm:text-md mt-3"
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
      >
        Bringing your creative ideas to life with stunning animations, immersive
        graphics, and seamless user experiences.
      </p>
      <a
        href="https://x.com/Bilal1864255/"
        target="_blank"
        rel="noopener noreferrer"
        className="py-2.5 mt-4 px-6 sm:px-8 rounded-full border border-white hover:bg-[#fff] hover:text-[#0e1015] transition-all ease-linear cursor-pointer"
        onMouseEnter={linkEnter}
        onMouseLeave={linkLeave}
      >
        Get Started
      </a>
    </div>
  );
};

export default Hero;
