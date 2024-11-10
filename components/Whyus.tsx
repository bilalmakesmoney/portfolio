import { FaHandshake } from "react-icons/fa";
import { MdFitScreen } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface HeroProps {
  textEnter: () => void;
  textLeave: () => void;
}

const Whyus: React.FC<HeroProps> = ({ textEnter, textLeave }) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    // Initialize GSAP animation for the title
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(entry.target, {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power4.out",
            });
            observer.unobserve(entry.target); // Stop observing once the animation is triggered
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observe the title
    if (headingRef.current) {
      gsap.set(headingRef.current, { opacity: 0, y: 50 }); // Initial hidden state
      observer.observe(headingRef.current);
    }

    // Initialize GSAP stagger animation for the cards
    const cards = sectionRef.current?.querySelectorAll(".whyus-item");

    // Type guard to ensure `cards` is not undefined
    if (cards) {
      const staggerObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.to(cards, {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.3, // Staggered animation with a delay of 0.3s
                ease: "power4.out",
              });
              observer.unobserve(entry.target); // Stop observing once the animation is triggered
            }
          });
        },
        { threshold: 0.5 }
      );

      // Observe each card
      cards.forEach((card) => {
        gsap.set(card, { opacity: 0, y: 50 }); // Initial hidden state
        staggerObserver.observe(card);
      });
    }

    // Clean up the observers when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="why-us py-20 px-4 sm:px-8 md:px-16 lg:px-40 w-full flex flex-col justify-center"
    >
      <h1
        ref={headingRef}
        className="font-extrabold text-[32px] sm:text-[40px] md:text-[48px] text-center"
      >
        <span onMouseEnter={textEnter} onMouseLeave={textLeave}>
          Why Choose
        </span>{" "}
        <span
          className="highlight"
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          Us?
        </span>
        <span onMouseEnter={textEnter} onMouseLeave={textLeave}>
          🤔
        </span>
      </h1>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-16">
        <div className="whyus-item bg-[#181a20] rounded-xl px-6 py-8 flex flex-col items-center">
          <FaHandshake
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="text-4xl sm:text-5xl text-white"
          />
          <h1
            className="font-bold text-lg sm:text-xl my-2 text-center"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            You Can Trust
          </h1>
          <p
            className="text-center text-sm sm:text-base"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            Delivering consistent results with transparency, reliability, and a
            dedication to your vision.
          </p>
        </div>
        <div className="whyus-item bg-[#181a20] rounded-xl px-6 py-8 flex flex-col items-center">
          <MdFitScreen
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="text-4xl sm:text-5xl text-white"
          />
          <h1
            className="font-bold text-lg sm:text-xl my-2 text-center"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            Tailored To Fit Your Needs
          </h1>
          <p
            className="text-center text-sm sm:text-base"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            Every project is customized to reflect your unique vision, ensuring
            a perfect fit every time.
          </p>
        </div>
        <div className="whyus-item bg-[#181a20] rounded-xl px-6 py-8 flex flex-col items-center">
          <FaStar
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="text-4xl sm:text-5xl text-white"
          />
          <h1
            className="font-bold text-lg sm:text-xl my-2 text-center"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            Honest And Transparent
          </h1>
          <p
            className="text-center text-sm sm:text-base"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            Your trust matters to us, which is why we maintain openness in all
            our processes and decisions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
