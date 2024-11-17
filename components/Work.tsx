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
        <div className="border-[0.5px] border-[#ffffff44] bg-[#181a20] rounded-t-2xl rounded-b-md">
          <a
            href="https://neura-tan.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              onMouseEnter={linkEnter}
              onMouseLeave={linkLeave}
              src="/project1.png"
              width={500}
              height={500}
              alt="project"
              className="rounded-2xl object-fill w-full h-full"
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
        <div className="border-[0.5px] border-[#ffffff44] bg-[#181a20] rounded-t-2xl rounded-b-md">
          <a
            href="https://treatzy.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              onMouseEnter={linkEnter}
              onMouseLeave={linkLeave}
              src="/project2.png"
              width={500}
              height={500}
              alt="project"
              className="rounded-2xl object-fill w-full h-full"
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
        <div className="border-[0.5px] border-[#ffffff44] bg-[#181a20] rounded-t-2xl rounded-b-md">
          <a
            href="https://foody-psi-six.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              onMouseEnter={linkEnter}
              onMouseLeave={linkLeave}
              src="/project3.png"
              width={500}
              height={500}
              alt="project"
              className="rounded-2xl object-fill w-full h-full"
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
