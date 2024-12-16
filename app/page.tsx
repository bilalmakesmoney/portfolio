"use client";

import Cursor from "@/components/Cursor";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Whyus from "@/components/Whyus";
import Work from "@/components/Work";
import You from "@/components/You";
import { useState } from "react";

const Home = () => {
  const [isMask, setIsMask] = useState("default");
  const textEnter = () => setIsMask("text");
  const textLeave = () => setIsMask("default");
  const linkEnter = () => setIsMask("link");
  const linkLeave = () => setIsMask("default");
  return (
    <div className="w-screen min-h-screen">
      <Header
        textEnter={textEnter}
        textLeave={textLeave}
        linkEnter={linkEnter}
        linkLeave={linkLeave}
      />
      <Hero
        textEnter={textEnter}
        textLeave={textLeave}
        linkEnter={linkEnter}
        linkLeave={linkLeave}
      />
      <You textEnter={textEnter} textLeave={textLeave} />
      <Whyus textEnter={textEnter} textLeave={textLeave} />
      <Work textEnter={textEnter} textLeave={textLeave} />
      <Footer
        textEnter={textEnter}
        textLeave={textLeave}
        linkEnter={linkEnter}
        linkLeave={linkLeave}
      />
      <Cursor isMask={isMask} setIsMask={setIsMask} />
    </div>
  );
};
export default Home;
