"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FiArrowUpRight } from "react-icons/fi";

// Define props with TypeScript
interface CursorProps {
  isMask: string;
  setIsMask: React.Dispatch<React.SetStateAction<string>>;
}

const Cursor: React.FC<CursorProps> = ({ isMask, setIsMask }) => {
  // Add typing to refs
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const innerCursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          duration: 1,
          x: e.clientX - 33,
          y: e.clientY - 33,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("mousemove", onMouseMove);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`cursor fixed left-0 top-0 z-[100] bg-transparent border border-white rounded-full flex justify-center items-center pointer-events-none transition-all ${
        isMask === "text"
          ? "w-20 h-20 bg-white mix-blend-difference"
          : "w-10 h-10"
      }
       ${isMask === "link" ? "w-20 h-20 bg-white " : "w-10 h-10"}`}
    >
      {isMask === "link" ? (
        <FiArrowUpRight className="text-background font-extrabold w-12 h-12" />
      ) : (
        <></>
      )}
      <div
        ref={innerCursorRef}
        className={`inner-cursor rounded-full transition-all duration-[900] flex justify-center items-center ${
          isMask === "text"
            ? "w-10 h-10 border border-background mix-blend-difference"
            : "bg-white w-5 h-5"
        }
        ${isMask === "link" ? "w-10 h-10 bg-white hidden" : "w-5 h-5"}`}
      ></div>
    </div>
  );
};

export default Cursor;
