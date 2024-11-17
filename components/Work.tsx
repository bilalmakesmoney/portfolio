import Image from "next/image";

interface HeroProps {
  textEnter: () => void;
  textLeave: () => void;
  linkEnter: () => void;
  linkLeave: () => void;
}

const Work: React.FC<HeroProps> = ({
  textEnter,
  textLeave,
  linkEnter,
  linkLeave,
}) => {
  return (
    <div className="work px-4 sm:px-8 md:px-16 lg:px-40 py-10 w-full flex flex-col items-center">
      <h1
        className="font-extrabold text-[32px] sm:text-[40px] md:text-[48px] text-center"
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
      >
        My <span className="highlight">Work</span>😇
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 my-16">
        {/* Project 1 */}
        <div className="border-[0.5px] border-[#ffffff44] bg-[#181a20] rounded-t-2xl rounded-b-md overflow-hidden">
          <a
            href="https://neura-tan.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              onMouseEnter={linkEnter}
              onMouseLeave={linkLeave}
              src="/project1.png"
              alt="Neura Project"
              layout="intrinsic" // Ensures natural aspect ratio
              width={500}
              height={300}
              className="rounded-t-2xl"
            />
          </a>
          <h1
            className="text-lg sm:text-xl font-semibold text-center my-3"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            Neura1
          </h1>
        </div>
        {/* Project 2 */}
        <div className="border-[0.5px] border-[#ffffff44] bg-[#181a20] rounded-t-2xl rounded-b-md overflow-hidden">
          <a
            href="https://treatzy.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              onMouseEnter={linkEnter}
              onMouseLeave={linkLeave}
              src="/project2.png"
              alt="Treatzy Project"
              layout="intrinsic"
              width={500}
              height={300}
              className="rounded-t-2xl"
            />
          </a>
          <h1
            className="text-lg sm:text-xl font-semibold text-center my-3"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            Treatzy
          </h1>
        </div>
        {/* Project 3 */}
        <div className="border-[0.5px] border-[#ffffff44] bg-[#181a20] rounded-t-2xl rounded-b-md overflow-hidden">
          <a
            href="https://foody-psi-six.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              onMouseEnter={linkEnter}
              onMouseLeave={linkLeave}
              src="/project3.png"
              alt="Foody Project"
              layout="intrinsic"
              width={500}
              height={300}
              className="rounded-t-2xl"
            />
          </a>
          <h1
            className="text-lg sm:text-xl font-semibold text-center my-3"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            Foody
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Work;
