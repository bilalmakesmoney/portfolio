"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
  textEnter: () => void;
  textLeave: () => void;
}

const You: React.FC<HeroProps> = ({ textEnter, textLeave }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if elements exist before animating
    const listItems = sectionRef.current?.querySelectorAll("li");
    const heading = sectionRef.current?.querySelector("h1");

    if (listItems) {
      gsap.from(listItems, {
        opacity: 0,
        y: 20,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }

    if (heading) {
      gsap.from(heading, {
        opacity: 0,
        y: -20,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });
    }
  }, []);

  return (
    <div
      ref={sectionRef}
      className="py-20 w-full flex flex-col justify-center px-4 sm:px-8 lg:px-20"
    >
      <h1
        className="text-center text-[36px] sm:text-[48px] font-extrabold"
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
      >
        Is This <span className="highlight">You?</span>🫵
      </h1>

      <ul className="grid grid-cols-1 gap-6 my-12 w-full place-items-center">
        <li
          className="text-lg sm:text-xl md:text-left before:content-['❌'] before:mx-2 before:text-md text-center"
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          Struggling to make your website{" "}
          <span className="highlight font-bold">
            visually appealing and user-friendly?
          </span>
        </li>
        <li
          className="text-lg sm:text-xl md:text-left before:content-['❌'] before:mx-2 before:text-md text-center"
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          Overwhelmed by the{" "}
          <span className="highlight font-bold">technical aspects</span> of web
          design?
        </li>
        <li
          className="text-lg sm:text-xl md:text-left before:content-['❌'] before:mx-2 before:text-md text-center"
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          Aspiring to position your website as{" "}
          <span className="highlight font-bold">top-tier</span> in your
          industry?
        </li>
        <li
          className="text-lg sm:text-xl md:text-left before:content-['❌'] before:mx-2 before:text-md text-center"
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          Struggling to keep up with the{" "}
          <span className="highlight font-bold">latest web design trends</span>{" "}
          and technologies?
        </li>
      </ul>
    </div>
  );
};

export default You;
