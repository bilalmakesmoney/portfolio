import { Link } from "react-scroll";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

// Define the props for Header
interface HeroProps {
  textEnter: () => void;
  textLeave: () => void;
  linkEnter: () => void;
  linkLeave: () => void;
}

const Header: React.FC<HeroProps> = ({
  textEnter,
  textLeave,
  linkEnter,
  linkLeave,
}) => {
  const links = [
    {
      name: "Home",
      to: "home", // Replace with actual section IDs
    },
    {
      name: "Why Us?",
      to: "why-us", // Replace with actual section IDs
    },
    {
      name: "My Work",
      to: "work", // Replace with actual section IDs
    },
    {
      name: "Contact",
      to: "", // No scroll target, handled by external link
    },
  ];

  // Create a ref array to hold each wrapper element
  const linkRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Apply staggered animation to the wrapper divs
    gsap.from(linkRefs.current, {
      opacity: 0,
      y: 20,
      stagger: 0.3, // each element appears with 0.3s delay
      duration: 0.5, // each animation lasts 1 second
      ease: "power2.out",
    });
  }, []);

  // Helper function to assign refs correctly
  const setLinkRef = (el: HTMLDivElement | null, index: number) => {
    if (el) linkRefs.current[index] = el;
  };

  return (
    <div className="w-full bg-background sticky top-0 left-0 z-50 py-7 px-4 sm:px-8 md:px-40 flex flex-wrap justify-center sm:justify-between items-center">
      {links.map((text, index) => (
        <div
          key={text.name}
          ref={(el) => setLinkRef(el, index)} // Use helper function to assign ref
          className="inline-block mb-4 sm:mb-0 mx-2" // Added margin for spacing
        >
          {text.name === "Contact" ? (
            <a
              href="https://x.com/bilalmakesmoney/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={linkEnter}
              onMouseLeave={linkLeave}
              className={`py-2.5 px-4 rounded-full cursor-pointer transition-all duration-300 ease-linear 
                border border-white hover:bg-[#fff] hover:text-[#0e1015] text-center hidden md:block`}
            >
              {text.name}
            </a>
          ) : (
            <Link
              to={text.to} // Use 'to' instead of 'href'
              onMouseEnter={index === 3 ? linkEnter : textEnter}
              onMouseLeave={index === 3 ? linkLeave : textLeave}
              spy={true}
              smooth={true}
              offset={text.name === "Home" ? -200 : 0}
              activeClass="active"
              duration={500}
              className={`py-2.5 px-4 rounded-full cursor-pointer transition-all duration-300 ease-linear
                ${
                  index === 3
                    ? "border border-white hover:bg-[#fff] hover:text-[#0e1015]"
                    : "hover:bg-[#fff] hover:text-[#0e1015]"
                }
                text-center`}
            >
              {text.name}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default Header;
